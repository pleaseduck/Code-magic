var setupBlock = document.querySelector('.setup');
var wizardСharacteristics = {
  'name':  ['Иван ', 'Себастьян ', 'Мария ', 'Кирхгов ', 'Тампон ', 'Лолита ', 'Вашингтон ', 'Ирвинг '],
  'surname': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'coat': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'eyesColor':  ['black', 'red', 'blue', 'yellow', 'green']
};

var wizardsList = document.querySelector('.setup-similar-list');

for (var i = 0; i < 4; i++) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  similarWizardTemplate.content.querySelector('.setup-similar-label').innerHTML =  wizardСharacteristics.name[randomNumber(wizardСharacteristics.name)] +
  wizardСharacteristics.surname[randomNumber(wizardСharacteristics.surname)];
  similarWizardTemplate.content.querySelector('.wizard-coat').style.fill = wizardСharacteristics.coat[randomNumber(wizardСharacteristics.coat)];
  similarWizardTemplate.content.querySelector('.wizard-eyes').style.fill = wizardСharacteristics.eyesColor[randomNumber(wizardСharacteristics.eyesColor)];

  wizardsList.appendChild(similarWizardTemplate.content.cloneNode(true));
  console.log(similarWizardTemplate.content.querySelector('.setup-similar-label'))
}
var setupOpener = document.querySelector('.setup-open');
var setupCloser = document.querySelector('.setup-close');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var openSetup = function () {
    setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeSetup();
      }
    });
};
var closeSetup = function () {
    setupBlock.classList.add('hidden');
};

setupOpener.addEventListener('click', openSetup);

setupCloser.addEventListener('click', closeSetup);

setupOpener.addEventListener('keydown',function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
});

setupCloser.addEventListener('keydown',function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetup();
  }
});
  var wizardSetup = document.querySelector('.setup-player');
  var fireballColors = ['#ee4830',' #30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

  wizardSetup.addEventListener('click', function() {
    randomWizard();
  });
  console.log(randomWizard)
  function randomWizard() {
  var wizardFireball = document.querySelector('.setup-fireball');
  wizardSetup.querySelector('.wizard-coat').style.fill = wizardСharacteristics.coat[randomNumber(wizardСharacteristics.coat)];
  wizardSetup.querySelector('.wizard-eyes').style.fill = wizardСharacteristics.eyesColor[randomNumber(wizardСharacteristics.eyesColor)];
  wizardFireball.style.backgroundColor = fireballColors[randomNumber(fireballColors)];
}
  function randomNumber(array) {
  return Math.floor(Math.random()*array.length);
}
