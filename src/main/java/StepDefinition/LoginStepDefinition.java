package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_is_already_on_login_page(){
	    System.setProperty("webdriver.chrome.driver", "D:\\Selenium New\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.freecrm.com");
	}

	
	@When("^Title of login page is freeCRM$")
	public void title_of_login_page_is_freeCRM(){
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password(){
		driver.findElement(By.name("username")).sendKeys("modichetan89");
		driver.findElement(By.name("password")).sendKeys("ttlsh!wwur1");
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button(){
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
				
	}


	@Then("^User is on homepage$")
	public void user_is_on_homepage(){
		String AfterLoginTitle = driver.getTitle();
		System.out.println("Home page title is : "+AfterLoginTitle);
		Assert.assertEquals("CRMPRO", AfterLoginTitle);
	}
}
