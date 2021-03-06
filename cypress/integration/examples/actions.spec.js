context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it.only('should be on the page', () => {
        cy.url().should('include', "/index.php")
    })
})
