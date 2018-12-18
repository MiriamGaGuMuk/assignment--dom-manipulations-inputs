document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1

      let text = document.querySelector('.ex1-text');
      text.value = "";
     

});
  


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
  let box = document.querySelector(".ex2-text") 
  let textLong = box.value.length 
  let parag = document.querySelector(" .flash-message")
  
  if(textLong >= 6){ //OK
  	parag.classList.remove("invalid")
  	parag.classList.add("valid")
  	parag.textContent = "Field Valid" 
  } else {
  	parag.classList.remove("valid")
  	parag.classList.add("invalid")
  	parag.textContent = "Input not long enough"
  }
});



  // TASK #3
  document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  var total = 0;
  var inputs = document.querySelectorAll('.item-input');

  inputs.forEach( input => input.checked ? total += parseInt(input.value) : null );

  document.querySelector('.sum-total').textContent = `$ ${total}`
})


  // TASK #4
  document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  let box = document.querySelector("#select-to-show-more .selection")
  let contentSet = box.options[box.selectedIndex]
  let model =  document.querySelector(".more-info .model")
  let msrp =  document.querySelector(".more-info .msrp")
  let mpg = document.querySelector(".more-info .mpg")
  let edmunds = document.querySelector(".more-info .edmunds")
  let tagImg = document.querySelector(".more-info .img-box")
  let contentImg = contentSet.dataset.img
  model.textContent = box.value
  msrp.textContent = contentSet.dataset.msrp
  mpg.textContent = contentSet.dataset.mpg
  edmunds.textContent = contentSet.dataset.edmunds
  tagImg.innerHTML = `<img src="images/${contentImg}"/>`

  console.log("model")


  console.log(box.options[box.selectedIndex])
  


});
