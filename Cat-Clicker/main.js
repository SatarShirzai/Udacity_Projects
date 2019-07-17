let cats = ['Exotic Shorthair', 'Ragamuffin cat', 'Persian cat', 'Maine Coon', 'Sphynx cat'];
let images = ['img/ExoticShorthair.jpg', 'img/RagamuffinCat.jpg', 'img/PersianCat.jpg', 'img/maineCoon.jpg', 'img/SphynxCat.jpg'];

for (let i = 0; i < cats.length; i++) {
    let cat = cats[i];
    let img = images[i];
    let clickcounter = 0;

    // Create cat list
    let catnameContainer = document.querySelector('.cat-name-container');
    let catListitem = document.createElement('li');
    catListitem.innerHTML = cat;
    catnameContainer.appendChild(catListitem);

    // Get element from DOM and display images
    let catImg = document.querySelector('.cat-image');
    let clickNum = document.querySelector('.click-num');

    catListitem.addEventListener('click', (function (e) {
        return function (e) {
            catImg.innerHTML = '';


            // add chosen image
            let catImgItem = document.createElement('img');
            catImgItem.src = img;

            // add chosen name
            let catNameItem = document.createElement('h3');
            catNameItem.innerHTML = cat;

            // display Cat name and Images onhtml 
            catImg.appendChild(catImgItem);
            catImg.appendChild(catNameItem);

            clickNum.innerHTML = clickcounter;

            catImgItem.addEventListener('click', (function (e) {
                return function () {
                    clickcounter++;
                    clickNum.innerHTML = clickcounter;

                };
            })(cat));
        };
    })(cat));

}