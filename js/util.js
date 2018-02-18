window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var functionsObject = {};

  functionsObject.isEscEvent = function(evt, action) {
    if (evt.keyCode === 27) {
      action();
    }
  };
  functionsObject.isEnterEvent = function(evt, action) {
    if (evt.keyCode === 13) {
      action();
    }
  };
  functionsObject.randomNumber = function(array) {
    return Math.floor(Math.random()*array.length);
  };
  return functionsObject;
})();
