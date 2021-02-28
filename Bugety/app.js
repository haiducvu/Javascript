
// 6. Setting up the frist event lisener   

// BUTGET CONTROLLER
var budgetController= (function(){
    
    // this is function constructor 
    var Expense= function (id, description, value){
        this.id= id;
        this.description= description;
        this.value= value;
    };

    var Income= function (id, description, value){
        this.id= id;
        this.description= description;
        this.value= value;
    };

    var allExpensive =[];
    var allIncomes= [];
    var totalExpense=0;

    var data={
        allItems:{
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0,
        } 
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            //[1 2 3 4 6] next ID= 6
            //[1 2 3 4 6 8] next ID= 9
            // ID= last ID -1;

            // create new ID
            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length -1].id +1;
            }else{
                ID=0;
            }

            // create new item based on 'inc' or 'exp' type

            if( type==='exp'){
                newItem =new Expense(ID, des, val); 
            }else if(type ==='inc'){
                newItem =new Income(ID, des, val); 
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            //return the new elenment
            return  newItem;
        },
        testing: function(){
            console.log(data);
        }
    };

})();


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
    
    var setupEventListener= function(){
        
        var DOM= UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){

            if(event.keyCode===13 || event.which===13){
                ctrlAddItem();
                // console.log('Enter was pressed');
            }
            // console.log(event); 
    
        });

    }
    
    var ctrlAddItem= function(){
        var intput, newItem;
         // 1. Get the field input data
          input= UIController.getInput();
        console.log('INPUT',input);
        // 2. Add the item to the budget controller
          newItem= budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI s
    }
    
    return {
        init: function(){
            console.log('Application  has started.');
            setupEventListener();
        }
    }

  

})(budgetController, UIController);

controller.init();