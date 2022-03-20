
let currentUserBasket = [];
















//Entry Animation For Every Section
function animateGroup1(){

    const controller = new ScrollMagic.Controller();

    const  sections = document.querySelectorAll("section");
    const footer  = document.querySelector("footer");
    const footerGrp1Elements = footer.querySelectorAll(".animGrp1");

    const header = document.querySelector("header");
    
    sections.forEach((section, index, sections)=>{
        const animGrp1Elems = section.querySelectorAll(".animGrp1");
        const animGrp2Elems = section.querySelectorAll(".animGrp2");
        const headerGrpElements = header.querySelectorAll(".animGrp1");


        // const headerTimeline= new ScrollMagic.Timeline({defaults: {duration: 0.8, ease: "power2.inOut"}});

        gsap.fromTo(headerGrpElements, 2, {opacity: "0"}, {opacity: "1"});
       

        const animGrp1Timeline = new gsap.timeline({defaults:{ duration:0.8 , ease: "back", y: -5}});
        animGrp1Timeline.fromTo(animGrp1Elems, {y:"50%", opacity: "0.2"}, {y: "0%", opacity: "1"});
        animGrp1Timeline.fromTo(animGrp2Elems, {y:"50%", opacity: "0.2"}, {y: "0%", opacity: "1"}, "-=1");
        animGrp1Scene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.6,
            reverse: false
        }).setTween(animGrp1Timeline).addTo(controller).addIndicators();
        
        // const animGrp2Timeline = new gsap.timeline({defaults:{ duration:0.8 , ease: "back"}})

        animGrp1FooterTimeline = new gsap.timeline({defaults:{ duration:0.8, ease: "back", y: -5}})
        animGrp1FooterTimeline.fromTo(footerGrp1Elements, {y:"50%", opacity: "0.2"}, {y: "0%", opacity: "1"});


        const lastSection = sections[4];
        const buttonContainer = lastSection.querySelector(".button-container")
        console.log(lastSection);
        footerScene = new ScrollMagic.Scene({
            triggerElement: buttonContainer,
            triggerHook: 0.5,
            reverse: false
        }).setTween(animGrp1FooterTimeline).addTo(controller).addIndicators({offset: 20});
     })

}


animateGroup1();


//Changing content of quickBuyCards on Click

let itemNumbers = [1,1];
class QuickBuyObjects{
    constructor(imageName, productTitle, catchyTitle, price, rating, freeShipping){
        this.imageName = imageName;
        this.productTitle = productTitle;
        this.catchyTitle = catchyTitle;
        this.price = price;
        this.rating = rating;
        this.freeShipping = freeShipping;
    }
}


let object1 = new QuickBuyObjects("orange","Fresh Oranges", "Pulpy Oranges", "$44.60", "4.2", "free shipping");
let object2 = new QuickBuyObjects("strawberry","Red Strawberry", "Melting Cheese", "$49.66", "3.8", "free shipping");
let object3 = new QuickBuyObjects("carrot1","Juicy Carrots","Nutricious Roots", "$35.98", "4.5", "free shipping");
let object4 = new QuickBuyObjects("onion","Onions", "AllPurpose Bulbs", "$48.60", "3.7", "free shipping");


let quickBuyObjectsArray = [object1, object2, object3, object4];


const quickBuyCards = document.querySelectorAll('.quickBuy-card');

//Selecting First Card
let card1 = quickBuyCards[0];
let card2 = quickBuyCards[1];



card1.addEventListener("click", changeCardItems);

function changeCardItems(card, ind){

    
    let cardimage = card.querySelector("img");
    let cardproductTitle = card.querySelector("h4");
    let cardprice = card.querySelector("h2");
    let cardfreeShipping = document.querySelector(".freeShipping");
    let cardcatchyTitle = card.querySelector(".catchy-title");
    let cardrating = document.querySelector(".rating");



    let index = itemNumbers[ind];
    itemNumbers[ind]++;
    itemNumbers[ind]= itemNumbers[ind]%[quickBuyObjectsArray.length];


    gsap.fromTo(card, 0.3, {opacity: "1"}, {opacity: "0"});
   
    cardimage.src=`res/${quickBuyObjectsArray[index].imageName}.png`;
    cardproductTitle.innerText = quickBuyObjectsArray[index].productTitle;
    cardprice.innerText = quickBuyObjectsArray[index].price;
    gsap.fromTo(card, 0.3, {opacity: "0"}, {opacity: "1"});
    cardfreeShipping.innerHTML= quickBuyObjectsArray[index].freeShipping;
    cardcatchyTitle.innerText = quickBuyObjectsArray[index].catchyTitle;
    cardrating.innerText = `⭐${quickBuyObjectsArray[index].rating}`;
  
  

}
// function changeCardItems(card){

//     index++;
//     index = index%[quickBuyObjectsArray.length];
//     card1image.src=`res/${quickBuyObjectsArray[index].imageName}.png`;
//     card1productTitle.innerText = quickBuyObjectsArray[index].productTitle;
//     card1price.innerText = quickBuyObjectsArray[index].price;
//     card1freeShipping.innerText = quickBuyObjectsArray[index].freeShipping;
// }



quickBuyCards.forEach((card, index)=>{

    console.log("index :"+ index);
   let cardFadeInterval = setInterval(changeCardItems, 5000,card, index);
   
    card.addEventListener("click", (e)=>{

        if(!e.target.classList.contains("quick-order")){
             changeCardItems(card, index);
        }
    });
});

//Functionality
class basketProduct{
    constructor(productImage, productTitle, productPrice, productQuantity){
        this.productImage = productImage;
        this.productTitle  = productTitle;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }


    addToBasketArray(){
        currentUserBasket.push(this);
    }
}



