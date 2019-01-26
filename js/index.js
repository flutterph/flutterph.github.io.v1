document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    particleRadius: 0,
    lineColor: '#4abaf7'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);