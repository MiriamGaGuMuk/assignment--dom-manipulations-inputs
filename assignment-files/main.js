document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1
  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2

})


document.querySelector("#calculate-items-btn").addEventListener('click', function(e){
})

document
.querySelector("#select-to-show-more-btn")
.addEventListener('click',function addCarInfo(){
 // TASK #4
 var carListDropDownEl = document.querySelector('.selection')
 var index = carListDropDownEl.selectedIndex
 var imgEl = document.querySelector('.img-box')
 var makeAndModelEl = document.querySelector('.model')
 var msrpEl = document.querySelector('.msrp')
 var mpgEl = document.querySelector('.mpg')
 var edmundsEl = document.querySelector('.edmunds')

// Using this variable to read the data of EACH index
 var datasetIndex = carListDropDownEl.options[index].dataset

 imgEl.innerHTML = '<img src="./images/'+datasetIndex.img+'">'
 makeAndModelEl.innerHTML = carListDropDownEl.value
 msrpEl.innerHTML = datasetIndex.msrp
 mpgEl.innerHTML = datasetIndex.mpg
 edmundsEl.innerHTML = datasetIndex.edmunds
})
