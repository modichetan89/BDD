@FunctionalTest
Feature: Tagging Demo

@SmokeTest @RegressionTest
Scenario: Login to application
Given User login with valid credentials

@SmokeTest @RegressionTest
Scenario: Login to application with invalid credentials
Given User login with invalid credentials

@End2EndTest
Scenario: Validate links
Given Clicking on all links present on page

@SmokeTest
Scenario: Adding the contacts
Given User is on contact page

@RegressionTest
Scenario: Adding the user details
Given User is on details page

@RegressionTest
Scenario: Adding product to basket
Given User is on product details page 

@RegressionTest @End2EndTest
Scenario: Logout from application
Given User logout from application

Scenario: Quit the browser
Given Closing the browser

