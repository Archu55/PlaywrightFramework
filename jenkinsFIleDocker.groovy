/*pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-tests .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'docker run --rm playwright-tests'
            }
        }
    }
}*/

pipeline {
    agent any

    parameters {
        credentials(
            name: 'GiHUbCredentials',
            credentialType: 'com.cloudbees.plugins.credentials.impl.UsernamePasswordCredentialsImpl',
            description: 'GitHub Username/Password Credentials',
            defaultValue: 'GitHub-pat-token',
            required: true
        )

        choice(
            name: 'TEST_ENV',
            choices: ['staging', 'qa', 'preprod'],
            description: 'Target environment'
        )

        choice(
            name: 'SUITE',
            choices: ['full', 'smoke', 'sanity'],
            description: 'Regression suite'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Browser'
        )

        booleanParam(
            name: 'HEADLESS',
            defaultValue: true,
            description: 'Run in headless mode'
        )

        string(
            name: 'EMAIL_RECIPIENTS',
            defaultValue: 'kumariarchana70@gmail.com',
            description: 'Email Recipients'
        )
    }

    triggers {
        cron('H 2 * * 1-5')
    }

    options {
        timestamps()
        timeout(time: 2, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr: '30'))
    }

    environment {
        REPORT_DIR = 'playwright-report'
        ZIP_NAME = "regression-report-${env.BUILD_NUMBER}.zip"

        HEADLESS_FLAG = "${params.HEADLESS ? '' : '--headed'}"
        

        // Mapping Jenkins parameters to environment variables
        TEST_ENV = "${params.TEST_ENV}"
        SUITE = "${params.SUITE}"
        BROWSER = "${params.BROWSER}"
    }

    stages {

        stage('Checkout') {
            steps {
                git(
                    url: 'https://github.com/Archu55/PlaywrightFramework.git',
                    branch: 'main',
                    credentialsId: params.GiHUbCredentials
                )
            }
        }

        stage('Build Docker Image') {
            steps {
            bat 'docker build -t playwright-tests .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker run --rm -e HEADLESS="%HEADLESS%" playwright-tests'
            }
        }
      
    }

    post {
        always {
            emailext(
                to: params.EMAIL_RECIPIENTS,
                subject: "Regression Run: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",
                attachmentsPattern: "${env.ZIP_NAME}",
                mimeType: 'text/html',
                body: """
                    <h3>Automation Regression Report</h3>
                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>Result:</b> ${currentBuild.currentResult}</p>
                    <p><b>Environment:</b> ${env.TEST_ENV}</p>
                    <p><b>Suite:</b> ${env.SUITE}</p>
                    <p><b>Browser:</b> ${env.BROWSER}</p>
                    <p><b>Headless:</b> ${params.HEADLESS}</p>
                    <p><a href="${env.BUILD_URL}">View Build</a></p>
                """
            )
        }

        success {
            echo 'Regression run completed successfully.'
        }

        failure {
            echo 'Regression run failed.'
        }
    }
}