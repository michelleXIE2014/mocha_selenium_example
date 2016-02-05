# mocha_selenium_example    
I am a java automation test developer(selenium), 
This is my first trying to use mocha and javascript with selenium. 
I am doing some comparison between javascript selenium and java selenium.
I want to share the information with all automation testers who are selecting tools.

For Java selenium: mvn + testng + browerstack + jenkins   
For Javascript: mocha + node.js + browserstack + circleCI
For python: robotFramework + jenkins 

| factors         |        Java   |    Javascript |        python |    
| -------------   |-------------  | ------------- | ------------- |    
| Installation    | maven pom.xml | mocha package.json  | pybot setup.py |    
| Test library    |               |                     |                |    
| - local browser |               |                     |                |    
| - report        | testng report: xml |  looking for tool to generation xml report  | robot test report  |    
| - parallel      | yes           |  yes, not in the demo yet  |  not try yet |    
| - pageFactory   | yes           | did not see it in the api doc | do not know |   


## How to run it locally    
0. open your terminal and install node.js first.    
1. run `npm install`    
2. run `mocha googleTest.js`    

## How to run it on circleCI    
1. add the circleCI project in circleCI.    
2. circleCI picks up the circle.xml and automatically run the test.     

## How to run it on jenkins    
1. create a jenkins job    
2. in the job configuration: set commands: npm install && mocha googleTest.js    






