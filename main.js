/* first task */
let sortArray = [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"},{color:"Green", count:"1014"},{color:"Red", count:"1014"},{color:"Multi", count:"1014"},
{color:"Blue", count:"1014"},{color:"Pink", count:"1014"},{color:"Beige", count:"1014"},{color:"Purple", count:"1014"}];

let productType =  [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"}];

let sleeveLength = [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"}];

let arrayDropdown = document.getElementsByClassName("dropdown__list");
InsertFilters();
function InsertFilters(){
    for(let i=0; i<3; i++){
        if(i===0){
            sortArray.forEach(function(element){
                let filterElement = document.createElement("li"); 
                filterElement.innerHTML=(`${element.color} (${element.count})`);                  
                filterElement.classList.add("dropdown__list__item");   
                arrayDropdown[i].appendChild(filterElement);
            });
        }
        if(i===1){
            sortArray.forEach(function(element){
                let filterElement = document.createElement("li"); 
                filterElement.innerHTML=(`${element.color} (${element.count})`);                  
                filterElement.classList.add("dropdown__list__item");   
                arrayDropdown[i].appendChild(filterElement);
            });
        }
        if(i===2){
            sortArray.forEach(function(element){
                let filterElement = document.createElement("li"); 
                filterElement.innerHTML=(`${element.color} (${element.count})`);                  
                filterElement.classList.add("dropdown__list__item");   
                arrayDropdown[i].appendChild(filterElement);
            });
        }
    };
}

/* second task*/
 let divOffers = document.querySelector(".main__offers");
 let srcImg = "./assets/images/offer.jpg";
 let srcHeartShape="./assets/images/heart-shape.png";
 let srcHeartFull ="./assets/images/heart-full.png";
 let mainItems = [
     {description:" Wrangler small logo crew neck t-shirt in white", price:"£16.63"},
     {description:"Wrangler logo chest stripe rugby polo in blue/white", price:"£50.63"},
     {description:"Wrangler kobel retro large logo ringer t-shirt in white", price:"£20.97" },
     {description: "Lyle & Scott polo in burgundy", price: "£44.12"}, 
     {description: "Unisex long sleeve t-shirt with graphic print in neon green", price: "£12.29"},
     {description: "ASOS DESIGN Disney oversized t-shirt with rainbow", price: "£22.42"},
     {description: "COLLUSION Unisex oversized t-shirt with back print", price: "£10.12"},
     {description: "ASOS DESIGN Mickey relaxed t-shirt with retro print", price: "£18.08"}
 ];

InsertItems();
 function InsertItems(){
     for(let i=0; i<mainItems.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("offers__item");
        divOffers.appendChild(newDiv);
        let imgItem= document.createElement("img");
        imgItem.src=srcImg;
        imgItem.classList.add("item__img");
        newDiv.appendChild(imgItem);
        let imgHeartShape= document.createElement("img");
        imgHeartShape.src=srcHeartShape;
        imgHeartShape.classList.add("item__heart-shape");
        newDiv.appendChild(imgHeartShape);
        let imgHeartFull = document.createElement("img");
        imgHeartFull.src = srcHeartFull;
        imgHeartFull.classList.add("item__heart-full");
        newDiv.appendChild(imgHeartFull);
        let para = document.createElement("p");
        para.classList.add("item__img-description");
        para.innerText = "TALL";
        newDiv.appendChild(para);
        let description = document.createElement("p");
        description.classList.add("item__paragraph");
        description.innerHTML = mainItems[i].description;
        newDiv.appendChild(description);
        let price = document.createElement("span");
        price.classList.add("item__price");
        price.innerText = mainItems[i].price;
     };
 }

/* third */
/* changing hover on filters */
let filterImg= document.querySelectorAll(".search-filter__img");
ChangeHoverOnFilters(filterImg);
function ChangeHoverOnFilters(){
    let filterArray = document.getElementsByClassName("container__search-filter");
    for(let i=0; i<filterArray.length; i++){
        filterArray[i].addEventListener("mouseover",function(){
            filterImg[i].setAttribute('style','transform:rotate(180deg)');            
        });
        filterArray[i].addEventListener("mouseleave",function(){
            filterImg[i].setAttribute('style','transform:rotate(0deg)');
        });
    }
};

let shapeHeartImages = document.querySelectorAll(".item__heart-shape");
let blackHeart = document.querySelectorAll(".item__heart-full");
blackHeart.clicked = false;
let items = document.querySelectorAll(".offers__item");
let description = document.querySelectorAll(".item__img-description");
/* changing hover on items */
ChangeHoverOnImages();
function ChangeHoverOnImages(){
    for(let i=0; i<items.length; i++){
            items[i].addEventListener("mouseover",function(){
            blackHeart[i].style.opacity = 1; 
            description[i].style.opacity = 1;
            description[i].style.top ="297px";
        });
    };
    for(let i=0; i<items.length; i++){
            items[i].addEventListener("mouseleave",function(){
            if(!blackHeart[i].clicked){
                blackHeart[i].style.opacity = 0;
                description[i].style.opacity = 0;
            }
            else{
                description[i].style.opacity = 0;
            }
            
        });
    };  
}
/* fourth task */
let favorites = 0;
let favSpan = document.createElement("span");
favSpan.innerHTML = `Favorites: ${favorites}`;
let main = document.querySelector("main");
AddClickOnHeart();
function AddClickOnHeart(){
    for(let i=0; i< blackHeart.length; i++){
        blackHeart[i].addEventListener("click",function(){
            if(blackHeart[i].clicked) {
                blackHeart[i].clicked = false; 
                favorites--;
              }
              else {
                blackHeart[i].clicked = true;
                favorites++;
              } 
              if(favorites){
                favSpan.innerHTML = `Favorites: ${favorites}`;
                main.appendChild(favSpan);
              }
              else
                main.removeChild(favSpan);
        });
    }
}

/* fifth task */
let modelImage= document.querySelectorAll(".item__img");
OpenWindow();
function OpenWindow(){
        for(let i=0; i<items.length; i++){
            modelImage[i].addEventListener("click",function(){
                let myWindow = window.open("","_blank");
                myWindow.document.write(`<link rel="stylesheet" href="./assets/styles/main.css"/>
                <body><main><div class="main__offers"> ${items[i].outerHTML} </div></main></body>`);
                myWindow.document.close();               
            });
        }
}
