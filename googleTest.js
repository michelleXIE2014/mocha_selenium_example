var webdriver = require('selenium-webdriver'),
	By = require('selenium-webdriver').By,
	until = require('selenium-webdriver').until,
	test = require('selenium-webdriver/testing'),
	assert = require('assert');

test.describe('googleSearch', function() {
		this.timeout(15000000);
		test.it('should work', function() {
				var capabilities = {
					'browserName': 'chrome',
				}

				// 		  connect to browserstack
				//        var driver = new webdriver.Builder().
				//        usingServer('http://hub.browserstack.com/wd/hub').
				//        withCapabilities(capabilities).
				//        build();

				//local browser
				//      var webdriver = require('selenium-webdriver');
				//      var chrome = require('selenium-webdriver/chrome');
				//      var path = require('chromedriver').path;
				//      console.log("SOMETHING =" + path);
				//      var service = new chrome.ServiceBuilder(path).build();
				//      chrome.setDefaultService(service);
				//
				//      var driver = new webdriver.Builder()
				//          .withCapabilities(webdriver.Capabilities.chrome())
				//          .build();

				// connect to selenium grid
				var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

				driver.get("http://google.com");
				driver.wait(until.titleIs('Google'), 40000);

				driver.wait(until.elementLocated(By.css("[title='Search']")), 40000);

				var searchBarElement = driver.findElement(By.css("[title='Search']"));

				searchBarElement.sendKeys("I love selenium");

				driver.wait(until.titleIs('Google'), 40000);

				searchBarElement.sendKeys(webdriver.Key.RETURN);

				driver.wait(function() {
						return driver.findElements(By.css("#hdtb-msb")).then(function(elements) {
							return elements[0];
						});
					}, 100000, 'Failed to find element after 1000 second');

				driver.findElement(By.css("a.iu-card-header")).getText().then(function(textValue) {
					console.log("------  the text is " + textValue);
					assert.equal(textValue, "Images for I love selenium");
				});

				driver.quit();
			});
	});

