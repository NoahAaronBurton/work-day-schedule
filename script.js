
var timeBlock = $('div.time-block');
var hour = dayjs().hour();


$(function () {
    var saveButton= $('.saveBtn')
    saveButton.on('click', function(){
      var fieldText = $(this).prev().val(); // uses prev method to get HTML element's value, which is one element above the button in the HTML code
      //console.log(fieldText);
      var fieldId = $(this).prev().attr('id'); // create container to store the value of the prev element's id to use as a key for the key value pair 
      //console.log(fieldId);
      localStorage.setItem(fieldId, fieldText); // key value pair: field's id , user's text on the hour time-slot  
    });
  
     function currentHour (){
      
      
      timeBlock.each(function(){
        var blockHour = parseInt($(this).attr('id').split('-')[1]);  // look for a number for every time-block. Chat GPT helped me with this line
        
        if (blockHour < hour) {
          $(this).addClass('past');
        } else if (blockHour == hour) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
     }
     currentHour();
 function getSavedSchedule () {
  $('.description').each(function(){ // on each text-area field...
    var fieldId =$(this).attr('id')
    //console.log(fieldId);
    var savedValue = localStorage.getItem(fieldId);
    if (savedValue) { // ... if there is a saved value, load it into the text area
      $(this).val(savedValue);
    }
  });
  
 }
 getSavedSchedule();

  function currentDay(){
    var unix = dayjs().unix();
    var unixFormat = dayjs.unix(unix).format('MMM D, YYYY');
    $('#currentDay').text(unixFormat);
    }
    currentDay();

});
