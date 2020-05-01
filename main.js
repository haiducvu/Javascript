// // Number type
// var a=5;
// var b=1;

// // string type
// var fullName='Hai Vu';

// // boolean type
//  var isSucess=true;

//  // Underfined type
//  var age;
 
//  // Symbol type
//  var id=Symbol();

// // Function type
// var myFunction  =function(){
//     alert("Canh bao");
// }
// myFunction();

// // Object type
// var myObject={
//     name:"vu duc hai",
//     age:18,
//     address:"TPHCM",
//     myFunction: function(){

//     }
// };

// // Array type
// var myArray=[
//     'asdas',
//     'sadasd',
// ];

// // Chuoi
// var fullNamee="vu duc hai";
// //console.log(fullNamee.length);
// var firstName="Hai Duc Vu";
// console.log(`Toi la: ${firstName} ${fullNamee}`);

//Lam viec voi chuoi
//var fullName="vu duc hai";
//console.log(fullName.lastIndexOf('h'));
// Cut string
//console.log(fullName.slice(3,4));

// var languages=[
//     'JavaScript',
//     'PHP',
//     'Ruby'
// ];
// console.log(languages.pop())
// console.log(languages)
// //pop, shift


// function in javascript
// function showDialong(){
//     alert('ham');
// }
// showDialong();

//  ** Bai 26
//tham so trong ham
// writelog('pt1','pt2','pt3');
// function writelog()
//     {
//        var myString=' ';
//         for(var param of arguments)
//             {
//                 myString += `${param} - `
//                 // console.log(param);
//             }
//              console.log(myString);
//     }

//  ** Bai 27
// Return trong function
// function sum(a,b)
// {
//     return a.toString() +b.toString();
// }
// var result=sum(1,4);
// console.log(result);
// alert('Xin Chao');
// let name =prompt("What is your name");

// **Bai 28 
  //khi dat ham trung ten
  //khai bao bien trong ham
  //dinh nghia ham trong ham

// **Bai 29 Cac loai function
    // 1.Declaration  function
    // 2.Expression function
    // 3. Arrow function
    
    //showMessage();
  // function showMessage(){
  //   console.log('chay function 1');
  // }
  
  // var showMessage2=function(){
  //   console.log('chay function 2');
  // }

  // ==> Decraration cho phep goi truoc khi dinh nghia
  // ==> Expression  khong cho phep goi truoc khi dinh nghia

                                                                  //*Bai 30
  //lam viec voi mang(P2)
        /*
        Array methods:
          1forEach()
          2every()
          3some()
          4find()
          5filter()
          6map()
          7reduce()
        */
  // var courses=[
  //   {
  //     id:1,
  //     name:'Javascripts',
  //     coin:250
  //   },  
  //   {
  //     id:2,
  //     name:'Javascripts',
  //     coin:300
  //   }
  // ];

  // //phuong thuc forEach
  // // courses.forEach(function(courses,index){    //callback
  // //   console.log(courses); 
  // // }); 
  // //phuong thuc every
  // var isFree = courses.every(function(courses,index){
  //   return courses.name === 'Javascripts';
  // })
  // console.log(isFree);



                                                              // *bai 31 Array map() method
// var courses=[
//   {
//     id:1,
//     name:'Javascripts',
//     coin:250
    
//   },  
//   {
//     id:2,
//     name:'html, css',
//     coin:300
//   }
// ];
// function coursesHandler(courses){
//   //console.log(course);
//   return {
//     id: courses.id,
//     name:`Khoa hoc: ${courses.name}`,
//     coin: courses.coin,
//     coinText:`Gia: ${courses.coin}`
//   };
//   }
// var newCourses =courses.map(coursesHandler);
// console.log(newCourses);


                                              //* Bai 32 Array reduce() method
// var courses=[
//   {
//     id:1,
//     name:'Javascripts',
//     coin:250
    
//   },  
//   {
//     id:2,
//     name:'html, css',
//     coin:300
//   }
// ];
// var i=0;
// function coinHandle(accumulator, currentValue,currentIndex, originArray) {
//   i++;
  //console.log(i,accumulator);

  // console.table({
  //   'luot chay: ':i,
  //   'bien tich tru: ':accumulator
  // });  
  // console.log(currentValue);
//   return accumulator+currentValue.coin;
// }
// var totalCoin=courses.reduce(coinHandle,0);
// console.log(totalCoin); 
// vong lap for
// var totalCoin=0;

// for(var course of courses)
// {
//   totalCoin+=course.coin;
// }
// console.log(totalCoin);

                                  //* Bai 36 Object trong JavaScript
// var myInfo={
//   name: 'duc hai',
//   age:'18',
//   address:'to ky'
// }
// console.log(myInfo['age']);


function User(firstName, lastName,avatar){

  this.firstName=firstName,
  this.lastName=lastName,
  this.avatar=avatar;
  
  this.getName=function(){
    return `${this.firstName} ${this.lastName}`
  }
}

var author=new User('Hai','Vu');
var user=new User('Vu','Hai');

console.log(author.getName());
console.log(user);

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
