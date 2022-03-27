












function addItemToShopList(productName, productImgSrc, price, category){
let itemShopProduct = document.createElement("div");
itemShopProduct.classList.add("itemShopProduct");

let mainContent = document.createElement("div");
mainContent.classList.add("mainContent");

let productTitle = document.createElement("h3");
productTitle.classList.add("productTitle");
productTitle.innerText = productName;

let productImage = document.createElement("img");
productImage.classList.add("prodcutImage");
productImage.src = `res/productImages/${productImgSrc}.png`;

let productPrice = document.createElement("p");
productPrice.innerText = `Price: $${price}`;

let cardButtonContainer = document.createElement("div");
cardButtonContainer.classList.add("cardButtonContainer");

let viewBtn = document.createElement("div");
viewBtn.classList.add("viewBtn");
viewBtn.classList.add("cardBtn");
viewBtn.innerHTML =`<i class="fa-solid fa-eye"></i>`;
 
let addCartBtn = document.createElement("div");
addCartBtn.classList.add("addCartBtn");
addCartBtn.classList.add("addItemToCartButton");
addCartBtn.classList.add("cardBtn");
addCartBtn.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i>`;
 
// let countSelectBtn = document.createElement("div");
// countSelectBtn.classList.add("countSelect");
// countSelectBtn.classList.add("cardBtn");
// countSelectBtn.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;

mainContent.appendChild(productTitle);
mainContent.appendChild(productImage);
mainContent.appendChild(productPrice)

cardButtonContainer.appendChild(viewBtn);
cardButtonContainer.appendChild(addCartBtn);
// cardButtonContainer.appendChild(countSelectBtn);

itemShopProduct.appendChild(mainContent);
itemShopProduct.appendChild(cardButtonContainer);

itemShopProduct.setAttribute("category", category)

let itemsContainer = document.querySelector(".itemsContainer");
itemsContainer.appendChild(itemShopProduct);



}





class item{
    constructor(productID, productTitle, productCatchyTitle, price, quantity, rating,category, imageSrc) {
        this.productID = productID;
        this.productTitle = productTitle;
        this.productCatchyTitle = productCatchyTitle;
        this.price = price;
        this.quantity = quantity;
        this.rating = rating;
        this.category =category;
        this.imageSrc = imageSrc;
    }

    addthisItemToBasket(quantity=1){
        this.quantity = quantity;
        currentUserBasket.push(this);

    }

    increaseCountOfThisItem(quantity=1){
        let indexOfthisItem = currentUserBasket.indexOf(this);
        currentUserBasket[indexOfthisItem].quantity+=quantity;
    }
}

let item1 = new item(1, "Fresh Oranges",  "Pulpy Oranges", 44.60, 1, 3.8, "fruits", "orange");
let item2 = new item(2, "Red Strawberry", "Melting Cheese", 49.66, 1, 3.9, "fruits", "strawberry");
let item3 = new item(3, "Juicy Carrots","Nutricious Roots", 35.98, 1, 4.5, "vegetables", "carrot1");
let item4 = new item(4, "Onions", "AllPurpose Bulbs", 48.60, 1, 3.7, "vegetables", "onion");
let item5 = new item(5, "Tomatoes", "Tangy tomato ", 40.34 , 1, 3.9, "vegetables", "tomato");
let item6 = new item(6, "Potatoes", "Old n Classic ", 22.5 , 1, 3.1, "vegetables", "potato");
let item7 = new item(7, "Sweet Potatotes", "Sweeeet!", 25.74 , 1, 2.7, "vegetables", "sweetPotato");
let item8 = new item(9, "Cucumber", "Salad?", 44.56 , 1, 3.6, "vegetables", "cucumber");
let item9 = new item(10, "Lady Fingers", "Go Green and Tasty", 33.59 , 1, 4.3, "vegetables", "ladyFinger");
let item10 = new item(11, "Capcicums", "Dwell on da Peppers", 33.78 , 1, 3.4, "vegetables", "capcicum");
let item11 = new item(12, "Coriander", "Garnish incoming", 44.33 , 1, 2.9, "vegetables", "coriander");
let item12 = new item(14, "Pumpkins", "Is it Halloween?", 25.50 , 1, 2.3, "vegetables", "pumpkin");
let item13 = new item(15, "Beans", "MrBeans", 33.44 , 1, 3.1, "vegetables", "beans");
let item14 = new item(15, "Broccoli", "Considering Healthy", 28.78 , 1, 2.4, "vegetables", "broccoli");
let item15 = new item(8, "Apple", "The OG", 49.66 , 1, 4.4, "fruits", "apple");
let item16 = new item(8, "Banana", "Tasty Protein", 30.51 , 1, 3.9, "fruits", "banana");
let item17 = new item(8, "Mango", "Imported", 46.77 , 1, 4.8, "fruits", "mango");
let item18 = new item(8, "Grapes", "Ripped Grapes", 37.45 , 1, 3.5 , "fruits", "grapes");
let item19 = new item(8, "Pineapple", "Pine looking Apple", 30.90 , 1, 2.3 , "fruits", "pineapple");
let item20 = new item(8, "Pomegranate", "Ripped Pomegranate", 28.99 , 1, 2.9 , "fruits", "pomegranate");
let item21 = new item(8, "Avocado", "The niche", 37.88 , 1, 3.6 , "fruits", "avocado");
let item22 = new item(8, "Coconut", "Eat/Drink", 22.45 , 1, 2.6 , "fruits", "coconut");
let item23 = new item(8, "Papaya", "Papa ayaya", 30.00 , 1, 4.4 , "fruits", "papaya");
let item24 = new item(8, "Milk powder", "White Powder", 41.90 , 1, 3.9 , "dairy", "milkPowder");
let item25 = new item(8, "Condensed Milk", "Condensed Milk", 39.00 , 1, 4.1 , "dairy", "condensedMilk");
let item26 = new item(8, "Whipped cream", "Creaaaamm", 49.00 , 1, 3.2 , "dairy", "whippedCream");
let item27 = new item(8, "Butter Milk", "The fav#2", 50.00 , 1, 4.8 , "dairy", "butterMilk");
let item28 = new item(8, "Curd", "Stomach's fav", 44.45 , 1, 3.2 , "dairy", "curd");
let item29 = new item(8, "Paneer", "Everyone's Fav", 30.77 , 1, 3.7 , "dairy", "paneer");
let item30 = new item(8, "Cow Milk ", "White Elixer", 50.00 , 1, 4.0 , "dairy", "cowMilk");
let item31 = new item(8, "Cheese ", "Formaggio", 38.74 , 1, 4.8 , "dairy", "cheese");
let item32 = new item(8, "Wheat Flour", "White Powder", 20.22  , 1, 4.7 , "others", "wheatFlour");
let item33 = new item(8, "Mustard Oil", "Must-Oil", 23.45  , 1, 4.3 , "others", "mustardOil");
let item34 = new item(8, "Cookies", "Noice!", 19.56  , 1, 3.3 , "others", "cookies");
let item35 = new item(8, "Chips", "With Less Air", 15.45  , 1, 3.7 , "others", "chips");
let item36 = new item(8, "Soft-Drink", "Pop-chssss", 35.55  , 1, 4.0 , "others", "softDrink");
let item37 = new item(8, "Ketchup", "Fruit Shake?", 22.83  , 1, 3.5 , "others", "ketchup");


let itemShopItems = [];

itemShopItems=[item1, item2, item3, item4, item5, item6, item7, item8, item9, 
    item10, item11, item12, item13, item14, item15,item16, item17, 
    item18, item19, item20, item21, item22, item23, item24, item25, item26,
     item27, item28, item29, item30, item31, item32, item33, item34, item35, 
     item36, item37];

function addingItemsToItemShopDOM() {

    itemShopItems.forEach(item=>{
        
        addItemToShopList(item.productTitle, item.imageSrc, item.price, item.category);
        
    })
}


addingItemsToItemShopDOM();


    let itemsContainer = document.querySelector(".itemsContainer");
    function animatingDOMfilling(){

        let itemsContainerChildren = Array.from(itemsContainer.children);
        itemsContainerChildren.forEach(item=>{
            gsap.fromTo(".itemShopProduct", 1 ,{opacity: 0, scale: 0.4}, {opacity: 1, scale: 1, stagger: 0.1 ,ease: "power2.inOut"})
        })
    }
    animatingDOMfilling();




    let itemDescriptionBox = document.querySelector(".itemDescriptionBox");
    let overlay = document.querySelector(".overlay");
    let itemDescriptionBoxCloseBtn = document.querySelector(".closeBoxBtn");
    itemsContainer.addEventListener("click",(e)=>{
            if(e.target.classList.contains("viewBtn")){
                openItemDescriptionBox(e.target.parentElement);
                // console.log(e.target.parentElement);
            }

    })

    itemDescriptionBoxCloseBtn.addEventListener("click",(e)=>{
        overlay.classList.remove("active");
        itemDescriptionBox.classList.remove("active");
       
    })

    
            
   
function openItemDescriptionBox(target){
    // let itemDescriptionContainer = document.querySelector(".overlay")

    let itemRequested = target.parentElement;

    let itemObject =itemShopItems.find((item)=>{
        let itemRequestedTitle = itemRequested.querySelector("h3").innerText;

            return itemRequestedTitle== item.productTitle
    })

    
    itemDescriptionBox.querySelector("h2").innerText = itemObject.productTitle;
    itemDescriptionBox.querySelector("h3").innerText = itemObject.productCatchyTitle;
    itemDescriptionBox.querySelector(".productPrice").innerText = `Price: $${itemObject.price}`;
    itemDescriptionBox.querySelector("h5").innerText = `Rating: ⭐${itemObject.rating}`;
    itemDescriptionBox.querySelector("img").src = `res/productImages/${itemObject.imageSrc}.png`;

    overlay.classList.add("active");
    itemDescriptionBox.classList.add("active");
}


let filterDivsContainer = document.querySelector(".filterDivsContainer");

filterDivsContainer.addEventListener("click", (e) =>{
    
    if(e.target.classList.contains("filterDiv")){
       
       let filter = e.target.getAttribute("filter");
       filterElements(filter);
      
    }

})


function filterElements(filter){

    let itemsContainer = document.querySelector(".itemsContainer");


    let children = Array.from(itemsContainer.children);

    children.forEach(child=>{
        let childCategory = child.getAttribute("category");
      
        switch (filter){

            case "veggies": 
                if(childCategory=="vegetables"){
                   
                    child.style.display="flex";

                    gsap.fromTo(child, 1 ,{opacity: 0, scale: 0.4}, {opacity: 1, scale: 1, stagger: 0.25 ,ease: "power2.inOut"});
                    document.querySelectorAll(".filterDiv").forEach(div=>{
                        div.style.boxShadow="none";
                    })
                    document.querySelector(".veggieFilterDiv").style.boxShadow = "inset 5px 5px 20px black";
                   
                    

                   
                    
                }
                else{
                    child.style.display="none"
                }

                break;
                
            case "fruits": 
                if(childCategory=="fruits"){
                    
                    child.style.display="flex";
                    gsap.fromTo(child, 1 ,{opacity: 0, scale: 0.4}, {opacity: 1, scale: 1, stagger: 0.25 ,ease: "power2.inOut"});
                    document.querySelectorAll(".filterDiv").forEach(div=>{
                        div.style.boxShadow="none";
                    })
                   
                    document.querySelector(".fruitFilterDiv").style.boxShadow = "inset 5px 5px  50px black";
                }
                else{
                    child.style.display="none"
                }
                break;

            case "dairy": 
                if(childCategory=="dairy"){
                  
                    child.style.display="flex";
                    gsap.fromTo(child, 1 ,{opacity: 0, scale: 0.4}, {opacity: 1, scale: 1, stagger: 0.25 ,ease: "power2.inOut"});
                    document.querySelectorAll(".filterDiv").forEach(div=>{
                        div.style.boxShadow="none";
                    })
              
                    document.querySelector(".dairyFilterDiv").style.boxShadow = "inset 5px 5px 20px black";
                }
                else{
                    child.style.display="none"
                }
                break;

            case "others": 
                if(childCategory=="others"){
                 
                    child.style.display="flex";
                    gsap.fromTo(child, 1 ,{opacity: 0, scale: 0.4}, {opacity: 1, scale: 1, stagger: 0.25 ,ease: "power2.inOut"});
                    document.querySelectorAll(".filterDiv").forEach(div=>{
                        div.style.boxShadow="none";
                    })
                 
                    document.querySelector(".othersFilterDiv").style.boxShadow = "inset 5px 5px  20px black";
                }
                else{
                    child.style.display="none"
                }
                break;

            default:
                child.style.display="flex";

            


        }
    })

}



//Addhing Items To Basket

let currentUserBasket =[];
let currentUserBasketCounter=0;

let basketCounterElement = document.querySelector(".basket-counter");


function setUpCurrentUserBasket(currentUserBasket) {
    if(localStorage.getItem("basket")===null){
        currentUserBasket=[];
    }
    else{
        console.log("basket is not empty");
        let localBasket = JSON.parse(localStorage.getItem("basket"));
        localBasket.forEach(product=>{
            currentUserBasket.push(product);
            currentUserBasketCounter++
        })
    }
}

setUpCurrentUserBasket(currentUserBasket);
console.log(currentUserBasket);
currentUserBasket.forEach(item=>{
    additemToBasketDOM(`res/${item.imageSrc}.png`, item.productTitle, item.price, item.quantity)
})  
basketCounterElement.innerText = currentUserBasketCounter



let addToCartButtons = document.querySelectorAll(".addItemToCartButton");
let addToCartDescriptionButtons = document.querySelectorAll(".addItemToCartDescriptionButton");



addToCartButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let parentElement = e.target.parentElement.parentElement;
        let itemClickedName = parentElement.querySelector("h3").innerText;
        addItemToBasket(itemClickedName);
        
    }

    )});

addToCartDescriptionButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let parentElement = e.target.parentElement.parentElement;

        console.log(parentElement.children[3].querySelector("input").value);
        let itemQuantityRequested = parentElement.children[3].querySelector("input").value;

        let itemClickedName = parentElement.querySelector("h2").innerText;
            addItemToBasket(itemClickedName, itemQuantityRequested);
            
        }
    
        )});




function addItemToBasket(itemClickedName,quantity=1){
//checking if item already exists in Basket




   let item = currentUserBasket.find((item, n)=>{
            return item.productTitle===itemClickedName;
  


})

if( item=== undefined ){        //if item doesnt exist in Basket look for the item in shoping list and adding it to the basket
    console.log("Adding Item to Basket");
    let itemRequested = itemShopItems.find(item=>{
        return item.productTitle===itemClickedName;
    }) 

    itemRequested.addthisItemToBasket(quantity);
    currentUserBasketCounter++;
    basketCounterElement.innerHTML = currentUserBasketCounter;

    updateLocalStorageBasket(currentUserBasket);
}
else{
    console.log("Inreasing Count"); //If item already found to be in the basket then just increase the count of the object
    item.increaseCountOfThisItem(quantity);

    updateLocalStorageBasket(currentUserBasket);
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
    decreaseButton.classList.add("changeQBtn");
    decreaseButton.innerText="-";
    let inputField = document.createElement("input");
    inputField.type = "number";
    inputField.value =productCount;
    inputField.maxLength = 2;
    inputField.min = 1;
    let increaseButton = document.createElement("button");
    increaseButton.classList.add("increaseBtn");
    increaseButton.classList.add("changeQBtn");
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
const floatingButton = document.querySelector(".floatingBtn")
const mainPage = document.querySelector("main");
const body = document.querySelector("body");

openBasketButton.addEventListener('click',()=>{
//clearing basketDOM before setting it up again
    while (basketItemList.hasChildNodes()) {
        basketItemList.removeChild(basketItemList.firstChild);
      }
//creating all the elements present in currentUserBasket in the Basket
    currentUserBasket.forEach(item=>{
        additemToBasketDOM(`res/productImages/${item.imageSrc}.png`, item.productTitle, item.price, item.quantity)
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

floatingButton.addEventListener('click',()=>{
//clearing basketDOM before setting it up again
    while (basketItemList.hasChildNodes()) {
        basketItemList.removeChild(basketItemList.firstChild);
      }
//creating all the elements present in currentUserBasket in the Basket
    currentUserBasket.forEach(item=>{
        additemToBasketDOM(`res/productImages/${item.imageSrc}.png`, item.productTitle, item.price, item.quantity)
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


    
basket.addEventListener("click", (e)=>{
    let increaseBtn;
    let decreaseBtn
    let deleteBtn;
    if(e.target.classList.contains("increaseBtn")){
        increaseBtn = e.target;
        changeItemQuantity(increaseBtn);
    }
    else if(e.target.classList.contains("decreaseBtn")){
        decreaseBtn = e.target;
        changeItemQuantity(decreaseBtn);
    }
    else if(e.target.classList.contains("deleteBtn")){
        deleteBtn = e.target;
        deleteItemFromBasket(deleteBtn);
        
    }
    
})



function changeItemQuantity(targetBtn){
let basketItemReferenced = targetBtn.parentElement.parentElement;
let itemTitle = basketItemReferenced.querySelector("h3").innerText;

let countField = targetBtn.parentElement.children[1];



//looking for the referencedDOMElement and then increasing its count in the currentUserBasket

let referencedObject = currentUserBasket.find((e)=>{
    return e.productTitle=== itemTitle;
})

let btnFunctionality = targetBtn.innerText;

if(btnFunctionality==="+" ){
   
    referencedObject.quantity++;
    countField.value = referencedObject.quantity;
    updateLocalStorageBasket(currentUserBasket);
    updateBasketPriceIndiactor();

}
else if (btnFunctionality==="-" && referencedObject.quantity>1){
   
    referencedObject.quantity--;
    countField.value = referencedObject.quantity;
    updateLocalStorageBasket(currentUserBasket);
    updateBasketPriceIndiactor();
}


}
function deleteItemFromBasket(deleteBtn){
    let basketItemReferenced = deleteBtn.parentElement;
let itemTitle = basketItemReferenced.querySelector("h3").innerText;

let referencedObject = currentUserBasket.find((e)=>{
    return e.productTitle=== itemTitle;
})

currentUserBasket.splice(currentUserBasket.indexOf(referencedObject), 1);
// console.log(basketItemReferenced);
basketItemReferenced.classList.add("removed");
setTimeout(()=>{
    basketItemReferenced.remove()
}, 700);

currentUserBasketCounter--;
basketCounterElement.innerText =  currentUserBasketCounter;

updateBasketPriceIndiactor();
updateLocalStorageBasket(currentUserBasket);
}
    
function updateLocalStorageBasket(currentUserBasket){
    let localBasket; 
    if(localStorage.getItem("basket")===null){
        localBasket=[...currentUserBasket];
        localStorage.setItem("basket",JSON.stringify(localBasket));
    }
    else{
        localStorage.removeItem("basket");
        localBasket=[...currentUserBasket];
        localStorage.setItem("basket",JSON.stringify(localBasket));

    }
}





//offerWindow animation////////////////////////////////////////////////////////////////

let offerWindowIndex = 1;
let offerNavBtns = document.querySelectorAll(".offerWindow .navBtn");
let offerWindow = document.querySelector(".offerWindow")
let rightBtn= document.querySelector(".right-btn");


offerNavBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target);
        changeOffer(e.target)
    })
})
console.log(rightBtn);
let changeOfferTimer = setInterval(function(){
    changeOffer(rightBtn);
}, 4000);


function changeOffer(targetBtn){

    if(targetBtn.classList.contains("right-btn")){
       
        offerWindowIndex = offerWindowIndex%4;
        offerWindowIndex++;
        gsap.fromTo(offerWindow,0.4, {opacity:1}, {opacity: 0});
        offerWindow.children[0].src = `res/offers/${offerWindowIndex}.jpg`;
        gsap.fromTo(offerWindow,0.4, {opacity:0}, {opacity: 1});
        console.log(offerWindowIndex);
        
    }
    else if(targetBtn.classList.contains("left-btn")){
        offerWindowIndex = offerWindowIndex%(-4);
        offerWindowIndex--;
        // offerWindowIndex = offerWindowIndex*=-1;
        gsap.fromTo(offerWindow,0.4, {opacity:1}, {opacity: 0});
        offerWindow.children[0].src = `res/offers/${offerWindowIndex}.jpg`;
        gsap.fromTo(offerWindow,0.4, {opacity:0}, {opacity: 1});
        console.log(offerWindowIndex);
    }
}