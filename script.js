var hotel =document.querySelector(".table1");
var filght =document.querySelector(".table2");
var car =document.querySelector(".table3");
var ship =document.querySelector(".table4");

hotel.addEventListener('click',function(){
    hotel.style.color = "#F3EBEE",
    hotel.style.backgroundColor="#551A8B"
    filght.style.color = "#551A8B",
    filght.style.backgroundColor="#F3EBEE"
    car.style.color = "#551A8B",
    car.style.backgroundColor="#F3EBEE",
    ship.style.color = "#551A8B",
    ship.style.backgroundColor="#F3EBEE"

})
filght.addEventListener('click',function(){
    filght.style.color = "#F3EBEE",
    filght.style.backgroundColor="#551A8B",
    hotel.style.color = "#551A8B",
    hotel.style.backgroundColor="#F3EBEE"
    car.style.color = "#551A8B",
    car.style.backgroundColor="#F3EBEE",
    ship.style.color = "#551A8B",
    ship.style.backgroundColor="#F3EBEE"

})
car.addEventListener('click',function(){
    car.style.color = "#F3EBEE",
    car.style.backgroundColor="#551A8B"
    ship.style.color = "#551A8B",
    ship.style.backgroundColor="#F3EBEE"
    filght.style.color = "#551A8B",
    filght.style.backgroundColor="#F3EBEE"
    hotel.style.color = "#551A8B",
    hotel.style.backgroundColor="#F3EBEE"

})
ship.addEventListener('click',function(){
    ship.style.color = "#F3EBEE",
    ship.style.backgroundColor="#551A8B"
    filght.style.color = "#551A8B",
    filght.style.backgroundColor="#F3EBEE"
    hotel.style.color = "#551A8B",
    hotel.style.backgroundColor="#F3EBEE"
        car.style.color = "#551A8B",
    car.style.backgroundColor="#F3EBEE"

})
var page3 = document.querySelector("#page3")
var page1 = document.querySelector("#page1")
function scrollToSection(page3) {
    const targetElement = document.getElementById(page3);
    const startPosition = window.scrollY;
    const targetPosition = targetElement.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 500;  // Adjust the duration as needed (in milliseconds)
    let startTime;

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(0, startPosition + distance * percentage);

        if (progress < duration) {
            window.requestAnimationFrame(animateScroll);
        }
    }

    window.requestAnimationFrame(animateScroll);
}

