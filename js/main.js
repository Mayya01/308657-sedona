'use strict';

  var hotelsLink = document.querySelector('.best-offer-hotels');
  var hotelsForm = document.querySelector('.hotels-form');
  var dateOfCheckIn  = hotelsForm.querySelector('input[name=time-of-checkin]');
  var dateOfCheckOut = hotelsForm.querySelector('input[name=time-of-checkout]');
  var button = hotelsForm.querySelector('button[name = results]');


   hotelsLink.addEventListener('click', function(evt){
       evt.preventDefault();
     if (hotelsForm.classList.contains('visible')){
      hotelsForm.classList.remove('visible');
     } else {
    hotelsForm.classList.add('visible');
     }
   });

    hotelsLink.addEventListener('keydown', function(evt){
       evt.preventDefault();
      if (hotelsForm.classList.contains('visible')){
        if (evt.keyCode === 27){
          hotelsForm.classList.remove('visible')
        }
      }
        else {
          if (evt.keyCode === 13){
              hotelsForm.classList.add('visible');
          }
        }
    });

    button.addEventListener('click', function(evt){
        evt.preventDefault();
        if(!dateOfCheckIn.value || !dateOfCheckOut.value){
          dateOfCheckIn.style.border = '1px solid red';
          dateOfCheckOut.style.border = '1px solid red';
          hotelsForm.classList.add('error');
        }

    });


