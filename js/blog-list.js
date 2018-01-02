(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var trigger = function trigger() {
  //  TODO
  console.log('-- trigger --');
};

var init = function init() {
  trigger();
};

init();

})));
