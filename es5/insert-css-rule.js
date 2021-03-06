var styleSheet = (function() {
  var style = document.createElement('style');

  // add a media (and/or media query) here if you'd like
  // style.setAttribute('media', 'only screen and (max-width : 1024px)');

  // WebKit hack
  style.appendChild(document.createTextNode(''));

  document.head.appendChild(style);

  return style.sheet;
})();

// usage
styleSheet.insertRule('header { float: left; opacity: 0.8; }', 1);
