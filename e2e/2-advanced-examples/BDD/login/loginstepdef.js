import signIn from "../../../../support/PageObjectModel/bynderLogin";
import { Given , When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { And } from "@badeball/cypress-cucumber-preprocessor/lib/methods";

const login = new signIn()

Given("I visit Bynder site", () => {
    cy.visit("https://wave-trial.getbynder.com/login/");
  });

  When("I login to the dashboard by using valid credentials" , () => {
    login.get_logo()
    login.get_login(loginData.username, loginData.Password)
    
  })
  And('clicking on profile dropdown', () => {
    login.validate_user()
  })
  Then('validating user successfully logout', () => {
    login.validate_logout()
    login.validate_inValidLoginDetails(loginData.invalidPassword, loginData.invalidUsername)
    login.verify_lostPasswordLink()
  })


