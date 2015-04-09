'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-ts');

    // Define the configuration for all the tasks
    grunt.initConfig({     

        ts: {
            main: {
                src: ['typescript/**/{,*/}*.ts'],
                // dest:'javascript/',
                out:'javascript/main.js',

                options: {
                
                }
            }
        },

    });

    grunt.registerTask('default', ['ts']);
};