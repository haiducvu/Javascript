// Bài 1: let & var & const & hosting
// var iNume = 5;
// if (true) {
//   var iNum = 10;
// }
// console.log("Bài 1", iNum);

//Bài 2: Hosting
 
// console.log(a);
// for(let i=0; i<3; i++){
//     a = 10;
//     a = 14;
//     // console.log(a);
// }
// var a;
// const a={b:2,c:3};
// a.b=10;
// console.log(a); 
//let or const ràng buộc biến khi trước khi khai báo

//Bài 3: Function Scope
/**
 * Phạm vi sử dụng bên trong 1 hàm
 * Biến bên ngoài sử dụng đc bên trong, không được lại
 */


  //Code Challenge 1
//   var massMarsk=78;
//   var heightMarsk=1.69;

//   var massJohn=199;
//   var heightJhon=1.89;

//   var BMIMarsk= massMarsk / (heightMarsk*heightMarsk);
//   var BMIJohn= massJohn / (heightJhon*heightJhon);
// console.log("Marsk",BMIMarsk);
// console.log("Jhon",BMIJohn);
//   var marlHeigherBMI = BMIMarsk> BMIJohn;
//   console.log("Result",marlHeigherBMI); 


//IF ELSE statement
// var a='Jhon';
// var b='signle';
// if(b==='Marsk'){
//     console.log(a+ ' is married!');
// }else{
//     console.log(a + ' will hopefully marry soon')
// }


//Falsy And Truthy
//Falsy có 5 giá trị: underfined, null, 0, '', NaN
//Truthy : NOT Falsy

//Function
// function caculator(birthday){
//   return 2018- birthday;
// }

// function yearsUntilRetirement(year, firstName){
//   var age= caculator(year);
//   var retirement= 65- age;
//   console.log(firstName + 'reties in' + retirement + 'year');
//   return retirement;
// }
// var a= yearsUntilRetirement(1990,'John');
// console.log(a);


//Function statement
// var whatDoYouDo= function (job, firstName){
//   switch(job){
//     case 'teacher':
//       return firstName + 'case1';
//     case 'driver':
//       return firstName + 'case2';
//     default:
//       return firstName + 'default';
//   }
// }

// console.log(whatDoYouDo('coder', 'VUDUCHAI'));

//Array
// var names=['John', 'Mark', 'Jane'];
// var years=new Array(1990, 1992, 1995);
// console.log(names);
// console.log(years);

// var value=names.indexOf('Jane') === -1 ? 'Not is Hai' : 'Have Hai';
// console.log('Array check is extension', value);

//Changellen
// function Bill(constBill){
//   if(constBill<50){
//     return constBill*0.2;
//   }
//   else if(constBill>50 && constBill <200)
//   {
//     return constBill*0.15;
//   }
//   else
//   {
//     return constBill*0.1;
//   }
// }
 
// var ArrayBill=[48,124,256];

// var tipsBill=[Bill(ArrayBill[1]), Bill(ArrayBill[2]), Bill(ArrayBill[0])];

// console.log(tipsBill);

            // LESSON 22: OBJECTS AND PROPERTIES
  //Object literal
// var join= {
//   //key: value
//   name: 'John',
//   firstName:'hai',
//   lastName:'vu',
//   arrayName:['Jane', 'Mark', 'Bob'],
//   isBoolean:false,
// }
// console.log(join);

//   //Object syntax
//   var jane= new Object();
//   jane.firstName= 'Jane';
//   jane.birthday= 1997;
//   jane['lastName']= 'Smith';
//   console.log(jane);

    //CODING CHANGELEEN 4
  // var john ={
  //   fullName: 'John Smith',
  //   mass: 92,
  //   height: 1.95,
  //   caclBMI: function(){
  //     this.bmi= this.mass/ (this.height * this.height);
  //     return this.bmi;
  //   } 
  // }

  // var mark ={
  //   fullName: 'Mark  Willson',
  //   mass: 85,
  //   height: 2.02,
  //   caclBMI: function(){
  //     this.bmi= this.mass/ (this.height * this.height);
  //     return this.bmi;
  //   } 
  // }

  // john.caclBMI();
  // mark.caclBMI();
  // console.log(john, mark);

  // if(john.bmi > mark.bmi){
  //   console.log(john.fullName+ ' has a higher BMI of ' + john.bmi);
  // }else if (john.bmi < mark.bmi){
  //   console.log(mark.fullName + ' has a higher BMI of '+ mark.bmi);
  // }else{
  //   console.log('They have the same BMI');
  // }

      //LESSON 26: Loop and Iteration
//var john=['vu', 'duc', 'hai', 1997, 'true', 'false'];
// for(var i=0; i<john.length; i++){
//   console.log(i);
// }

// var i=0;
// while(i< john.length)
// {
//   console.log(john[i]);
//   i++;
// }

// for(var i =0; i<john.length; i++)
// {
//   if(typeof john[i] != 'string') continue; //break;
//   console.log(john[i]);
// }

    //LESSON 27+ 28: CODE CHANGLLEN 5
// var valueBill=[124, 48, 268, 180, 42];
// function payBill(value){
//     if(value <50){
//       return value* 0.2;
//     }else if(value >50 && value <200){
//       return value*0.15;
//     }
//     else return value*0.1;
// }

