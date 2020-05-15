const leftSlideContainer = document.querySelector(".slide-container"),
    rightSlideContainer = document.querySelector(".slide-but");

let currentItem = 0,
    dialogCurrentItem,
    position = 0,
    timeoutID,
    translate = 'translateY';


async function request() {

    let response = await fetch("data/data.json");
    return await response.json();

}

request().then(item => {

    item.arr.forEach(image => createNewSlide(image))
    const numChild = leftSlideContainer.children.length;
    onClickItem();
    autoStep(numChild, 1000);
    slideFullScreen();

});

const createNewSlide = imageSrc => {

    const div = document.createElement('div');

    div.className = "slide-item-row slide-item";
    div.innerHTML = `<image class = "slide-image" src = "${imageSrc}"></image>`
    leftSlideContainer.appendChild(div);

    const rightDiv = document.createElement('div');

    rightDiv.className = "slide-but-item-row slide-but-item";
    rightDiv.style.background = `url('${imageSrc}') center center / contain no-repeat`;
    rightSlideContainer.appendChild(rightDiv);

}

const onClickItem = () => {

    const rightContainer = document.querySelectorAll(".slide-but-item");

    rightContainer.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            const numChild = leftSlideContainer.children.length;
            if (item.style.borderColor !== 'black') {
                currentItem = i;
                clearTimeout(timeoutID);
                position = currentItem * (-100);
                leftSlideContainer.style.transform = `${translate}(${position}%)`;
                rightContainer.forEach((item) => {
                    item.style.borderColor = "rgba(0,0,0,0)";
                });
                rightContainer[currentItem].style.borderColor = "black";

            } else {
                currentItem = i;
                clearTimeout(timeoutID);
                rightContainer.forEach((item) => {
                    item.style.borderColor = "rgba(0,0,0,0)";
                });
                rightContainer[currentItem].style.borderColor = "blue";

                autoStep(numChild, 2000);
            }

        })

    })
}

const autoStep = (count, delay) => {

    let timeStart = delay;
    timeoutID = setInterval(() => {
        const rightContainer = document.querySelectorAll(".slide-but-item");
        currentItem = count - 1 === currentItem ? 0 : currentItem + 1;
        position = currentItem * (-100);
        rightContainer.forEach((item) => {
            item.style.borderColor = "rgba(0,0,0,0)";
        });
        rightContainer[currentItem].style.borderColor = "blue";
        leftSlideContainer.style.transform = `${translate}(${position}%)`;
    }, timeStart);

}

const slideFullScreen = () => {

    const leftSlideItems = document.querySelectorAll('.slide-item'),
        leftImageItems = document.querySelectorAll('.slide-image');

    leftSlideItems.forEach(item => {

        item.addEventListener('click', (event) => {
            dialogCurrentItem = currentItem;

            if (event.target.classList.contains('slide-item') || event.target.classList.contains('slide-image')) {

                clearTimeout(timeoutID);
                const numChild = leftSlideContainer.children.length;
                const fon = document.createElement('div');

                fon.className = 'fon';
                fon.innerHTML = `<div class = "dialog"><img class="dialog-image" src="${leftImageItems[currentItem].src}"></img></div><div class="close-btn"></div><div class = "num-page">${currentItem+1}/${numChild}</div>`
                document.querySelector('body').appendChild(fon);
                document.querySelector('.close-btn').addEventListener('click', () => {

                    document.querySelector('body').removeChild(document.querySelector('.fon'));
                    autoStep(numChild, 2000);


                })

            }

        })
    })
    document.addEventListener('keyup', (eventKey) => {
        console.log(eventKey)
        if (document.querySelector('.fon')) {
            const numChild = leftSlideContainer.children.length;
            if (eventKey.keyCode === 27) {
                document.querySelector('body').removeChild(document.querySelector('.fon'));
                autoStep(numChild, 1000);

            } else if (eventKey.keyCode === 39) {

                dialogCurrentItem = dialogCurrentItem == numChild - 1 ? 0 : dialogCurrentItem + 1;
                document.querySelector('.dialog-image').src = leftImageItems[dialogCurrentItem].src;
                document.querySelector('.num-page').innerText = `${dialogCurrentItem + 1}/${numChild}`;

            } else if (eventKey.keyCode === 37) {

                dialogCurrentItem = dialogCurrentItem == 0 ? numChild - 1 : dialogCurrentItem - 1;
                document.querySelector('.dialog-image').src = leftImageItems[dialogCurrentItem].src;
                document.querySelector('.num-page').innerText = `${dialogCurrentItem + 1}/${numChild}`;

            } else {

            }
        }

    })
}