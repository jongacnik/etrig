# etrig

Super simple programmatic DOM event trigger helper for the browser.

## Getting Started

	npm install etrig

etrig is meant to be consumed in a [CommonJS](http://www.commonjs.org/), [Browserify](http://browserify.org/) environment:
	
	var trigger = require('etrig');
	
	// the following will trigger a load event on [data-button] 
	trigger(document.querySelector('[data-button]'), 'load'); 

## Todo

- Tests
- Event Details