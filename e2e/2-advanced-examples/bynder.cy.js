/// <reference types = "cypress" />

import signIn from '../../support/PageObjectModel/bynderLogin'

describe("bynder test scenario", () => {
    let loginData
       const login = new signIn()
       before(function(){
          cy.fixture('bynder').then(function(data){
              loginData = data.userDetails
          })
       })
    it("Login test case", ()=> {
         cy.visit("https://wave-trial.getbynder.com/login/")
         login.get_logo()
         login.get_login(loginData.username, loginData.Password)
         login.validate_user()
         login.validate_logout()
         login.validate_inValidLoginDetails(loginData.invalidPassword, loginData.invalidUsername)
         login.verify_lostPasswordLink()

    })
})