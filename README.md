# grunt-init-rfc

> Create an Internet-Draft/RFC from markdown with [grunt-init][], including a
> web server that does live refreshes of a web page as the source changes.

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/`
directory. It's recommended that you use git to clone this template into that
directory, as follows:

```
git clone https://github.com/hildjj/grunt-init-rfc.git ~/.grunt-init/rfc
```

_(Windows users, see [the documentation][grunt-init] for the correct
destination directory path)_

You'll also need:

* [xml2rfc v2.4.5 or higher](http://svn.tools.ietf.org/svn/tools/xml2rfc/releases/)
* [kramdown-rfc2629](https://github.com/cabo/kramdown-rfc2629)

## Usage

At the command-line, cd into an empty directory, run this command and follow
the prompts.

```
grunt-init rfc
```

_Note that this template will generate files in the current directory, so be
sure to change to a new directory first if you don't want to overwrite existing
files._

Answer a couple of questions.  Install the pre-requisite libraries:

```
npm install
```

Then start the server:

```
grunt server
```

Your default web browser will pop up with a skeleton RFC.  Edit the draft-*.md file in
your favorite text editor.  When you save the file... look at your browser
window.

