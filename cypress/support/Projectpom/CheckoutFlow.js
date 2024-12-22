///<reference types='cypress' />
class CheckoutFlow{

    Checkoutbuttton(){
         cy.xpath("(//*[@data-prefix='fas'])[2]").click()
        cy.xpath("//*[.='Checkout']").click({force: true});

    }

    FillingPage(){

        cy.xpath("(//*[@class='chakra-input css-ox0j2p'])[1]").type("Puja")
        cy.xpath("(//*[@class='chakra-input css-ox0j2p'])[2]").type("Kumari")
        cy.xpath("(//*[@class='chakra-input css-ox0j2p'])[3]").type("382120319283")
        cy.xpath("(//*[@class='chakra-input css-ox0j2p'])[4]").type("qwesadkwqs122@g.com")
        cy.xpath("(//*[@class='chakra-input css-ox0j2p'])[5]").type("efkwdscki")
        cy.get('[type="submit"]').click({force: true})
        cy.xpath('(//*[@class="chakra-input css-ox0j2p"])[1]').type("efdczxdc")
        cy.xpath('(//*[@class="chakra-input css-ox0j2p"])[2]').type("efdscxzefdsc")
        cy.xpath('(//*[@class="chakra-input css-ox0j2p"])[3]').type("rfvcxwefsd")
        cy.xpath('(//*[@class="chakra-input css-ox0j2p"])[4]').type("ewfdscxefdsc")
        cy.xpath('(//*[@class="chakra-input css-ox0j2p"])[5]').type("ewfdscfedc")
        cy.get('[type="submit"]').click({force: true})
        cy.xpath('(//*[@aria-hidden="true"])[20]').click();
        cy.get('[type="submit"]').click({force: true})
        cy.get('[type="submit"]').click({force: true});
        cy.xpath("//*[.='Thank you for your purchase!']").should("be.visible")

    }

}
export default CheckoutFlow;