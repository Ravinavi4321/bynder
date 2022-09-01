class signIn {
    get_logo()
    {
        cy.get('[title="Bynder"]').then(logoText => {
            const logo = logoText.text().trim()
            expect(logo).to.eq('Bynder')
        })
    }
    get_login(email , password) {
        cy.get('#inputEmail').type(email)
        cy.get('#inputPassword').type(password)
        cy.get('[type="submit"]').click()
    }
    verify_lostPasswordLink()
    {
        cy.contains('Lost password?').click()
        cy.url().should('eq', 'https://wave-trial.getbynder.com/user/forgotPassword/?redirectToken=')
    }
    validate_user()
    {
        cy.get('[class="admin-dropdown profile"]').then(user => {
          const profile = user.text().trim()
          cy.log("the profile text:" +profile) 
          expect(profile).to.eq('Ravi kumar')  
          cy.get('[class="admin-dropdown profile"]').click({force : true})
          cy.get('[class="logout"]').click()
        })
    }
    validate_logout()
    {
        cy.get('.cbox_messagebox').then(logoutValidation => {
            const logout = logoutValidation.text().trim()
            expect(logout).to.eq('You have successfully logged out.')
        })
    }
    validate_inValidLoginDetails(email, password)
    {
        cy.get('#inputEmail').type(email)
        cy.get('#inputPassword').type(password)
        cy.get('[type="submit"]').click()
        cy.get('[class="cbox_messagebox"]').then(invalid => {
            const invalidMessage = invalid.text().trim()
            expect(invalidMessage).to.eq('You have entered an incorrect username or password.')
        })
    }

}

export default signIn;
   
