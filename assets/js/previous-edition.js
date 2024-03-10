﻿function openModal() {    document.getElementById('myModal').style.display = "block";}function closeModal() {    document.getElementById('myModal').style.display = "none";}function plusSlides(n) {    showSlides(slideIndex += n);}function currentSlide(n) {    showSlides(slideIndex = n);}var slideIndex = 1;$.getJSON("assets/json/images.json", function (data) {    var gallery = document.getElementById("imageGallery");    var exibit = document.getElementById("imageExibition");    $.each(data, function (key,val) {        $('<div class="col-md-3 col-sm-3 col-xs-6"><img class="images" src="' + val + '" onclick="openModal();currentSlide(' + (key + 1) + ')" class="hover-shadow"/></div>').appendTo(gallery);        $('<div class="mySlides"><img src="' + val + '" style="width:80%"></div>').appendTo(exibit);    });    showSlides(slideIndex);});function showSlides(n) {    var i;    var slides = document.getElementsByClassName("mySlides");    if (n > slides.length) {slideIndex = 1}    if (n < 1) {slideIndex = slides.length}    for (i = 0; i < slides.length; i++) {        slides[i].style.display = "none";    }    slides[slideIndex-1].style.display = "block";}$(document).on("keyup", function (e) {    if (e.which === 37) {        plusSlides(-1)    } else if (e.which === 39) {        plusSlides(1)    }});