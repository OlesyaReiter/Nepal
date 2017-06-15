var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
<<<<<<< HEAD
    //Merge comment1
=======
    //Increment slideIndex by 1 to show next image every 3 seconds
>>>>>>> 4cf581878ea9c885447943df758aa46506c4be84
    slideIndex++;
    //For looping
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
<<<<<<< HEAD
        //Merge comment2
=======
        //Removes class active from all the dots by replacing class name 'active' with empty string ''
>>>>>>> 4cf581878ea9c885447943df758aa46506c4be84
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}