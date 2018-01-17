'use strict';

function goFast() {
  var sanic = document.createElement('img');
  sanic.setAttribute('src', window.location.origin + '/images/gotta-go-fast.gif');
  sanic.classList.add('sanic');
  document.getElementsByClassName('footer')[0].appendChild(sanic);
  sanic.addEventListener('load', function () {
    sanic.classList.add('going');
  });
  sanic.addEventListener('transitionend', function () {
    sanic.parentNode.removeChild(sanic);
  });
}

document.getElementById('goFast').addEventListener('click', goFast);