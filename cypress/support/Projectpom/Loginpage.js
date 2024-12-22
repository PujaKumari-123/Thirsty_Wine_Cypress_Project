class LOGIN{
     EnterUrl() {
        cy.visit("https://pay-pal-pioneers-068.vercel.app/");

     }
     Homepage(){
      cy.get('[data-icon="user"]').click({force: true});
      cy.xpath('//*[.="Log In"]').click({force: true});
     
      
     }
     loginwin(){
            cy.get('[type="email"]').type("puja37989@gmail.com");
            cy.get('[type="password"]').type("$123puja");
            cy.go('back')

     }
}
export default LOGIN;
           






