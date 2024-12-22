class PRODUCTPAGE{

   Listing(){

   // cy.xpath('(//*[text()="Sancerre Blanc, 0,75L"])[2]').should('be.visible');
   cy.xpath('(//*[@class="product-price-1"])[5]').should('be.visible');
   cy.xpath('(//*[text()="Chablis Premier Cru, 0,75L"])[2]').should('be.visible');
   cy.xpath('(//*[@class="product-price-1"])[6]').should('be.visible');
   cy.xpath('(//*[text()="Riesling Trocken, 0,75L"])[4]').should('be.visible');
   cy.xpath('(//*[@class="product-price-1"])[7]').should('be.visible');
   cy.xpath('(//*[@class="product-price-1"])[8]').should('be.visible');

   }
   categories(){

      cy.xpath('(//*[@class="landing_page_navbar_children"])[1]').should('be.visible');
      cy.xpath('(//*[.="White"])[2]').should('be.visible');
      cy.xpath('(//*[.="Rose"])[1]').should('be.visible');
      cy.xpath('(//*[.="Sparkling"])[2]').should('be.visible')
      cy.xpath('(//*[.="Promotions"])[1]').should('be.visible');
      cy.xpath('(//*[.="Set & Gifts"])[1]').should('be.visible');


   }
}
export default PRODUCTPAGE;