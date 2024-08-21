// about DOM

// let paras = document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);

// let element = document.querySelector("#heading");
// console.dir(element);

// document.getElementById("heading").style.backgroundColor = "green";

// document.body.childNodes[5].innerText = "helllo";

// let h2 = document.querySelector("h2");

// console.log(`before change : ${h2.innerHTML}`);

// h2.innerText += " I am learning JS";

// console.log(`after change : ${h2.innerHTML}`);

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";

// we can also do with loops 
// let idx = 1;
// for (const div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++
// };

// let div = document.querySelector("div");
// console.log(div)

// let id = div.getAttribute("id");
// console.log(id);

// let jsName = div.getAttribute("class");
// console.log(jsName);

// we can also do like
// let head = document.querySelector("h1");
// console.log(head.getAttribute("id"));

// set attribute method
// let heading = document.querySelector("h1");
// console.log(heading.setAttribute("id","new heading"));

// add button with js
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!"
// console.log(newbtn);

// let div = document.querySelector("ul");
// div.append(newbtn);

// let hading = document.createElement("h1");
// hading.innerText = "hello world";
// let add = document.querySelector("body");
// add.prepend(hading);

let element = document.querySelector("h2");
element.remove();

// create a new button element. give it text "click me" background color of red and text of color white.

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";
//  let add = document.querySelector("body");
//  add.prepend(newbtn);

// Qs no 2
// let para = document.querySelector("p");
// console.log(para.classList.add("newClass"));

// start events chapter





























