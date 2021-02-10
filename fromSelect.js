//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.from-select-picker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#from-select-ul').html(langArray);

//Set the button value to the first el of the array
$('.from-btn-select').html(langArray[0]);
$('.from-btn-select').attr('value', 'en');

//change button stuff on click
$('#from-select-ul li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.from-btn-select').html(item);
  $('.from-btn-select').attr('value', value);
  $(".from-select-ul-container").toggle();
  console.log("output from from select" + value);
});

$(".from-btn-select").click(function(){
        $(".from-select-ul-container").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.from-btn-select').html(langArray[langIndex]);
  $('.from-btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.from-btn-select').html(langArray[langIndex]);
  //$('.from-btn-select').attr('value', 'en');
}


