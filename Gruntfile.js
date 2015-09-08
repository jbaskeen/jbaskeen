
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      "init-css": {
        expand: true,
        cwd: './bower_components',
        src: [
          'bootstrap/dist/css/**'
        ],
        dest: './app/css/libs/'
      },
      "init-fonts": {
        expand: true,
        cwd: './bower_components',
        src: [
          'font-awesome/css/font-awesome.min.css',
          'font-awesome/fonts/**',
          'fonts-raleway/css/raleway.min.css',
          'fonts-raleway/fonts/fonts-raleway/**',
          'lato/css/lato.min.css',
          'lato/font/**'
        ],
        dest: './app/fonts/libs/'
      },
      "init-js": {
        expand: true,
        cwd: './bower_components',
        src: [
          'angular/angular.min.js',
          'jquery/dist/jquery.min.*'
        ],
        dest: './app/js/libs/'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['']);
  grunt.registerTask('init-copy', ['copy:init-css', 'copy:init-fonts', 'copy:init-js']);

};
