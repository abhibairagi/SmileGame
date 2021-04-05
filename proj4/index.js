let cards = document.querySelectorAll('.card');


// variables 
let isflipped = false;
let firstcard;
let secondcard;

cards.forEach( (card) => card.addEventListener("click", function flip () {
 this.classList.add("flip")
  if (!isflipped) {
    isflipped = true;
    firstcard = this
  } else {
    // firstcard = this
    secondcard = this
    console.log(firstcard)
    console.log(secondcard)
    checker();
  }
}));

const checker = ()=> {
  // console.log("checking")
  if (firstcard.dataset.image === secondcard.dataset.image) {
    success();
  }
   else {
     failed();
   }
}

const success = ()=> {
  firstcard.removeEventListener("click", flip)
  secondcard.removeEventListener("click", flip)
  reset();
}


const failed = ()=> {
  //  console.log("Failed")
  setTimeout(()=> {
    firstcard.classList.remove("flip")
    secondcard.classList.remove("flip")
    reset();
  },1000)
  
}


const  reset= ()=> {
  isflipped = false;
  firstcard = null;
  secondcard = null;
}


(function shuffle () {
  cards.forEach(card => {
    var index = Math.floor(Math.random() * 16)
    card.style.order = index
  })
})();



