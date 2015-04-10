var config = {
    paths: {
        html: {
            src:  ['src/**/*.html'],
            dest: 'build'
        },
        javascript: {
            src:  ['src/js/**/*.js'],
            dest: 'build/js'
        },
        css: {
            src: ['src/css/**/*.scss'],
            // src: ['src/css/**/*.less'],
            dest: 'build/css'
        },
        images: {
            src: ['src/img/**/*'],
            dest: 'build/img'
        }
    }
};

module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              
      dist: {
        options: {
          require: ['susy','breakpoint']
        },
        files: {        
          src: 'src/css/*.scss',                
          dest: 'build/css/style.css' 
        }
      }
    },
    concat: {
      scripts: {
          src: config.paths.javascript.src,
          dest: config.paths.javascript.dest + '/script.js',
          options: {
              separator: ';'
          }
      },
    },
    watch: {
      scripts: {
        files: config.paths.javascript.src,
        tasks: ['concat'],
        options: {
          interrupt: true,
        },
      },
      css: {
        files: config.paths.css.src,
        tasks: ['sass']
      },
    },
  });

  grunt.loadNpmTasks('grunt-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['watch']);


};