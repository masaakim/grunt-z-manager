# grunt-z-manager

> grunt plugin for [z-manager](https://github.com/morishitter/z-manager)

## Getting Started
This plugin requires Grunti`~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-z-manager --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-z-manager');
```

## The "z_manager" task

### Overview
In your project's Gruntfile, add a section named `z_manager` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  z_manager: {
    adapt: {
      files: {
        'tmp/out.css': ['test/fixtures/z-manager.css']
      }
    }
  },
});
```

## License
Copyright (c) 2014 Masaaki Morishita. Licensed under the MIT license.
