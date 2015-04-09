// Generated on 2014-08-11 using
// generator-webapp 0.5.0-1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            typescript: {
                files: ['**/{,*/}*.ts'],
                tasks: ['typescript']
            }
        },
       

        // typescript yeah!
        typescript: {
            base: {
                src: ['app/typescript/**/{,*/}*.ts'],
                dest: '.tmp/scripts/',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: 'app/typescript',
                    sourceMap: true,
                    declaration: true
                }
            }
        },

    });

    grunt.registerTask('default', ['typescript']);
};