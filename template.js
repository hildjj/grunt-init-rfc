/*
 * grunt-init-rfc
 * https://github.com/hildjj/grunt-init-rfc
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create an Internet-Draft/RFC from markdown with ' +
  '[grunt-init][], including a web server that does live refreshes of a ' +
  'web page as the source changes.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'grunt'}, [
    // Prompt for these values.
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_first', function(value, props, done) {
      done(null, props.author_name.split(/\s+/)[0]);
    }),
    init.prompt('author_last', function(value, props, done) {
      done(null, props.author_name.split(/\s+/)[1]);
    }),
    init.prompt('author_organization', function(value, props, done) {
      done(null, props.author_email.split(/@/)[1]);
    }),

    init.prompt('name', function(value, props, done) {
      if (!value.match(/draft-/)) {
        value = 'draft-' + props.author_last.toLowerCase() + "-" + value;
      }
      done(null, value);
    }),
    init.prompt('repository'),
  ], function(err, props) {
    props.author_fi = props.author_first[0];
    props.date = new Date();
    props.devDependencies = {
      "grunt": "^0.4.4",
      "grunt-contrib-watch": "^0.6.0",
      "grunt-express": "^1.2.1",
      "grunt-kramdown-rfc2629": "0.0.1",
      "jit-grunt": "^0.3.2"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
