# AceGWT

An integration of the [Ace Editor](http://ace.c9.io/) into [GWT](http://www.gwtproject.org/).  If you want to embed a powerful text editor in a GWT application, AceGWT might be just what you're looking for!

The [wiki](https://github.com/daveho/AceGWT/wiki) has more information, including:

* [Documentation](https://github.com/daveho/AceGWT/wiki/Documentation) on using AceGWT in your application
* [Screenshots](https://github.com/daveho/AceGWT/wiki/Screenshots)
* [Status](https://github.com/daveho/AceGWT/wiki/Status): what is implemented and what isn't

Also, there is [javadoc](http://daveho.github.io/AceGWT/api/).

## Latest news

20 January 2015:

* Support for selection change events, courtesy of [Roman Sutormin](https://github.com/rsutormin).

12 October 2014:

* Updated to latest version of Ace from [here](https://github.com/ajaxorg/ace-builds/tree/master/src), plus applied a small fix which has been submitted as a [push request](https://github.com/ajaxorg/ace/pull/2189) (code changes in this push request already applied to code in this repository).
* Added autocomplete tooltip support based on latest updates to Ace Editor ([forum](https://groups.google.com/forum/#!topic/ace-discuss/M4vw4XdVzBU), push request [2148](https://github.com/ajaxorg/ace/pull/2148)).

27 June 2014:

* Added experimental support for custom autocompleters, based on suggestions from Chris Ainsley.

26 June 2014:

* Updated to latest version of Ace. A handful of new modes and themes added.  Autocomplete is now supported.

18 March 2014:

* Updated to latest version of Ace.  Various new editor modes and themes added.  Also, AceGWT now packages the minified versions of the Ace JavaScript files, which should reduce load time.
* Issues with the text cursor position in Safari may be fixed.

25 June 2013:

* Updated to latest version of Ace, many new editor modes added.
* Initialization of AceEditor object has changed: the default constructor has been un-deprecated, and **no** changes should be made to the .ace\_editor CSS class.
