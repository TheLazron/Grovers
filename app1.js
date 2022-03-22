//Scroll Animations
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
        }).setTween(animGrp1Timeline).addTo(controller);
        
        // const animGrp2Timeline = new gsap.timeline({defaults:{ duration:0.8 , ease: "back"}})

        animGrp1FooterTimeline = new gsap.timeline({defaults:{ duration:0.8, ease: "back", y: -5}})
        animGrp1FooterTimeline.fromTo(footerGrp1Elements, {y:"50%", opacity: "0.2"}, {y: "0%", opacity: "1"});


        const lastSection = sections[4];
        const buttonContainer = lastSection.querySelector(".button-container")
        
        footerScene = new ScrollMagic.Scene({
            triggerElement: buttonContainer,
            triggerHook: 0.5,
            reverse: false
        }).setTween(animGrp1FooterTimeline).addTo(controller);
     })

}


animateGroup1();


//userBasketSystem



let itemsInShop=[];
class item{
    constructor(productID, productTitle, productCatchyTitle, price, quantity, rating, imageSrc) {
        this.productID = productID;
        this.productTitle = productTitle;
        this.productCatchyTitle = productCatchyTitle;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.imageSrc = imageSrc;
    }

    addthisItemToBasket(){
        currentUserBasket.push(this);
    }

    increaseCountOfThisItem(){
        let indexOfthisItem = currentUserBasket.indexOf(this);
        currentUserBasket[indexOfthisItem].quantity++;
    }
}

//Items Available In Shop
let item1 = new item(1, "Fresh Oranges",  "Pulpy Oranges", 44.60, 1, 3.8, "orange");
let item2 = new item(2, "Red Strawberry", "Melting Cheese", 49.66, 1, 3.9, "strawberry");
let item3 = new item(3, "Juicy Carrots","Nutricious Roots", 35.98, 1, 4.5, "carrot1");
let item4 = new item(4, "Onions", "AllPurpose Bulbs", 48.60, 1, 3.7, "onion");



//Filling Array with default items created
itemsInShop = [item1, item2, item3, item4]; 

//Applying And Changing Content On Quick Buy Cards

const quickBuyCards = document.querySelectorAll('.quickBuy-card');



// //Changing On Clicking
// quickBuyCards.forEach((card, ind)=>{
//     card.addEventListener('click', ()=>{
//          changeCardItems(card, ind);
        
//     });
    
// })

// //Changing After Every 5seconds

// quickBuyCards.forEach((card, index)=>{

//    let cardFadeInterval = setInterval(changeCardItems, 5000,card, index);
// });

quickBuyCards.forEach((card, index)=>{

//changing after every 5seconds
   let cardFadeInterval = setInterval(changeCardItems, 5000,card, index);
   

    card.addEventListener("click", (e)=>{
        //clicking on card to change item
        if(!e.target.classList.contains("quick-order")){
             changeCardItems(card, index);
             
             
            //  let cardFadeInterval = setInterval(changeCardItems, 5000,card, index);
        }
    });
});



// let index=1;//Declaring different index trackers to overcome issue
let itemNumberInEachCard =[1,1];
function changeCardItems(card, ind){

    
    let cardimage = card.querySelector("img");
    let cardproductTitle = card.querySelector("h4");
    let cardprice = card.querySelector("h2");
    let cardfreeShipping = document.querySelector(".freeShipping");
    let cardcatchyTitle = card.querySelector(".catchy-title");
    let cardrating = document.querySelector(".rating");
    


    let index = itemNumberInEachCard[ind];
    itemNumberInEachCard[ind]++;
    itemNumberInEachCard[ind]= itemNumberInEachCard[ind]%[itemsInShop.length];
   
    // index++;
    // index = index%[itemsInShop.length];1
    
    gsap.fromTo(card, 0.3, {opacity: "1"}, {opacity: "0"});
    
    cardimage.src=`res/${itemsInShop[index].imageSrc}.png`;
    cardproductTitle.innerText = itemsInShop[index].productTitle;
    cardprice.innerText = `$${itemsInShop[index].price}`;
    gsap.fromTo(card, 0.3, {opacity: "0"}, {opacity: "1"});
    
    cardfreeShipping.innerHTML= "free shipping";
    
    cardcatchyTitle.innerText = itemsInShop[index].productCatchyTitle;
    cardrating.innerText = `⭐${itemsInShop[index].rating}`;
    card.id = itemsInShop[index].productID;

}

