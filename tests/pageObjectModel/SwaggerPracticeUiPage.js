export class SwaggerPracticeUiPage{


    constructor(page){
        this.page=page;
        this.launchPracticeUiLink=page.getByRole('link',{name:'Launch the Practice UI'});     
    }

  async launchPracticeUiPage() {
    await this.launchPracticeUiLink.click();
       
   };
};