import {test, expect } from "@playwright/test";

test("API GET request",async({page,request})=> {
    const response=await request.get('https://billpay-api.gauravkhurana-practice-api.workers.dev/v1/users?page=1&limit=10', 
    {
   headers:{
    'accept': 'application/json' ,
    'X-API-Key': 'demo-api-key-123',
    'X-Request-Id': 'swagger-h009rk4d0',
   },
   params: {search:"demo.test3@test.com"},
    })
    
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.data[0].email).toBe("demo.test3@test.com");

  }); 

  /*export class UsersApiPage {

  constructor(request) {
    this.request = request;
    this.baseURL = "https://billpay-api.gauravkhurana-practice-api.workers.dev";
  }

  async getUsers(pageNumber = 1, limit = 10) {

    const response = await this.request.get(
      `${this.baseURL}/v1/users?page=${pageNumber}&limit=${limit}`
    );

    return response;
  } */


