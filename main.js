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


// function User(firstName, lastName,avatar){

//   this.firstName=firstName,
//   this.lastName=lastName,
//   this.avatar=avatar;
  
//   this.getName=function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// var author=new User('Hai','Vu');
// var user=new User('Vu','Hai');

// console.log(author.getName());
// console.log(user);

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


// #38- Object prototype- Basic
//  prototype là gì?
//  được sử dụng khi nào?

//Viet 1 function 
// function User(firstName, lastName,avatar)
// {
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.avatar=avatar;
//   this.getName=function(){
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// User.prototype.className='F8';
// console.log(user.className); 

// // #39- Doi tuong Date 
// var date= new Date();

// var year= date.getFullYear();
// var month=date.getMonth();
// var day=date.getDate(); 

// console.log(`${day}/${month}/${year}`)

// //#40- Toan tu IF-ELSE
// var date=1;

// if(date==1)
// {
//   console.log('so 1')
// }

// #41- Tenary operator

// var course ={ 
//   name:'Javascript',
//   coin: 0
// }
// if(course.coin>0)
// {
//   console.log(`${course.coin} Coins`);
// }
// else
// {
//   console.log('Free');
// }
// //-> chuyen sang dung tenary operator
// var kqua=course.coin>0 ? `${course.coin} Coins`: 'Free'
// console.log(kqua);

// #42- For loop

// var myArray=[
//   'Javascript',
//   'PHP',
//   'Java',
//   'Dart'
// ];
 
// var arrayLength=myArray.length;

// for( var i=0;i<arrayLength;i++)
// {
//    console.log(myArray[i]);
// }

// #43 - For of
  // 1 Array
// var languages=[
//   'Javascript',
//   'PHP',
//   'Java'
// ];

// for(var value of languages){
//   console.log(value);
// }

// vong for loop 
// var languages='12345678';
// for(var value of languages){
//   console.log(value);
// }
//  // 1 OBJECT
// var myInfo={
//   name:'Hai Duc',
//   age:18
// }
// console.log(Object.values(myInfo));

  // # bai 44 vong for for/in loop
  //1 object
//   var myInfo={
//     name: 'vu',
//     age:23,
//     address:'tphcm'
//   };
//   for(var key in myInfo)
//   {
//     console.log(myInfo[key]);
//   }
//    //1 array
//    var myInfo=[
//      'Javascript',
//      'Java',
//      'PHP'
//    ]
//    for(var key in myInfo){
//      console.log(key)
//    }
//    // # bai 45

//   //  arrow function
// function sayhello(name){
//   console.log("Hello",name);
// }

// sayhello=name=>console.log("Hello",name);
// var languages=[
//   'C/C++',
//   'Javascript',
//   'PHP'
// ];
// console.log(languages.push('Java'));
// console.log(languages);

// // ham test function
// var myFunction=function(){
//   alert('cc');
// }
// // Object types
// var myObject={
//   name:'hai',
//   age:'23',
//   myFunction:function(){

//   }
// };
// // array
// var myArray=[
//   'javascript',
//   'java',
//   'c/c++'
// ];
// console.log(myArray);

// // thực thi với hàm
//  function showDialong(){ // hàm tự định nghĩa nó sẽ k thực thi nếu k gọi
//    //code
//    alert('cc');
//  }
// showDialong();  // lệnh gọi hàm

// function writeLog(mess){
//   console.log(mess);
// }
// writeLog('cc');

// function writeLog(mess){
//   var myString='';
//   for(var param of arguments){
//     myString+=`{param}- `
//   }
//   console.log(myString);
// }
// writeLog('Log1', 'Log2','Log3');

// hàm callback?=? gọi 1 hàm trong 1 hàm
// làm function có hàm số truyền vào
// khi gọi hàm khác
// 1. là hàm 
// 2. được truyền QUA đối số

// function myFunction(parram){
//   param('truyền dữ liệu vào');
// }
// myFunction('123');

// function myCallback(value){
//   console.log('Value: ',value);
// }
// myFunction(myCallback);

// Tham trị, tham chiếu trong js?
// Các khái niệm: stored by value, stored by reference, pass by value, pass by reference
// **tham trị=> lưu giá trị trực tiếp khi nhận được
// let a=5;
// let b=a;
// a=10;
// console.log(b);
// // **tham biến=> lưu lại địa chỉ
// const a={name:'hau'};
// const b=a;
// a.name='Po';
// console.log(b.name);
// truyền tham số dạng tham trị
// function thambien(number){
//   number =10;
// }
// const a=5;
// thambien(a);
// console.log(a);