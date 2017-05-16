# Sort table using Angular


# Installation Instructions

	npm is a NodeJS package manager.

1. `$ cd yourapp`
2. `$ sudo npm install -g grunt-cli`
3. `$ sudo npm install -g bower`
4. `$ npm install`
5. `$ bower install`
6. `$ grunt

# App files
`app/`:
* *css*	- add app level LESS files here. `@import` them into the `style.less` file
* *img* - add images here 
* *index.html with necessary script file added.

## Generate source file

run the below command
1. go to the directory where you have Gruntfile.js
2. 'grunt'


## Modify port if the server is running on 9000 port.

The following changes should be made in the server.js file:
1. Line 17:17_:    change the port.


## Run

1. run `$ grunt.
2. it will listen to localhost with port 9000.(http://localhost:9000/#/)

## Tests

Unit test files should be placed in the `test/unit` folder.

To run the unit tests:

1. grunt test - this will launch Testem and execute specs in Chrome