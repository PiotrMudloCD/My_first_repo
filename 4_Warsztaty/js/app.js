

var navigation = document.querySelector('.page-nav-list>li');
var subNavigation = document.querySelector('.page-nav-sublist');

navigation.addEventListener('mouseover', function () {
    subNavigation.style.display = 'block';

});

navigation.addEventListener('mouseout', function () {
    subNavigation.style.display = 'none';

});




var pack = document.querySelectorAll('.main-news-title');
var fotoOne = document.querySelector('.chair-clair');
var foto = document.querySelector('.chair-margarita');

function hideFoto() {

    var pack = this.querySelectorAll('.main-news-title');
    for (var item of pack) {
        item.style.display = 'none';
    }

}

function showFoto() {
    for (var item of pack) {
        item.style.display = 'block';
    }

}

fotoOne.addEventListener('mouseover', hideFoto);
fotoOne.addEventListener('mouseout', showFoto);
foto.addEventListener('mouseover', hideFoto);
foto.addEventListener('mouseout', showFoto);



var firstBtn =document.querySelector(".banner-prev");
var secondBtn =document.querySelector(".banner-next");
var images =document.querySelectorAll(".banner-slide");
var currentIndex = 0;


function changeNextPicture(event) {
    event.preventDefault();

    images[currentIndex].classList.remove("banner-slide-show");

    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    images[currentIndex].classList.add("banner-slide-show");
}
function changePrevPicture(event) {
    event.preventDefault();

    images[currentIndex].classList.remove("banner-slide-show");

    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }

    images[currentIndex].classList.add("banner-slide-show");
}

images[currentIndex].classList.add("banner-slide-show");
secondBtn.addEventListener("click", changeNextPicture);
firstBtn.addEventListener("click", changePrevPicture);

