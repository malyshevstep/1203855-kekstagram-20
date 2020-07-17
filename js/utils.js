
'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var KeyCode = {
    ESCAPE: 'Escape',
    ESC: 'Esc',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
  };

  var hideElement = function (element) {
    element.classList.add('hidden');
  };

  var showElement = function (element) {
    element.classList.remove('hidden');
  };

  var getRandomValue = function (min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  };

  var getRandomElements = function (count, min, max) {
    var elements = [];
    while (elements.length < count) {
      var value = getRandomValue(min, max);
      if (!elements.includes(value)) {
        elements.push(value);
      }
    }
    return elements;
  };

  var initPopup = function (template) {
    var popupTemp = template.cloneNode(true);
    var popup = new window.Notice(popupTemp);
    popup.init();
  };

  window.utils = {
    KeyCode: KeyCode,
    FILE_TYPES: FILE_TYPES,
    hideElement: hideElement,
    showElement: showElement,
    getRandomElements: getRandomElements,
    initPopup: initPopup,
  };
})();