// for(var i=0; i<valueBill.length; i++){
//   console.log('Tip value',payBill(valueBill[i]));
// }

    // Bài sửa
// var john={
//   fullName: 'Vu Duc Hai',
//   bills:[124, 48, 268, 180, 42],
//   callTips: function(){
//     this.tips=[];
//     this.finalValues=[];

//     for(var i=0; i<this.bills.length;i++){
//       //Determine 
//         var percentage;
//         var bill= this.bills[i];

//         if(bill < 50){
//           percentage= 0.2;
//         }else if(bill >=50 && bill<200)
//         {
//           percentage= 0.15;
//         }else{
//           percentage= 0.1;
//         }
//       //Add results to the corresponding
//       this.tips[i]= bill* percentage;
//       this.finalValues[i]=bill + bill*percentage; 
//     }
//   }
// }


// john.callTips();
// console.log(john);


  /**Phần 2: Bài 6: Hosting in Practice */
//variable 
//   console.log(age);
//   var age=23;
// console.log(age);
//   function foo(){
//     var age= 65;
//     console.log(age);
//   }
//   foo();
//   console.log(age);

  //Default Parameter
// function tihnTong(a=5, b=10){
//   console.log(a+b);
//   return a+b;
// }
// tihnTong(1,2);

// 6. Practice Hosting UDEMY
// function caculatorAge(year){
//   console.log(2020- year);
// }

// caculatorAge(1997);


// x=10;
// console.log(x);
// var x;


//  5. ADVANCED JAVASCRIPT OBJECT AND FUNCTION
//  Creating Objects Function Constructor
  
// var john={
//     name: 'John',
//     birthday: 1990,
//     job: 'teacher',
// };

// var Person= function(name, birthday, job){
//   this.name= name;
//   this.birthday= birthday;
//   this.job= job; 
// }

// Person.prototype.calculateAge= function(){
//   console.log(2016- this.birthday);
// }

// Person.prototype.lastname= 'Smith';

// var john= new Person('John', 1990, 'teacher');

// john.calculateAge();
// console.log('LastName',john.lastname);

//   // 7. Primitives- Object
// var age= 27;
// var obj={
//   name:'hai',
//   city:'New York',
// }

// function change(a, b){ 
//   a=30; 
//   console.log(a);
//   b.city='Sai Gon';
//   console.log(b);
// }
// change(age, obj); 

// console.log("TUOI",age);
// console.log("DIA DANH",obj.city);

  // 8. First Class Function Passing Functions as Argument

  // var years=[1990, 1965, 1037, 2005];

  // function arrayCalc(arr, fn){
  //   var  arrRes=[];
  //   for(var i=0; i< arr.length; i++){
  //     arrRes.push(fn(arr[i]));
  //   } 
  //   return arrRes;
  // }

  // function calculateAge(el){
  //   return 2016- el;
  // }

  // function isFullAge(el){
  //   return el>=18
  // }

  

  // var ages= arrayCalc(years, calculateAge); // here don't want call function, mean be called later by the arrayCalc function
  //                                               // => callback function 
  // console.log('ages', ages);

  // var isFullAges= arrayCalc(ages, isFullAge);
  // console.log('isFullAges', isFullAges);

  // 9. First Class Functions Functions Returning Function
  // Function return function 

//   function interViewQuestion(job){
//     if(job==='designed'){
//       return function(name){
//         console.log(name+ ' aaaaaa');
//       }
//     }else if(job==='teacher'){
//      return function(name){
//        console.log(name+ ' bbbbb');
//      }
//     }else{
//       return function(name){
//         console.log(name+ ' cccccc');
//       }
//     }
//   }

// var teacherQuestion= interViewQuestion('teacher');  
// teacherQuestion('Hai'); 

// interViewQuestion('desinged')('VU DUC HAI');

  //10. IMMEDIATELY INVOKED FUNCTION EXPRESSTION  
  
  //11. CLOSURES
//   function retirement(retirementAge){
//     a= 'years left until retirement.';
//     return function(yearofBirth){
//       var age= 2021- yearofBirth;
//       console.log((retirementAge- age)+a);
//     }
//   }

//   let retirementUS= retirement(66); 
//   let retimentGemeny= retirement(65);
//   let retimentIceland= retirement(64);

//  retirementUS(2021);
//  retirement(66)(2021);

  
// 12. Code Challengen

(function(){
  function Question(question, answers, correct){
    this.question= question;
    this.answers= answers;
    this.correct= correct;
  }
  
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnwers= function (ans){
    if(ans=== this.correct){
      console.log('Correct answers!');
    }else{
      console.log('Wrong answer, Try again');
    }
  }
  
  var q1= new Question('In JavaScript is language programming?', ['Yes', 'No'], 0);
  
  var q2= new Question('Who is winner of the award?', ['John', 'Micheal', 'Thomas'], 2);
  
  var q3= new Question('In C++ is language programming?', ['Yes', 'No'], 1);
  
  var q4= new Question('Who is singer?', ['John', 'Micheal', 'Thomas'], 3);
  
  var questions=[q1, q2, q3, q4];
  
  var n= Math.floor(Math.random()* questions.length);
  console.log(n); 
  
  questions[n].displayQuestion();
  
  var answer= parseInt(prompt('Please select the correct answer'));
  
  questions[n].checkAnwers(answer);
})();
