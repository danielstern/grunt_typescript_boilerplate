'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');

    // Define the configuration for all the tasks
    grunt.initConfig({     

        typescript: {
            main: {
                src: ['typescript/**/{,*/}*.ts'],
                dest: 'javascript/main.js',


                /* Options are, well... optional. */
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