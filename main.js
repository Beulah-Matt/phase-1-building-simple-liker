// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const button = document.querySelector('#modal')



// // Your JavaScript code goes here!
let articleHearts = document.querySelectorAll(".like");
function likeCallback (e){
  let heart = e.target;
  mimicServerCall()
  .then (function (serverMessage){
    alert("You notified the server!");
    alert(serverMessage);
    heart.innerText=glyphStates[heart.innerText].activated-heart;
    heart.style.color = colorStates[heart.style.color]
  })
  .catch (function(error){
    setTimeout (function(){
      try {
      throw new Error (button.classList.remove('hidden'), 'Error');
      }catch (e){
      console.error (e);
       }
      }, 3000)
  });
}

for (let glyph of articleHearts){
  glyph.addEventListener('click', likeCallback);
}

// Remove hidden
// const button= document.queryselector("#modal")
// button.classList.remove('hidden')
// .catch(error => {document.body.innerHTML = 
//   console.error(button.classList.remove('hidden'), error);
// })

//  setTimeout (function(){
//  try {
//    throw new Error (button.classList.remove('hidden'), 'Error');
//   }catch (e){
//    console.error (e);
//  }
//  }, 300)



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
