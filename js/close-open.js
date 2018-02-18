(function() {
  var setupOpener = document.querySelector('.setup-open');
  var setupCloser = document.querySelector('.setup-close');
  var setupBlock = document.querySelector('.setup');
  console.log(setupOpener.getBoundingClientRect());
  var openSetup = function(evt) {
      setupBlock.classList.remove('hidden');
      document.addEventListener('keydown',function(evt) {
        window.util.isEscEvent(evt, closeSetup);
      });
  };

  var closeSetup = function() {
      setupBlock.classList.add('hidden');
  };

  setupOpener.addEventListener('click', openSetup);

  setupCloser.addEventListener('click', closeSetup);

  setupOpener.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  setupCloser.addEventListener('keydown',function(evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });

})();
