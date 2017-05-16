
'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-run');
 
  var testRoot = 'test';
  var targetRoot = 'dist';
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    run: {
      server: {
        args: ['./server.js'],
        options: {
          passArgs: [
            'port'
          ]
        }
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: targetRoot+ '/',
      },
    },
    karma: {
      unit: {
        // Ref to this config
        configFile: testRoot + '/config/karma-unit.conf.js'
      }
    },
    clean: {
      options: { force: true },
      stuff: [testRoot]
    }
  });

  grunt.registerTask("test", ["karma:unit"]);
  grunt.registerTask("default", ["clean", "copy", "run:server"]);
};