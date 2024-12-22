class ADDCART{
        Addtocart(){
            cy.xpath('(//*[@class="product-cart-button"])[5]').click({force: true}).should('be.visible');
            cy.xpath('(//*[@fill="currentColor"])[2]').click({force: true});
            cy.get('[class="fa-solid hover-effect fa-plus"]').click({force: true});
            
     }
       

}
export default ADDCART;