

  $(document).ready(function () {
    $('#signupbtn').click(function () {
      $('#loginModal').modal('toggle');
    });
  });

  
    $(document).ready(function () {
      

     



      $('#signupbtn').click(function () {
        $('#loginModal').modal('toggle');
      });
    });


var preloader = document.getElementById('loader');

function stopLoading(){
preloader.style.display='none';
}

$(document).ready(function () {
  $('#myInput').focus(function(){
    $("#demo").carousel('pause');
});

$('#myInput').blur(function(){

$("#demo").carousel('cycle');
});
  // var scroll_start = 0;
  // var start_Change = $("#demo");
  // var offset = start_Change.offset();
  // if (start_Change.length) {
  //   $(document).scroll(function () {
  //     scroll_start = $(this).scrollTop();
  //     if (scroll_start > offset.top) {
  //       $(".navbar").css("background-color", "#292b2c");
  //       // $(".nav-link").addClass("textWhite");
  //       // $(".navbar-brand").addClass("textWhite");
  //     }
  //     else {
  //       $(".navbar").css('background', 'transparent');
  //       // $(".nav-link").removeClass("textWhite");
  //       // $(".navbar-brand").removeClass("textWhite");
  //     }
  //   });
  // }
});


function autocomplete(inp, arr) {
  var currentFocus;
  if(inp!=null){
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");

    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  }

  );


  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;

      addActive(x);
    } else if (e.keyCode == 38) {

      currentFocus--;

      addActive(x);
    } else if (e.keyCode == 13) {

     
      if (currentFocus > -1) {

        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {

    if (!x) return false;

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

}
}
var services = ["Plumbers", "Electricians", "Salon at Home", "Home Shifting", "Masage At Home", "Carpenters", "Housekeeping","Photographers",""];
autocomplete(document.getElementById("mysearch"), services);

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});





