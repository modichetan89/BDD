Feature: Hooks Demo

@First
Scenario: Add product to basket
Given User is on product detail page
When User clicks on Add Product button
Then Product successfully added to basket

@Second
Scenario: Add address
Given User is on Address page
When User clicks on Add Address button
Then Address saved into account

@Third
Scenario: Add payment
Given User is on payment page
When User clicks on Add payment button
Then Payment saved into account

#Comment added to see git changes