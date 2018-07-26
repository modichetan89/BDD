package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class hooksStepDefinition {

	//Global Hooks  
	//This will run before and after every scenario.
	//If need ordering then use parameter order=0 with annotation
	
	@Before(order=0)
	public void envSetup(){
		System.out.println("Opening Chrome browser");
	}
	
	@After(order=0)
	public void tearDown(){
		System.out.println("Closing Chrome browser");
	}
	
	@Before(order=1)
	public void envSetup1(){
		System.out.println("Entering URL");
	}
	
	@After(order=1)
	public void tearDown1(){
		System.out.println("Taking Screenshot");
	}
	
	
	
	//Local Hooks or Tagged Hooks
	//This will run before and after particular scenario only as per tags provided in feature file
	//E.g if you want to run before and after only particular method then this can be used.
	@Before("@First")
	public void localBefore(){
		System.out.println("local hooks before for first scenario");
	}
	
	@After("@First")
	public void localAfter(){
		System.out.println("local hooks After for first scenario");
	}
	
	
	
	//First Scenario
	@Given("^User is on product detail page$")
	public void user_is_on_product_detail_page(){
		System.out.println("User is on product detail page");
	}

	@When("^User clicks on Add Product button$")
	public void user_clicks_on_Add_Product_button(){
		System.out.println("User clicks on Add Product button");
	}

	@Then("^Product successfully added to basket$")
	public void product_successfully_added_to_basket() {
		System.out.println("Product successfully added to basket");
	}
	
	//Second Scenario
	@Given("^User is on Address page$")
	public void user_is_on_Address_page(){
		System.out.println("User is on Address page");
	}

	@When("^User clicks on Add Address button$")
	public void user_clicks_on_Add_Address_button(){
		System.out.println("User clicks on Add Address button");
	}

	@Then("^Address saved into account$")
	public void address_saved_into_account(){
		System.out.println("Address saved into account");
	}

	//Third Scenario
	@Given("^User is on payment page$")
	public void user_is_on_payment_page(){
		System.out.println("User is on payment page");
	}

	@When("^User clicks on Add payment button$")
	public void user_clicks_on_Add_payment_button() {
		System.out.println("User clicks on Add payment button");
	}

	@Then("^Payment saved into account$")
	public void payment_saved_into_account(){
		System.out.println("Payment saved into account");
	}

}
