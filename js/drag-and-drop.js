
// Перетаскивание окна настройки персонажа
(function() {
  var dialogHandle = document.querySelector('.setup-user-pic');
  var setupWindow = document.querySelector('.setup');

  dialogHandle.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: moveEvt.clientX - startCoords.x,
        y: moveEvt.clientY - startCoords.y
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop + shift.y) + 'px';
      setupWindow.style.left = (setupWindow.offsetLeft + shift.x) + 'px';
    };

    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp)
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
// Перетаскивание предметов из магазина в инвентарь
(function() {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');

  shopElement.addEventListener('dragstart', function(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      artifactsElement.style.border = '2px solid red';
    }
  });



  artifactsElement.addEventListener('dragover', function(evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function(evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    artifactsElement.style.border = '';
    evt.preventDefault;
  });

  artifactsElement.addEventListener('dragenter', function(evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault;
  });

  artifactsElement.addEventListener('dragleave', function(evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault;
  });
})();



















































  /*var dialogHandler = document.querySelector('.setup-user-pic');
  var dialogWindow = document.querySelector('.setup');
  console.log(dialogHandler.getBoundingClientRect());
   var onMouseDown = function(evt) {
     var getCoords = function(elem) {
       var box = elem.getBoundingClientRect();
       return {
         top: box.top + pageYOffset,
         left: box.left + pageXOffset
       };
     };
    var coords = getCoords(dialogHandler);
    var shiftX = evt.pageX - coords.left;
    var shiftY = evt.pageY - coords.top;
    dialogWindow.style.position = 'absolute';
    document.body.appendChild(dialogWindow);

    var moveAt = function(evt, elem) {
      elem.style.left = evt.pageX - shiftX + 'px';
      elem.style.top = evt.pageY - shiftY + 'px';
    };

    var onMouseMove = function(evt) {
      moveAt(evt, dialogWindow);
    };

     dialogWindow.style.zIndex = 1000;

  document.addEventListener('mousemove', onMouseMove);

  dialogHandler.addEventListener('mouseup', function() {
    dialogHandler.removeEventListener('mousedown', onMouseDown);
  });
};

  dialogHandler.addEventListener('mousedown', onMouseDown);

  /*dialogHandler.addEventListener('dragstart', function() {
    return false;
  });*/
