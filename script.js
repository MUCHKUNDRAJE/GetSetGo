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