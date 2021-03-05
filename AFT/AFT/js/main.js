/*document.querySelector('#go-inventory').addEventListener('click', eBay)

function eBay(){
    alert('Please click on the "eBay" button on the bottom right to view that truck\'\s eBay listing')
}*/

function toHamburger() {
    let x = document.getElementById("myNavBar");
    if (x.className === "nav-bar") {
    x.className += " responsive";
    } else {
    x.className = "nav-bar";
    }
}

