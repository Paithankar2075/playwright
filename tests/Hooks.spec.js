const {test, expect } = require('@playwright/test')

test.beforeAll(async()=>{
    console.log("This is before all code")
})

test.beforeEach(async()=>{
    console.log("This is my before each code")
})

test("Test case 1", async( {page} )=>{
    console.log("This is my first test case")
})

test("Test case 2", async( {page} )=>{
    console.log("This is my second test case")
})

test.afterAll(async()=>{
    console.log("This is after all code")
})

test.afterEach(async()=>{
    console.log("This is my after each code")
})