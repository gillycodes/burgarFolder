const navbar = document.getElementById("third-nav");
const cartCon = document.getElementById("cart-cons");
const messageContainer = document.getElementById('message');
const cartImage = document.getElementById('cart-image');
const cartCountContainer = document.getElementById('cart-count-container');
const cartCount = document.getElementById('cart-count');

const svgBtn = document.getElementById('svg-btn');
const lining = document.querySelectorAll('.lining');



let sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

cartCon.addEventListener('mouseover', () => {
    cartImage.style.backgroundColor = "#2d394b5a";
    cartCountContainer.style.backgroundColor = "#2d394b5a";
    cartCount.style.color = "blue";

    messageContainer.innerHTML = "<p>No product in cart</p>";
    messageContainer.classList.remove('hide');


    /*generateMessage();*/
})

cartCon.addEventListener('mouseout', () => {
    cartImage.style.backgroundColor = '';
    cartCountContainer.style.backgroundColor = '';
    cartCount.style.color = '';

    messageContainer.classList.add('hide');
    /*generateMessage();*/
})



const generateMessage = () => {
    let message = document.createElement('p');
    message.innerText = 'Nothing in cart';
    messageContainer.appendChild(message);
}

window.onscroll = function(){myFunction()};
