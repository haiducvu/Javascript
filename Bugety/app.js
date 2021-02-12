
// 6. Setting up the frist event lisener   

// BUTGET CONTROLLER
var budgetController= (function(){
  // Some code
});


//UI CONTROLLER
var UIController= (function(){
    // Some code

    var DOMstrings={
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    }

    return{
        getInput: function(){
           return{
              type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
              description: document.querySelector(DOMstrings.inputDescription).value,
              value: document.querySelector(DOMstrings.inputValue).value,
           }
        },
        getDOMStrings: function(){
            return DOMstrings;
        } 
    }

})();


// GLOBAL CONTROLLER
var controller= (function(budgetCtrl, UICtrl){

    var DOM= UICtrl.getDOMStrings();
    
    var ctrlAddItem= function(){
         // 1. Get the field input data
        var input= UIController.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
         console.log('hello'); 
    }
    
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if(event.keyCode===13 || event.which===13){
            ctrlAddItem();
            // console.log('Enter was pressed');
        }
        // console.log(event); 

    });

})(budgetController, UIController);

 