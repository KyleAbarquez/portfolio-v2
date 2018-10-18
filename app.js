$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
    
})

// fade in nav text script
       $(document).ready(function(){
          $(window).scroll(function(){
              if($(window).scrollTop() > 0){
                  $("header").css({"background-color":"white"});
                  $("header").css({"top":"0px"});
              }
              else {
                  $("header").css({"background-color":"transparent"});
                  $("header").css({"top":"15px"});
              }
          });
       });

var megaModal = document.getElementById('megaModal');
var megaBtn = document.getElementById("megaBtn");
var megaSpan = document.getElementById("megaX");

megaBtn.onclick = function() {
    megaModal.classList.add('open');
    megaModal.style.animation = "modalIn 500ms forwards";
};

const megamodalClose = function() {
    megaModal.classList.remove('open');
    megaModal.removeEventListener('animationend', megamodalClose);
}

megaSpan.onclick = function() {
    megaModal.style.animation = "modalOut 500ms forwards";
    megaModal.addEventListener('animationend', megamodalClose);
};

var ikeaModal = document.getElementById('ikeaModal');
var ikeaBtn = document.getElementById("ikeaBtn");
var ikeaSpan = document.getElementById("ikeaX");

ikeaBtn.onclick = function() {
    ikeaModal.classList.add('open');
    ikeaModal.style.animation = "modalIn 500ms forwards";
};

const ikeamodalClose = function() {
    ikeaModal.classList.remove('open');
    ikeaModal.removeEventListener('animationend', ikeamodalClose);
}

ikeaSpan.onclick = function() {
    ikeaModal.style.animation = "modalOut 500ms forwards";
    ikeaModal.addEventListener('animationend', ikeamodalClose);
};


var megaItem = document.getElementById('megaItem');

megaBtn.onmouseover = function() {
    megaItem.classList.add("scaleUp");
}

megaBtn.onmouseout = function() {
    megaItem.classList.remove("scaleUp");
}

var ikeaItem = document.getElementById('ikeaItem');

ikeaBtn.onmouseover = function() {
    ikeaItem.classList.add("scaleUp");
}

ikeaBtn.onmouseout = function() {
    ikeaItem.classList.remove("scaleUp");
}

var designBtn = document.getElementById('designBtn');
var designItem = document.getElementById('designItem');

designBtn.onmouseover = function() {
    designItem.classList.add('scaleUp');
}

designBtn.onmouseout = function() {
    designItem.classList.remove('scaleUp');
}

var vmBtn = document.getElementById('vmBtn');
var vmItem = document.getElementById('vmItem');
var vmModal = document.getElementById('vmModal');
var vmSpan = document.getElementById('vmX');

vmBtn.onmouseover = function() {
    vmItem.classList.add('scaleUp');
}

vmBtn.onmouseout = function() {
    vmItem.classList.remove('scaleUp');
}

vmBtn.onclick = function() {
    vmModal.classList.add('open');
    vmModal.style.animation = "modalIn 500ms forwards";
};

const vmmodalClose = function() {
    vmModal.classList.remove('open');
    vmModal.removeEventListener('animationend', vmmodalClose);
}

vmSpan.onclick = function() {
    vmModal.style.animation = "modalOut 500ms forwards";
    vmModal.addEventListener('animationend', vmmodalClose);
};