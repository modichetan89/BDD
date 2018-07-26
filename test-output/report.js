$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/FreeCrmBDD/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Hooks Demo",
  "description": "",
  "id": "hooks-demo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 228821,
  "status": "passed"
});
formatter.before({
  "duration": 109278,
  "status": "passed"
});
formatter.before({
  "duration": 92374,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Add product to basket",
  "description": "",
  "id": "hooks-demo;add-product-to-basket",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on product detail page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Add Product button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Product successfully added to basket",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_product_detail_page()"
});
formatter.result({
  "duration": 168466537,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.user_clicks_on_Add_Product_button()"
});
formatter.result({
  "duration": 109882,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.product_successfully_added_to_basket()"
});
formatter.result({
  "duration": 73053,
  "status": "passed"
});
formatter.after({
  "duration": 231839,
  "status": "passed"
});
formatter.after({
  "duration": 59771,
  "status": "passed"
});
formatter.after({
  "duration": 52526,
  "status": "passed"
});
formatter.before({
  "duration": 77884,
  "status": "passed"
});
formatter.before({
  "duration": 75468,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Add address",
  "description": "",
  "id": "hooks-demo;add-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Address page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Add Address button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Address saved into account",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_Address_page()"
});
formatter.result({
  "duration": 75468,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.user_clicks_on_Add_Address_button()"
});
formatter.result({
  "duration": 76676,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.address_saved_into_account()"
});
formatter.result({
  "duration": 68827,
  "status": "passed"
});
formatter.after({
  "duration": 56148,
  "status": "passed"
});
formatter.after({
  "duration": 56752,
  "status": "passed"
});
formatter.before({
  "duration": 71846,
  "status": "passed"
});
formatter.before({
  "duration": 59168,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add payment",
  "description": "",
  "id": "hooks-demo;add-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on payment page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User clicks on Add payment button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Payment saved into account",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_payment_page()"
});
formatter.result({
  "duration": 81506,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.user_clicks_on_Add_payment_button()"
});
formatter.result({
  "duration": 73054,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.payment_saved_into_account()"
});
formatter.result({
  "duration": 68828,
  "status": "passed"
});
formatter.after({
  "duration": 247537,
  "status": "passed"
});
formatter.after({
  "duration": 44073,
  "status": "passed"
});
});