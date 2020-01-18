const leftSlideContainer = document.querySelector(".slide-container"),
    rightSlideContainer = document.querySelector(".slide-but")

let currentItem = 0,
    position = 0,
    timeoutID,
    translate = 'translateY';


async function request () {
        let response = await fetch("data/data.json");
        let text = await response.json();
        text.arr.forEach(item =>{
            console.log(item);
            createNewSlide(item)
        } 
        )
        const numChild = leftSlideContainer.children.length;

        onClickItem();
        // onHover();
        autoStep(numChild,1000);
        slideFullScreen();
    } 
    request();

 
const createNewSlide = imageSrc => {
    const div = document.createElement('div');
    div.className = "slide-item-row slide-item";
    div.innerHTML= `<image class = "slide-image" src = "${imageSrc}"></image>`
    leftSlideContainer.appendChild(div);

    const rightDiv = document.createElement('div');
    rightDiv.className = "slide-but-item-row slide-but-item";
    rightDiv.style.background = `url('${imageSrc}') center center / contain no-repeat`;
    rightSlideContainer.appendChild(rightDiv);

}

const onClickItem = () => {
    const rightContainer = document.querySelectorAll(".slide-but-item");

    rightContainer.forEach((item,i) => {
        item.addEventListener("click",(event) => {
            const numChild = leftSlideContainer.children.length;
            if(item.style.borderColor!=='black'){
                currentItem = i;
                clearTimeout(timeoutID);
                position =currentItem*(-100);
                leftSlideContainer.style.transform = `${translate}(${position}%)`;
                rightContainer.forEach((item)=>{
                    item.style.borderColor = "rgba(0,0,0,0)";
                });
                rightContainer[currentItem].style.borderColor = "black";

            } else{
                currentItem = i;
                clearTimeout(timeoutID);
                rightContainer.forEach((item)=>{
                    item.style.borderColor = "rgba(0,0,0,0)";
                });
                rightContainer[currentItem].style.borderColor = "green";

                autoStep(numChild,1000);
            }

        })
              
    })
}

const autoStep = (count,delay) => {
    
    let timeStart = delay; 
    timeoutID = setInterval(()=>{
        const rightContainer = document.querySelectorAll(".slide-but-item");
        currentItem = count - 1 === currentItem ? 0 : currentItem + 1;
        position = currentItem * (-100);
        rightContainer.forEach((item)=>{
            item.style.borderColor = "rgba(0,0,0,0)";
        });
        rightContainer[currentItem].style.borderColor = "green";
        leftSlideContainer.style.transform = `${translate}(${position}%)`;
    }, timeStart);
   
}

// const onHover = ()=>{
//     const rightContainer = document.querySelectorAll(".slide-but-item");
    
//     rightContainer.forEach((item)=>{
//         item.addEventListener("mouseenter",()=>{
//             console.log("fer")
//         })
//     })
    
// }



// document.querySelector('.press').addEventListener('click',() => {
//     clearTimeout(timeoutID);
//     const numChild = leftSlideContainer.children.length;

//     translate = translate === 'translateX' ? 'translateY' : 'translateX';
//     document.querySelector('.slide-show').className = 'slide-show-column slide-show';
//     rightSlideContainer.className = 'slide-but-column slide-but';
//     document.querySelector('.slide-item').className = 'slide-item-column slide-item';
//     leftSlideContainer.className = 'slide-container-column slide-container';
//     document.querySelectorAll('.slide-but-item').forEach(item => {item.className = 'slide-but-item-column slide-but-item';});
    
//     autoStep(numChild,1000);


// })



const slideFullScreen = () => {

    const leftSlideItems = document.querySelectorAll('.slide-item'),
        leftImageItems = document.querySelectorAll('.slide-image');
    leftSlideItems.forEach(item => {
        item.addEventListener('click',(event)=>{
            if(event.target.classList.contains('slide-item')||event.target.classList.contains('slide-image')){
                clearTimeout(timeoutID);

                const fon = document.createElement('div');
                fon.className = 'fon';
                fon.innerHTML = `<div class = "dialog"><img class="dialog-image" src="${leftImageItems[currentItem].src}"></img></div>`
                document.querySelector('body').appendChild(fon);

                document.addEventListener('keyup',(eventKey)=>{

                    if(eventKey.key === 'Escape'){
                        const numChild = leftSlideContainer.children.length;

                        if(document.querySelector('.fon')){
                        document.querySelector('body').removeChild(document.querySelector('.fon'));

                        autoStep(numChild,1000);

                        }
                    } else if(eventKey.key === ''){

                    }

                })




            }
        })
    })
}
