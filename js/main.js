'use strict';
(function(){
  var hotelsLink = document.querySelector('.best-offer-hotels');
  var hotelsForm = document.querySelector('.hotels-form');
  var dateOfCheckIn  = hotelsForm.querySelector('input[name=time-of-checkin]');
  var dateOfCheckOut = hotelsForm.querySelector('input[name=time-of-checkout]');
  var button = hotelsForm.querySelector('button[name = results]');
  var numberOfAdults = hotelsForm.querySelector('.adults');
  var numberOfChildren = hotelsForm.querySelector('.children');
  var storage = localStorage.getItem('adults');

   hotelsLink.addEventListener('click', function(evt){
       evt.preventDefault();
    hotelsForm.classList.add('visible');
    if (storage){
      numberOfAdults.value = storage;
      numberOfChildren.value = storage;
    }

   });
    hotelsLink.addEventListener('keydown', function(evt){
       evt.preventDefault();
        if(evt.keyCode === 13){
            hotelsForm.classList.add('visible');
        }
    })

    button.addEventListener('click', function(evt){
        evt.preventDefault();
        if(!dateOfCheckIn.value || !dateOfCheckOut.value){
          dateOfCheckIn.style.border = '1px solid red';
          dateOfCheckOut.style.border = '1px solid red';
        } else {
          localStorage.setItem('adults', numberOfAdults.value);
          localStorage.setItem('children', numberOfChildren.value);
        }

    })



})();
