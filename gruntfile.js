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
    // require('grunt-typescript')(grunt);
    grunt.loadNpmTasks('grunt-typescript');

    // Define the configuration for all the tasks
    grunt.initConfig({     

        // typescript yeah!
        typescript: {
            base: {
                src: ['scripts/**/{,*/}*.ts'],
                dest: '.tmp/scripts/',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    basePath: '',
                    sourceMap: true,
                    declaration: true
                }
            }
        },

    });

    grunt.registerTask('default', ['typescript']);
};