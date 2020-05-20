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

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
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

// phương thức
// document.getElementById(id)  // tìm id của thẻ
// document.getElementsByTagName(name) // tìm TẤT CẢ các thẻ thông qua tên thẻ
// document.getElementsByClassName(name) // tìm tất cả các thẻ thông qua CSS class

// phương thức array map() muốn chỉnh sửa trong 1 array=> viết thêm vào các element trong mảng
// var nameArray = [
//   {
//     id: 1,
//     name: "html",
//     coin: 100,
//   },
//   {
//     id: 2,
//     name: "java",
//     coin: 200,
//   },
//   {
//     id: 3,
//     name: "python",
//     coin: 300,
//   },
// ];

// function functionName(x) {
//   return {
//     id: x.id,
//     name: `ten ngon ngu: ${x.name}`,
//     coin: `Gia tien: ${x.coin}`,
//   };
// }
// var newArray = nameArray.map(functionName);
// console.log(newArray);

// phương thức Array reduce() khi muốn 1 phần tử duy nhất, sau khi tính toán or xử lí xong trên các phần tử array
// => tính toán số coin
// var nameArray = [
//   {
//     id: 1,
//     name: "java",
//     coin: 100,
//   },
//   {
//     id: 2,
//     name: "html",
//     coin: 200,
//   },
//   {
//     id: 3,
//     name: "ruby",
//     coin: 300,
//   },
// ];
// C1: dùng vòng lặp for, khi ta dùng vòng lặp reduce()=> giúp chúng ta có cách viết ngắn gọn hơn
// var totalCoin = 0;
// for (var i of nameArray) {
//   totalCoin += i.coin;
// }
// console.log(totalCoin);

// C2: dùng Array reduce() method
// var i = 0;
// function functionName(accumulator, currentValue, currentIndex, originArray) {
//   i++;

// console.table({
//   "Lượt chạy: ": i,
//   "Biến lưu trữ": accumulator,
//   "Biến hiện tại": currentValue,
//   Biến: currentValue.coin,
// });
//   return accumulator + currentValue.coin;
// }
// var totalCoin = nameArray.reduce(functionName, 0); //giá trị khởi tạo
// console.log(totalCoin);

// bài tập về hàm Array reduce()
// Flat- làm phẳng mảng
// var deptArrray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = deptArrray.reduce(function (flatOutput, deptItem) {
//   console.table({
//     "Biến lưu trữ": flatOutput,
//     "Biến hiện tại": deptItem,
//   });
//   return flatOutput.concat(deptItem);
// }, []);
// console.log(flatArray);

// String/Array include() method
// var courses = ["Java", "PHP", "C/C++"];
// // 3+-1=2
// console.log(courses.includes("C/C++", -1));

//Array Constructor
// let i = 0;
// const arr = new Array(5);
// arr.forEach(() => i++);
// console.log(i);
//arr = [1, 2, 4, 5, 6, 6];
// function getNumberArray(arr) {
//   let setVarriable = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (setVarriable < arr[i]) {
//       setVarriable = arr[i];
//     }
//   }
//   return setVarriable;
//   console.log(setVarriable);
// }
// arr = [1, 2, 4, 5, 6, 6];
// console.log(arr);
// function greatestNumberInArray(arr) {
//   let greatest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (greatest < arr[i]) {
//       greatest = arr[i];
//     }
//   }
//   return greatest;
// }
// fucntion tìm số lớn nhất trong mảng
// max([4, 12, 3, 8, 0, 22, 56]); //output is 56
// function max(arr) {
//   var max = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
//   // return max;
// }

//Polyfill?
//Object
// var myInfo = {
//   name: "hai",
//   age: 23,
//   address: "tphcm",
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(myInfo.getName());

// Object Constructor/ Object prototype
// Viết hoa chữ cái đầu của Object Constructor
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }
// User.prototype.className = "F8"; // từ khóa prototype có tác dụng thêm key-value ngoài thuộc tính vô hàm tạo
// var author = new User("Vũ", "Đức");
// var user = new User("Đức", "Hải");

// console.log(author);
// console.log(user);
// console.log(author.constructor === User);
// console.log(author.getName());
// console.log(user);