let currentUserBasket = [];

let currentUserBasketCounter=0;


let quickOrderButtons = document.querySelectorAll(".quick-order");



//click listener to quickOrder Buttons that trigger addItemToBasket function that further adds or increases items based on a criteria
quickOrderButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let parentElement = e.target.parentElement;

        addItemToBasket(parentElement);
        console.log("ID of this button: "+ parentElement.getAttribute("id"));
    }

    )});



let basketCounterElement = document.querySelector(".basket-counter");
function addItemToBasket(itemClicked){
//checking if item already exists in Basket

   let itemClickedName = itemClicked.querySelector("h4").innerText;


   let item = currentUserBasket.find((item, n)=>{
            return item.productTitle===itemClickedName;
  


})

if( item=== undefined ){        //if item doesnt exist in Basket look for the item in shoping list and adding it to the basket
    console.log("Adding Item to Basket");
    let itemRequested = itemsInShop.find(item=>{
        return item.productTitle===itemClickedName;
    }) 

    itemRequested.addthisItemToBasket();
    currentUserBasketCounter++;
    basketCounterElement.innerHTML = currentUserBasketCounter;
}
else{
    console.log("Inreasing Count"); //If item already found to be in the basket then just increase the count of the object
    item.increaseCountOfThisItem();
}
}




//Designing basket items as they are implemented using DOM

function additemToBasketDOM(productImagePath, productTitle, productPrice, productCount){
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
    priceElement.innerHTML = `Price:$${productPrice}`;
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

    console.log("imagepath:"+productImagePath);
}    


//opening and closing the basket item


//basket is formed every time its opened

const basket = document.querySelector(".basket");
const basketItemList = document.querySelector(".itemList");
const closeBasketButton = document.querySelector(".cancel");
const openBasketButton = document.querySelector(".openBasket");
const mainPage = document.querySelector("main");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

openBasketButton.addEventListener('click',()=>{
//clearing basketDOM before setting it up again
    while (basketItemList.hasChildNodes()) {
        basketItemList.removeChild(basketItemList.firstChild);
      }
//creating all the elements present in currentUserBasket in the Basket
    currentUserBasket.forEach(item=>{
        additemToBasketDOM(`res/${item.imageSrc}.png`, item.productTitle, item.price, item.quantity)
    })
    //updatingPriceCalculator
    updateBasketPriceIndiactor();
//opening basket
    basket.classList.add("active");
    console.log("basket open");
    mainPage.style.pointerEvents = "none";
    overlay.classList.add("active");
    body.style.overflowY = "hidden";    
    
   


//losing basket

closeBasketButton.addEventListener("click", ()=>{
    basket.classList.remove("active");
    mainPage.style.pointerEvents = "all";
    overlay.classList.remove("active");
    body.style.overflowY = "scroll";
})



})

function updateBasketPriceIndiactor(){

function calculateTotalPriceOfBasketElements(){
    let totalPriceCalculated=0;


    currentUserBasket.forEach(basketItem=>{
        let currentBasketItemTotalPrice = basketItem.price*basketItem.quantity
        totalPriceCalculated = totalPriceCalculated +currentBasketItemTotalPrice;
    })
    console.log("totalPrice"+totalPriceCalculated);
    return totalPriceCalculated;
}

let totalPriceCalculated = calculateTotalPriceOfBasketElements();

const basketPriceIndicator = document.querySelector(".indicators span");
basketPriceIndicator.innerText= `$${totalPriceCalculated.toFixed(2)}`;



}




