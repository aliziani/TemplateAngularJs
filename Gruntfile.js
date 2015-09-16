module.exports = function(grunt) {
  grunt.initConfig({
    env: {
      dev: 'dev',
      dist: 'dist'
    },
    clean:{
       src: ['<%= env.dist %>/**/*'],
       options:{
         force: true,
       }
    },
    copy: {
        assets: {
          expand: true,
          cwd: '<%= env.dev %>/assets', // set working folder / root to copy
          src: '**/*',
          dest: '<%= env.dist %>/assets/',
        }
    },
    concat: {
      files:{
        src: [
                '<%= env.dev %>/application/config/config.js', // first config files
                '<%= env.dev %>/application/*.js'  // then other files
              ],
        dest: '<%= env.dist %>/application/app.js'
      },
    },
    ngtemplates: {
        app:{
          options:{
            module: 'myApp' // default is 'app'
          },
          src: '<%= env.dev %>/**/*.tpl.html',
          dest: '<%= env.dist %>/application/templates.js'
        }
    }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['clean', 'copy', 'concat', 'ngtemplates']);
};
