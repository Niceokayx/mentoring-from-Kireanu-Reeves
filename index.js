"use strict"


const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}


function initRatings() {

  let ratingActive, ratingValue;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }


  function initRating(rating) {
    initRatingVars(rating);


    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }


  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');

  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }


  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener("mouseenter", function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);

      });
    }
  }
}

function jopaClose() {
  const openj = document.querySelector(".opening");
  const closej = document.querySelector(".opening");    
  const navmobil = document.querySelector(".navmobil");  
 const Homemob = document.querySelector(".Homemob")
 const photomobile = document.querySelector(".photomobile")
  openj.classList.add("hidden");  
  closej.classList.add("hidden");
  navmobil.classList.add("hidden");
  Homemob.classList.add("anhidden");
  photomobile.classList.add("anhidden");

 
  
 
 
}

function jopaOpen() {
  const openj = document.querySelector(".opening");
  const closej = document.querySelector(".opening");
  const navmobil = document.querySelector(".navmobil");
  const Homemob =document.querySelector(".Homemob");
  const photomobile = document.querySelector(".photomobile");
  openj.classList.remove("hidden"); 
  closej.classList.remove("hidden");
  navmobil.classList.remove("hidden"); 
  Homemob.classList.remove("anhidden")
  photomobile.classList.remove("anhidden")
 
 
    
  
  }
  
 