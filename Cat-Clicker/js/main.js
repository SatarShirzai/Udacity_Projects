import {
  data
} from 'data/data.js'


/**

// List of Cats name
let cats = [
  'Exotic Shorthair',
  'Ragamuffin cat',
  'Persian cat',
  'Maine Coon',
  'Sphynx cat'
];

// List of Cats Image
let images = [
  'img/ExoticShorthair.jpg',
  'img/RagamuffinCat.jpg',
  'img/PersianCat.jpg',
  'img/maineCoon.jpg',
  'img/SphynxCat.jpg'
];

// List of Cats Information
let description = [
  'The Exotic Shorthair is a breed of cat developed into a short-haired version of the Persian. The Exotic is similar to the Persian in many ways, including temperament and conformation, a flat nose and face with the exceptions of the short dense coat',
  'The Ragamuffin is a breed of domestic cat. It is a variant of the Ragdoll cat and was established as a separate breed in 1994. Ragamuffins are notable for their friendly personalities and thick, rabbitlike fur.',
  'DescriptionThe Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in the English-speaking countries. In the Middle East, region they are widely known as "Iranian cat" and in Iran they are known as "Shirazi cat".',
  'The Maine Coon is the largest domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the state of Maine, where it is the official state cat.',
  'The Sphynx cat is a breed of cat known for its lack of coat. Hairlessness in cats is a naturally occurring genetic mutation; however, the Sphynx cat, as a breed, was developed through selective breeding, starting in the 1960s.'
];
for (let i = 0; i < cats.length; i++) {
  let cat = cats[i];
  let img = images[i];
  let info = description[i];
  let clickcounter = 0;

  // Create cat list
  let catnameContainer = document.querySelector('.cat-name-container');
  let catListitem = document.createElement('li');
  catListitem.innerHTML = cat;
  catnameContainer.appendChild(catListitem);

  // Get element from DOM and display images
  let catImg = document.querySelector('.cat-image');
  let clickNum = document.querySelector('.click-num');
  let catInfo = document.querySelector('.cat-info');

  catListitem.addEventListener('click', (function (e) {
    return function (e) {
      catImg.innerHTML = '';
      catInfo.innerHTML = '';


      // add chosen image
      let catImgItem = document.createElement('img');
      catImgItem.src = img;

      // add chosen name
      let catNameItem = document.createElement('h3');
      catNameItem.innerHTML = cat;

      // add chosen cat information
      let catInfoItem = document.createElement('p');
      catInfoItem.innerHTML = info;

      // display Cat name and Images onhtml 
      catImg.appendChild(catImgItem);
      catImg.appendChild(catNameItem);
      catInfo.appendChild(catInfoItem);

      clickNum.innerHTML = clickcounter;

      catImgItem.addEventListener('click', (function (e) {
        return function () {
          clickcounter++;
          clickNum.innerHTML = clickcounter;
          console.log(clickNum = clickcounter); // just for fun 
          

        };
      })(cat));
    };
  })(cat));

}

 */