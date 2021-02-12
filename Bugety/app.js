
// 6. Setting up the frist event lisener   

// BUTGET CONTROLLER
var budgetController= (function(){
  // Some code
});


//UI CONTROLLER
var UIController= (function(){
    // Some code

})();


// GLOBAL CONTROLLER
var controller= (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem= function(){
         // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
         console.log('hello'); 
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if(event.keyCode===13 || event.which===13){
            ctrlAddItem();
            // console.log('Enter was pressed');
        }
        // console.log(event); 

    });

})(budgetController, UIController);

 