//quick order functionality
let basketCounter = 0;
const basketCounterElement = document.querySelector(".basket-counter");
const quickOrderButtons = document.querySelectorAll(".quick-order");

quickOrderButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let product = button.parentElement;
        addElementToBasket(product);
        // console.log(button.parentElement.querySelector("h4").innerText);
    
        
    
   




    })
})
function addElementToBasket(product){

    let productName = product.querySelector("h4").innerText;
    let productPrice = product.querySelector("h2").innerText;
    let productImage = product.querySelector("img").src;
    // console.log(productName, productPrice+"added"+productImag.src);
    basketCounter++;
    basketCounterElement.innerHTML = basketCounter;
    
    let newProduct  = new basketProduct(productImage,productName, productPrice, 1);
    newProduct.addToBasketArray();

    // currentUserBasket.forEach((product) => {
        
        
    // })  
    let latestElementToBasket=    currentUserBasket[currentUserBasket.length-1];
    additemToBasket(latestElementToBasket.productImage, latestElementToBasket.productTitle, latestElementToBasket.productPrice, latestElementToBasket.productCount);
// console.log(currentUserBasket[0].productTitle);
}



////////////////Basket System/////////////////////


//code for making a new Basket List Item//









function additemToBasket(productImagePath, productTitle, productPrice, productCount){
const basketItemList = document.querySelector(".itemList");
let basketItem  = document.createElement("div");
basketItem.classList.add("basket-item");
let itemImage = document.createElement("img");
itemImage.classList.add("itemImg");
itemImage.src = `${productImagePath}`;
let itemName = document.createElement("h3");
itemName.classList.add("itemName");
itemName.innerText = `${productTitle}`;
let priceElement = document.createElement("p");
priceElement.innerHTML = `Price:<span>${productPrice}</span>`;
let quantitySetter = document.createElement("div");
let decreaseButton = document.createElement("button");
decreaseButton.classList.add("decreaseBtn");
decreaseButton.innerText="-";
let inputField = document.createElement("input");
inputField.type = "number";
inputField.value =productCount;
inputField.maxLength = 2;
let increaseButton = document.createElement("button");
increaseButton.classList.add("increaseBtn");
increaseButton.innerText="+";

let deleteButton = document.createElement("button");
deleteButton.classList.add("deleteBtn");
deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

basketItem.appendChild(itemImage);
basketItem.appendChild(itemName);
basketItem.appendChild(priceElement);
quantitySetter.appendChild(decreaseButton);
quantitySetter.appendChild(inputField);
quantitySetter.appendChild(increaseButton);
basketItem.appendChild(quantitySetter);
basketItem.appendChild(deleteButton);
basketItemList.appendChild(basketItem);

}
// function additemToBasket(productImagePath, productTitle, productPrice, productCount){
// const basketItemList = document.querySelector(".itemList");
// let basketItem  = document.createElement("div");
// basketItem.classList.add("basket-item");
// let itemImage = document.createElement("img");
// itemImage.classList.add("itemImg");
// itemImage.src = "res/onions.png";
// let itemName = document.createElement("h3");
// itemName.classList.add("itemName");
// itemName.innerText = "Oninons";
// let priceElement = document.createElement("p");
// priceElement.innerHTML = "Price:<span>$00.00</span>";
// let quantitySetter = document.createElement("div");
// let decreaseButton = document.createElement("button");
// decreaseButton.classList.add("decreaseBtn");
// decreaseButton.innerText="-";
// let inputField = document.createElement("input");
// inputField.type = "number";
// inputField.value =1;
// inputField.maxLength = 2;
// let increaseButton = document.createElement("button");
// increaseButton.classList.add("increaseBtn");
// increaseButton.innerText="+";

// let deleteButton = document.createElement("button");
// deleteButton.classList.add("deleteBtn");
// deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

// basketItem.appendChild(itemImage);
// basketItem.appendChild(itemName);
// basketItem.appendChild(priceElement);
// quantitySetter.appendChild(decreaseButton);
// quantitySetter.appendChild(inputField);
// quantitySetter.appendChild(increaseButton);
// basketItem.appendChild(quantitySetter);
// basketItem.appendChild(deleteButton);
// basketItemList.appendChild(basketItem);

// }


// additemToBasket();










































// let quickBuyCardLayout = {
//     image: card1.querySelector("img"),
//     productTitle: card1.querySelector("h4"),
//     catchyTitle: card1.q
// }



// quickBuyCards.forEach(card=>{
//     card.addEventListener('click', changeItem);
// });

// function changeItem(e){
//     console.log(e.target);
// }

const basket = document.querySelector(".basket");
const closeBasketButton = document.querySelector(".cancel");
const openBasketButton = document.querySelector(".openBasket");
const mainPage = document.querySelector("main");
const overlay = document.querySelector(".overlay");

openBasketButton.addEventListener('click',()=>{
    updatePriceIndicator();
    basket.classList.add("active");
    console.log("basket open");
    mainPage.style.pointerEvents = "none";
    overlay.classList.add("active");
})




closeBasketButton.addEventListener("click", ()=>{
    basket.classList.remove("active");
    mainPage.style.pointerEvents = "all";
    overlay.classList.remove("active");
})








function updatePriceIndicator(){
let totalPriceBasket = calculateTotalPrice();

function calculateTotalPrice(){

    let totalPrice=0;
    currentUserBasket.forEach((product)=>{
       
        let price = product.productPrice;
        price = price.substring(1);
        price = parseFloat(price);
        totalPrice+= price;
})
return totalPrice;
    
}

const basketPriceIndicator = document.querySelector(".indicators span");

basketPriceIndicator.innerText= `$${totalPriceBasket.toFixed(2)}`;
// basketPriceIndicator.style.color= "red";
console.log("price:"+totalPriceBasket);

}




