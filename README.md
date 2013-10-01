Node unit test on jasmine
=========================

Server side test case on node.js

* Clone the repository
* Node should be installed on the system( if You dont have node refer to http://blueashes.com/2011/web-development/install-nodejs-on-windows/)
* Install jasmine by command 'npm install -g jasmine-node'
* Test case is written in spec folder

* Test case ends with spec.js 
* Run command 'jasmine-node spec'   ( to run if there is only one test case in spec directory)
* Run command 'jasmine-node spec --autotest' (automaticaly executes test case whenever spec.js file is changed)
* Run comand 'jasmine-node spec -autotest --watch .' (will automaticaly execute test case whenever current directory is changed)

* To execute calculator test case run command  'jasmine-node spec/calculator-spec.js'
* To execute calculator test case run command  'jasmine-node spec/helloworld-spec.js'


