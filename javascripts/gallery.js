let galleryImages= document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth= window.innerWidth;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick= function(){
            let getElementCss= window.getComputedStyle(image);
            let getFullImageUrl= getElementCss.getPropertyValue("background-image");
            let getImageUrlPos= getFullImageUrl.split("/img/gallery/");
            let newImageUrl= getImageUrlPos[1].replace('")', '');
            
            getLatestOpenedImg= index + 1;

            // alert(newImageUrl);

            let container= document.body;
            let newImageWindow= document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute('class','img-window');
            newImageWindow.setAttribute('onclick','closeImage()');

            let newImage= document.createElement("img");
            newImageWindow.appendChild(newImage);
            newImage.setAttribute("src", "img/gallery/" + newImageUrl);
            newImage.setAttribute("id", "current-image");

            newImage.onload= function(){

                let imageWidth= this.width;
                let calcImageWidth= ((windowWidth - imageWidth)/2) - 120;
                
                let nextBtn= document.createElement("a");
                let nextBtnTxt= document.createTextNode("Next");
                nextBtn.appendChild(nextBtnTxt);
                container.appendChild(nextBtn);
                nextBtn.setAttribute("class", "next-btn");
                nextBtn.setAttribute("onclick", "changeImage(1)"); 
                nextBtn.style.cssText=("right: "+calcImageWidth+"px;"); 
                
                let previousBtn= document.createElement("a");
                let previousBtnTxt= document.createTextNode("Prev");
                previousBtn.appendChild(previousBtnTxt);
                container.appendChild(previousBtn);
                previousBtn.setAttribute("class", "prev-btn");
                previousBtn.setAttribute("onclick", "changeImage(0)");
                previousBtn.style.cssText=("left:"+calcImageWidth+"px;");  
            }

                      
        }
    });
}

function closeImage(){
    document.querySelector(".img-window").remove();
    document.querySelector(".next-btn").remove();
    document.querySelector(".prev-btn").remove();
}

function changeImage(changeDir){
    document.querySelector("#current-image").remove();

    let getImgWindow= document.querySelector(".img-window");
    let newImg= document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1){
        calcNewImg= getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length){
            calcNewImg= 1;
        }
    }else if(changeDir === 0){
        calcNewImg= getLatestOpenedImg -1;
        if(calcNewImg < 1){
            calcNewImg= galleryImages.length;
        }
    }

    newImg.setAttribute("src","img/gallery/img-" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-image");

    getLatestOpenedImg= calcNewImg;

    newImg.onload= function(){
        let imageWidth= this.width;
        let calcImagetoEdge= ((windowWidth - imageWidth) /2) - 80;

        let nextButtonStyle= document.querySelector(".next-btn");
        nextButtonStyle.style.cssText= "right:" + calcImagetoEdge + "px";

        let prevButtonStyle= document.querySelector(".prev-btn");
        prevButtonStyle.style.cssText= "left:" + calcImagetoEdge + "px";
    }
}