# jquery-extras [![devDependency Status](https://david-dm.org/osxi/jquery-extras/dev-status.svg)](https://david-dm.org/osxi/jquery-extras#info=devDependencies)

`npm install jquery-extras`

Helpful extras for working with jQuery

# Barfage and Slurpage

These were inspired by paredit-mode for Emacs.

This package is distributed as a UMD module.

## `.barfBackward()`

Given a jQuery object that represents a DOM element, the `.barfBackward()` method moves the first child element to the position immediately before the parent.

## `.barfFoward()`

Given a jQuery object that represents a DOM element, the `.barfForward()` method moves the last child element to the position immediately after the parent.

## `.slurpBackward()`

Given a jQuery object that represents a DOM element, the `.slurpBackward()` method moves the element before the given selector into the given selector's first child position.

## `.slurpForward()`

Given a jQuery object that represents a DOM element, the `.slurpBackward()` method moves the element after the given selector into the given selector's last child position.

# Development

Use `gulp` (default Gulp task) to build to `dist/index.js`.
