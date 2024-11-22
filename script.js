const scrollWrapper = document.querySelector(".cardList");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

const cardItems = document.querySelectorAll(".cardItem");


let currentIndex = 0;


function scrollToCard(index) {
    if (index < 0) {
        currentIndex = 0;
    } else if (index >= cardItems.length){
        currentIndex = cardItems.length - 1;
    } else{
        currentIndex = index;
    }


    const card = cardItems[currentIndex];
    const gap = 50;
    const cardWidth = card.offsetWidth;
    const scrollAmount = (cardWidth + gap) * currentIndex;
    scrollWrapper.scrollTo({
        left: scrollAmount, 
        behavior: "smooth"
    });


    if (currentIndex === 0){
        leftArrow.disabled = true;
    }else{
        leftArrow.disabled = false;
    }

    if (currentIndex === cardItems.length - 1) {
        rightArrow.disabled = true; 
    } else {
        rightArrow.disabled = false; 
    }
    





}





leftArrow.addEventListener("click", () => {

    scrollToCard(currentIndex - 1);

});

rightArrow.addEventListener("click", () => {

    scrollToCard(currentIndex + 1);


});










const navBar = document.querySelector(".navBar");
const navX = document.querySelector(".navX");
const navMobile = document.querySelector(".navMobile");


navBar.addEventListener("click", () => {

    navMobile.classList.toggle("active");

});


navX.addEventListener("click", () => {

    navMobile.classList.toggle("active");
    
});












document.addEventListener("DOMContentLoaded", () => {
    const reviews = document.querySelectorAll('.personWrittenReview');

    reviews.forEach(review => {
        const readMoreButton = review.querySelector('.readMoreButton');

        readMoreButton.addEventListener('click', () => {
            review.classList.toggle('expanded');
            if (review.classList.contains('expanded')) {
                readMoreButton.textContent = 'Read Less...';
            } else {
                readMoreButton.textContent = 'Read More...';
            }
        });
    });
});
