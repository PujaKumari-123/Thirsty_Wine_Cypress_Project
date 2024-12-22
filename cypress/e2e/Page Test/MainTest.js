import Homepage from "../../support/Projectpom/Homepage";
import LOGIN from "../../support/Projectpom/Loginpage";
import PRODUCTPAGE from "../../support/Projectpom/Productpage";
import ADDCART from "../../support/Projectpom/Addtocart";
import CheckoutFlow from "../../support/Projectpom/CheckoutFlow";
describe('', () => {
    const homepage1 = new Homepage;
    const login1 = new LOGIN;
    const productpage1 = new PRODUCTPAGE;
    const add=new ADDCART;
    const checkout= new CheckoutFlow;
    
    it('Site Activities', () => {
        login1.EnterUrl();
        login1.Homepage();
        login1.loginwin();
        homepage1.Homepagewin();
        productpage1.Listing();
        productpage1.categories();
        add.Addtocart();
        checkout.Checkoutbuttton();
        checkout.FillingPage();
    });
});


