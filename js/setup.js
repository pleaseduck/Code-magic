var setupBlock = document.querySelector('.setup');
var wizardСharacteristics = {
  'name':  ['Иван ', 'Себастьян ', 'Мария ', 'Кирхгов ', 'Тампон ', 'Лолита ', 'Вашингтон ', 'Ирвинг '],
  'surname': ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  'coat': ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  'eyesColor':  ['black', 'red', 'blue', 'yellow', 'green']
};
setupBlock.classList.remove('hidden');

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
/*
for (var i = 0; i < 4 ; i++) {
var wizardName = similarWizardTemplate.querySelector('.setup-similar-label').innerHTML;
wizardName = wizardСharacteristics.name[randomNumber(wizardСharacteristics.name)] +
wizardСharacteristics.surname[randomNumber(wizardСharacteristics.surname)];
var wizardElem = similarWizardTemplate.cloneNode(true);
wizardsList.appendChild(wizardElem);

console.log( wizardName)
}*/
  function randomNumber(array) {
  return Math.floor(Math.random()*array.length);
}
