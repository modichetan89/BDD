package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "D:/Workspace/FreeCrmBDD/src/main/java/Features/hooks.feature"
		,glue = {"StepDefinition"}
		,plugin = {"pretty","html:test-output", "json:json_output/result.json", "junit:junit_xml/cucumber.xml"} 
		,monochrome = true 
		,dryRun = false
		,strict = true
		//,tags = {"@End2EndTest, @SmokeTest"}
		)

public class TestRunner {
	
}

