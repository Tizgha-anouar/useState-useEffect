//# level 2 useState
 import uni from "./../frameWork/_useState.js";

let component = uni.render();
component.render();

//test 1
//if we use two useState one override the other
//we have a problem
//to use this code remove the second use state;

component.click();
component = uni.render();
component.render();

component.click();
component = uni.render();
component.render();


component.click();
component = uni.render();
component.render();
