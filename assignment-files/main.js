document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1

      let text = document.querySelector('.ex1-text').value;

      if(text !== ""){
        text = text.reset();
      }


  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
  let msgInp = document.querySelector('.ex2-text');
  let errMsg = document.querySelector('.flash-message');

  if (msg.checked) {
    rate_value = document.getElementById('r1').value;
  }
})


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
  let roundInput = document.querySelector('.item-input').value;
  let greenCheck = document.querySelector("sum-total");
  let checkedBox = 0;

  if (roundInput.checked) {
    roundInput = greenCheck;
    checkedBox = roundInput++;
  
  }
  
})


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
})
