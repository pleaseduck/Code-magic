
(function() {
  var setupBlock = document.querySelector('.setup');
  var wizardСharacteristics = {
    'name':  ['Иван ', 'Себастьян ', 'Мария ', 'Кирхгов ', 'Тампон ', 'Лолита ', 'Вашингтон ', 'Ирвинг '],
    'surname': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    'coat': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    'eyesColor':  ['black', 'red', 'blue', 'yellow', 'green']
  };

  var wizardsList = document.querySelector('.setup-similar-list');
  (function() {
    for (var i = 0; i < 4; i++) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template');
      similarWizardTemplate.content.querySelector('.setup-similar-label').innerHTML =  wizardСharacteristics.name[window.util.randomNumber(wizardСharacteristics.name)] +
      wizardСharacteristics.surname[window.util.randomNumber(wizardСharacteristics.surname)];
      similarWizardTemplate.content.querySelector('.wizard-coat').style.fill = wizardСharacteristics.coat[window.util.randomNumber(wizardСharacteristics.coat)];
      similarWizardTemplate.content.querySelector('.wizard-eyes').style.fill = wizardСharacteristics.eyesColor[window.util.randomNumber(wizardСharacteristics.eyesColor)];

      wizardsList.appendChild(similarWizardTemplate.content.cloneNode(true));
    }
  })();

    var wizardSetup = document.querySelector('.setup-player');
    var fireballColors = ['#ee4830',' #30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

    wizardSetup.addEventListener('click', function() {
      randomWizard();
    });
    function randomWizard() {
    var wizardFireball = document.querySelector('.setup-fireball');
    wizardSetup.querySelector('.wizard-coat').style.fill = wizardСharacteristics.coat[window.util.randomNumber(wizardСharacteristics.coat)];
    wizardSetup.querySelector('.wizard-eyes').style.fill = wizardСharacteristics.eyesColor[window.util.randomNumber(wizardСharacteristics.eyesColor)];
    wizardFireball.style.backgroundColor = fireballColors[window.util.randomNumber(fireballColors)];
  }

})();
