
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

   
$(document).ready(function() {
    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).siblings('.panel-heading').addClass('active');
    });
  
    $('.panel-collapse').on('hide.bs.collapse', function () {
      $(this).siblings('.panel-heading').removeClass('active');
    });
  });
  

//   $(document).ready(function () {
//     $('input[type=button]').click(function () {
//          $('#target').toggleClass('active-bg');
//     });
// });

$(".value-div .btn").click(function () {
  $(this).closest('.tab-header-content').toggleClass('tab-header-activated');
  $(this).toggleClass('active-btn');
  $(this).find('i.material-icons').text('keyboard_arrow_down');
  if ($(this).hasClass('active-btn'))
    $(this).find('i.material-icons').text('keyboard_arrow_up');
});

$(".panel-heading").each(function(elem) {
  if ($(this).hasClass('active')) {
    $(this).find("i.material-icons").text('keyboard_arrow_up');
  }
})


$(".panel-heading .panel-title a").click(function (e) {
  e.preventDefault();
  $('.panel-heading').find('i.material-icons').text('keyboard_arrow_down');
  if (!$(this).closest('.panel-heading').hasClass('active')) {
    $(this).find('i.material-icons').text('keyboard_arrow_up');
  }
});
$('.collapse').on('show.bs.collapse', function (e) {
  $(this).siblings().find('button.asset-btn').html('Less Fund<i class="large material-icons">keyboard_arrow_up</i>');
}).on('hidden.bs.collapse', function (e) {
  $(this).siblings().find('button.asset-btn').html('View Fund<i class="large material-icons">keyboard_arrow_down</i>');
});





/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});


// XIRR Absolute Tab 

$(document).ready(function(){

  $('ul.tabs-v li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs-v li').removeClass('current');
    $('.tab-content-v').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

  })




 




