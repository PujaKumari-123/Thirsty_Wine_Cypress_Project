class Homepage{
     Homepagewin(){
        cy.get('[id="landing_page_header"]').should('be.visible');
        cy.get('[data-icon="bookmark"]').should('be.visible');
        cy.get('[data-icon="cart-shopping"]').should('be.visible');
        cy.xpath('(//*[.="Search"])[1]').should('be.visible');
        cy.xpath('(//*[@fill="currentColor"])[1]').should('be.visible');
        cy.xpath('(//*[@fill="currentColor"])[2]').click();
        cy.go("back");
        cy.xpath('//*[.="CATALOG"]').should('be.visible');
        cy.xpath('(//*[@class="landing_page_footer_children"])[1]').should('be.visible');
        cy.xpath('(//*[@class="landing_page_footer_children"])[2]').should('be.visible');
        cy.xpath("//*[text()='White wine']").should('be.visible');
        cy.xpath("//*[text()='Sparkling wine']").should('be.visible');
        cy.xpath('(//*[text()="Promotions"])[2]').should('be.visible');
        cy.xpath('//*[text()="Set and Gifts"]').should('be.visible');
        cy.xpath('//*[text()="SUPPORT"]').should('be.visible');
        cy.xpath('(//*[text()="Terms of use"])').should('be.visible');
        cy.xpath('//*[text()="Privacy Policy"]').should('be.visible');
        cy.xpath('//*[text()="Delivery and Payment"]').should('be.visible');
        cy.xpath('//*[text()="Returns and Exchange"]').click();
        cy.xpath('//*[text()="OUR COMPANY"]').click();
        cy.xpath('//*[text()="About us"]').click();
        cy.xpath('(//*[@class="landing_page_footer_children"])[13]').click();
        cy.xpath('(//*[@class="landing_page_footer_children"])[14]').click();
        cy.xpath('(//*[@class="landing_page_footer_children"])[15]').click();
        cy.xpath('(//*[@class="landing_page_footer_children"])[16]').click();
        cy.xpath('(//*[@class="landing_page_footer_children"])[17]').click();
        cy.xpath('(//*[@class="landing_page_footer_titles"])[4]').click();
        cy.xpath('(//*[@class="landing_page_footer_titles"])[5]').click();
        cy.xpath('//*[text()="Bengulure, India"]').click();
     }
}
export default Homepage;