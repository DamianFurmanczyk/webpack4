require("babel-register");
// import "./main.css" import "./style.sass"
import "./style.styl"
import haha from "./index.pug"
// require("./index.html");
console.log(haha);
console.log("Aaa");

let a = 1,
  b = 3;

[a, b] = [b, a]

let af = async() => {

  await console.log(a, b);
}

// debugger;

af();