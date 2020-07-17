'use strict';

(function () {
  var STATUS_OK = 200;
  var TIMEOUT = 10000; // 10 секунд
  var templateSuccess = document.querySelector('#success').content.querySelector('.success');
  var templateError = document.querySelector('#error').content.querySelector('.error');

  var UrlAdress = {
    LOAD: 'https://javascript.pages.academy/kekstagram/data',
    SEND: 'https://javascript.pages.academy/kekstagram'
  };

  var Method = {
    POST: 'POST',
    GET: 'GET'
  };

  var Type = {
    JSON: 'json',
    FORM: 'multipart/form-data'
  };

  var configureXhr = function (xhr, onLoad, onError, type) {
    xhr.responseType = type;
    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT;
  };


  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    configureXhr(xhr, onLoad, onError, Type.JSON);
    xhr.open(Method.GET, UrlAdress.LOAD);
    xhr.send();
  };

  var onSend = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    configureXhr(xhr, onLoad, onError, Type.JSON);
    xhr.open(Method.POST, UrlAdress.SEND);
    xhr.send(data);
  };

  var showSuccessMessage = function () {
    window.utils.initPopup(templateSuccess);
  };

  var showErrorMessage = function () {
    window.utils.initPopup(templateError);
  };

  window.backend = {
    load: load,
    onSend: onSend,
    showSuccessMessage: showSuccessMessage,
    showErrorMessage: showErrorMessage
  };
})();
