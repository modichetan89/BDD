$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/FreeCrmBDD/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Tagging Demo",
  "description": "",
  "id": "tagging-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login to application",
  "description": "",
  "id": "tagging-demo;login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User login with valid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.user_login_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Login to application with invalid credentials",
  "description": "",
  "id": "tagging-demo;login-to-application-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SmokeTest"
    },
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User login with invalid credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.user_login_with_invalid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Validate links",
  "description": "",
  "id": "tagging-demo;validate-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Clicking on all links present on page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.clicking_on_all_links_present_on_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Adding the contacts",
  "description": "",
  "id": "tagging-demo;adding-the-contacts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on contact page",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.user_is_on_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Logout from application",
  "description": "",
  "id": "tagging-demo;logout-from-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@RegressionTest"
    },
    {
      "line": 28,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User logout from application",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
});