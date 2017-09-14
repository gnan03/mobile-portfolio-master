module.exports = function(grunt) {
grunt.initConfig({
	critical: {
        dist: {
            options: {
                inline: true,
                base: './',
                minify: true,
                css: [
                    'css/print.css',
                    'css/style.css',
                ],
            },
            files: [
                {src: ['index.html'], dest: 'dist/index.html'},
                {src: ['project-2048.html'], dest: 'dist/project-2048.html'},
                {src: ['project-mobile.html'], dest: 'dist/project-mobile.html'},
                {src: ['project-webperf.html'], dest: 'dist/project-webperf.html'}

            ]
        },
        pizza: {
        options: {
        minify: true,
        base: './',
        css: [ 'views/css/main.css' ]
        },
        src: 'views/pizza.html',
        dest: 'dist/views/pizza.html'

    }
    }
});
grunt.loadNpmTasks('grunt-critical');
grunt.registerTask('default', ['critical']);
};