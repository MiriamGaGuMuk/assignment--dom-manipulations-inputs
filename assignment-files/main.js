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


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  //TASK #3
  let roundInput = document.querySelector('.item-input').value;
  let greenCheck = document.querySelector("sum-total");
  let checkedBox = 0;

  for(let i = 0; i < roundInput.length; i++){
    let itemVal = roundInput[i];
    let imputVal = parseInt(itemVal.value)

    if(itemVal.checked === true){
      checkedBox += imputVal
      greenCheck.textContent = '$' + checkedBox;
    }else{
      greenCheck.textContent = '$' + checkedBox
    }

  }
  
});


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
})
