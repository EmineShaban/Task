let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function onClick(n){
    let p1 = document.getElementById('class1')
    let p2 = document.getElementById('class2')
    let p3 = document.getElementById('class3')

    if(n == 2){
        p1.style.display = 'none'
        p1.className = p3.className.replace(" click", "");

        p3.style.display = 'none'
        p3.className = p3.className.replace(" click", "");

        p2.style.display = 'inline'
        p2.className += ' click'

    }else if(n == 3){
        p1.style.display = 'none'
        p1.className = p3.className.replace(" click", "");

        p2.style.display = 'none'
        p2.className = p3.className.replace(" click", "");

        p3.style.display = 'inline'
        p3.className += ' click'
 
    }else if(n == 1){
        p3.style.display = 'none'
        p3.className = p3.className.replace(" click", "");

        p2.style.display = 'none'
        p2.className = p3.className.replace(" click", "");

        p1.style.display = 'inline'
        p1.className += ' click'

    }
}

function onShow(){
    let form = document.getElementById('form')
    let div = document.getElementById('orderForm')

    if(form.style.display == '' || form.style.display == 'none'){
        form.style.display = 'inline'
        div.className += ' addSize'
    }else{
        form.style.display = 'none'
        div.className = div.className.replace(" addSize", "");
    }
}