describe('OTP', () => {

    context('When the session has a phone', () => {
        before(() => {
            cy.visit('?hsession=80c047a6-fdcd-4f06-a6a7-573c4706cbd1')
            cy.contains('ATOMOS usa a Quanto para visualizar seus dados bancários');
            cy.percySnapshot();
        });

        it('Start button should be enabled', () => {
            cy.get('#start_connect').should('not.have.attr', 'disabled');
        })

        it('The phone should be filled with value', () => {
            cy.get('#start_connect').click();
            cy.get('#phone').should('have.value', '(11) 98715-3151');
        })

        it('The button "Continue" should be enabled', () => {
            cy.get('#next_code_verify').should('not.have.attr', 'disabled');
        })
    })

    context('When the session has an email', () => {
        before(() => {
            cy.visit('?hsession=fd71d3f4-265c-49f6-b054-39825351911b')
            cy.contains('ATOMOS usa a Quanto para visualizar seus dados bancários');
        });

        it('Start button should be enabled', () => {
            cy.get('#start_connect').should('not.have.attr', 'disabled');
        })

        it('The email should be already filled with value', () => {
            cy.get('#start_connect').click();
            cy.get('#email').should('have.value', 'uekita@gmail.com');
        })

        it('The button "Continue" should be enabled', () => {
            cy.get('#next_code_verify').should('not.have.attr', 'disabled');
        })
    })
})