// FOR-IN LOOP dùng vòng lặp này để lấy ra key của đối tượng(OBJECT)
// OBJECT- FOR-IN
// var myInfo = {
//   name: "Vu Hai",
//   age: "18",
//   address: "to ky",
// };
// for (var key in myInfo) {
//   console.log(key); // in ra key trong object
//   console.log(myInfo[key]); // in ra value của key trong object
// }
// //ARRAY-FOR-IN
// var languages = ["Javascript", "Java", "C/C++"];
// for (var key in languages) {
//   console.log(languages[key]); // in ra value trong array
//   console.log(key); // in ra số thứ tự trong array
// }
// // String-FOR-IN
// var languages = "Javascript";
// for (var key in languages) {
//   console.log(languages[key]);
// }

// FOR-OF LOOP dùng vòng lặp để lấy ra key của chuỗi và mảng(k 'áp dụng' cho object, nếu là object sửa thay đổi 1 chút)
// var languages = ["Javascript", "C/C++", "Java"];
// for (var value of languages) {
//   console.log(value);
// }
// đổi với OBJECT
// var languages = {
//   name: "Vu Hai",
//   age: 18,
// };
// // lấy ra value
// for (var value of Object.values(languages)) {
//   console.log(value);
// }
// // lấy ra keys
// for (var value of Object.keys(languages)) {
//   console.log(value);
// }

//P1
//Callback? 1.là hàm, 2.được truyền qua đối số //gọi hàm qua hàm khác, hàm trong hàm
// function myFunction(param) {
//   //kiểm tra tham số truyền vào phải là hàm
//   if (typeof param === "function") {
//     param("truyền tham số");
//     console.log(param);
//   }
// }
// function myCallback(value) {
//   console.log("callback", value);
// }
// myFunction(myCallback);

//P2 khi làm việc với mảng
// var languages = ["Javascript", "Java", "C/C++", "PHP"];

// // in ra các phần tử trong mảng
// languages.map(function (param) {
//   //map là 1 hàm, đối số là function
//   console.log(param);
// });

// //nối thêm các phần tử dùng "map"
// var htmls = languages.map(function (param) {
//   return `<h2>${param}</h2>`;
// });
// console.log(htmls.join(""));

// // dùng map 2
// // do map2 chưa được định nghĩa sẵn, nên bắt buộc định nghĩa hàm
// var value = ["chuoi1", "chuoi2", "chuoi3", "chuoi4", "chuoi5"];
// // định nghĩa cho map2
// Array.prototype.map2 = function (callback) {
//   // console.log(this);
//   var arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callback(this[i], i);
//     console.log(result);
//   }
// };
// var htmls = value.map2(function (value) {
//   // console.log(value);
//   return `<h2>${value}</h2>`;
// });

// var arrayName = ["chuoi1", "chuoi2", "chuoi3", "chuoi7", "chuoi5"];
// //định nghĩa hàm map2
// Array.prototype.map2 = function (callback) {
//   var arrayLength = this.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var result = callback(this[i]);
//     console.log(result);
//   }
// };
// var htmls = arrayName.map2(function (arrayName) {
//   return `<h2>${arrayName}</h2>`;
// });

// CALLBACK();
// để là hàm callback cần: phải là 1 hàm, có đối số truyền vào
//P1
// function functionA(param) {
//   param("tặng quà hàng xóm");
// }
// function functionB(value) {
//   console.log("vợ đi", value);
// }
// functionA(functionB);

// //P2 làm việc với mảng
// var languages = ["javascript", "java", "python"];
// languages.map(function (x) {
//   console.log(x);
// });
// //thêm các phần tử
// var htmls = languages.map(function (param) {
//   return `<h2>${param}<\h2>`;
// });
// console.log(htmls.join(""));

// //P2 làm việc với mảng với map2
// var languages = ["javascript", "java", "python"];
// //định nghĩa map2
// Array.prototype.map2 = function (functionCallback) {
//   var arryLenghth = this.length;
//   for (var i = 0; i < arryLenghth; i++) {
//     var result = functionCallback(this[i]);
//     console.log(result);
//   }
// };
// var htmls = languages.map2(function (languages) {
//   return `<h2>${languages}</h2>`;
// });

// #Empty element of array?
//forEach, find, filter, some, every, reduce
//  #58 My forEach()
// var languages = ["Javascript", "Python", "PHP"];
// //forEach hoạt động như 1 vòng lặp for
// languages.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

// #DOM là #khi trang web được lại thì trình duyệt tạo ra 1DOM cho trang trang web
// Có mô hình dạng cây(gọi là htmlDOM)
// DOM có 3 thành phần: element, attribute, text

//HTML DOM => element method
//Các thành phần 1.Element 2.attribute 3.text
//1.Element là tag ở trong DOM
//2.attribute là thuộc tính ở trong thẻ mở

