/* first task */
let sortArray = [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"},{color:"Green", count:"1014"},{color:"Red", count:"1014"},{color:"Multi", count:"1014"},
{color:"Blue", count:"1014"},{color:"Pink", count:"1014"},{color:"Beige", count:"1014"},{color:"Purple", count:"1014"}];

let productType =  [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"}];

let sleeveLength = [ {color:"White", count:"1014"}, {color:"Black", count:"1014"},{color:"Navy", count:"1014"},
{color:"Grey", count:"1014"}];

let arrayOfUl = document.getElementsByClassName("dropdown__list");
InsertFilters();
function InsertFilters(){
    for(let i=0; i<3; i++){
        if(i===0){
            let first=arrayOfUl[i];
            sortArray.forEach(function(element){
                let li = document.createElement("li");   
                let text = document.createTextNode(element.color +"(" + element.count+")");   
                li.appendChild(text); 
                li.classList.add("dropdown__list__item");   
                first.append(li)
            });
        }
        if(i===1){
            let first=arrayOfUl[i];
            sortArray.forEach(function(element){
                let li = document.createElement("li");   
                let text = document.createTextNode(element.color +"(" + element.count +")");
                li.appendChild(text);  
                li.classList.add("dropdown__list__item");   
                first.append(li)
            });
        }
        if(i===2){
            let first=arrayOfUl[i];
            sortArray.forEach(function(element){
                let li = document.createElement("li");   
                let text = document.createTextNode(element.color +"(" + element.count + ")");   
                li.appendChild(text);   
                li.classList.add("dropdown__list__item");   
                first.append(li)
            });
        }
    };
}

/* second task*/
 let divArray = document.getElementsByClassName("main__offers");
 let srcImg = "./assets/images/offer.jpg";
 let srcHeartShape="./assets/images/heart-shape.png";
 let srcHeartFull ="./assets/images/heart-full.png";

 
 let desc = [" Wrangler small logo crew neck t-shirt in white",
            "Wrangler logo chest stripe rugby polo in blue/white",
            " Wrangler kobel retro large logo ringer t-shirt in white",
            "Lyle & Scott polo in burgundy",
            "sleeve t-shirt with graphic print in neon green",
            "oversized t-shirt with rainbow",
            "oversized t-shirt with back print",
            "reloxed t-shirt with retro print" ];
            
let price = [ "£16.63","£50.63","£20.97","£44.12",
            "£12.29","£22.42","£10.12","£18.08"];

InsertItems();
 function InsertItems(){
     for(let i=0; i<desc.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("offers__item");
        divArray[0].appendChild(newDiv);
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
        description.innerHTML = desc[i];
        newDiv.appendChild(description);
        let price = document.createElement("span");
        price.classList.add("item__price");
        price.innerText = price[i];
     }  
 }

/* third */
ChangeHoverOnFilters();
/* changing hover on filters */
function ChangeHoverOnFilters(){
    let filterArray = document.getElementsByClassName("container__search-filter");
    for(let i=0; i<filterArray.length; i++){
        filterArray[i].addEventListener("mouseover",function(){
            let img = document.getElementsByClassName("search-filter__img");
            img[i].setAttribute('style','transform:rotate(180deg)');            
        });
        filterArray[i].addEventListener("mouseleave",function(){
            let img = document.getElementsByClassName("search-filter__img");
            img[i].setAttribute('style','transform:rotate(0deg)');
        });
    }
};
/* changing hover on items */
let shapeHeartImages = document.getElementsByClassName("item__heart-shape");
let img = document.getElementsByClassName("item__heart-full");
ChangeHoverOnImages();
function ChangeHoverOnImages(){
    let items = document.getElementsByClassName("offers__item");
    for(let i=0; i<items.length; i++){
            items[i].addEventListener("mouseover",function(){
            let description = document.getElementsByClassName("item__img-description");
            img[i].style.opacity = 1; 
            description[i].style.opacity = 1;
            description[i].style.top ="297px";
        });
    };
    for(let i=0; i<items.length; i++){
            items[i].addEventListener("mouseleave",function(){
            let img = document.getElementsByClassName("item__heart-full");
            let description = document.getElementsByClassName("item__img-description");
            img[i].style.opacity = 0;
            description[i].style.opacity = 0;
        });
    };  
}

/* fourth task */
AddClickOnHeart();
function AddClickOnHeart(){
    for(let i=0; i< shapeHeartImages.length; i++){
        shapeHeartImages[i].addEventListener("click",function(event){
        img[i].style.opacity = 1;         
        },true);
    }
}