// level 1 useState
import useState_ from "./../frameWork/useState_.js";
let [name, changeName] = useState_("univers");
console.log(name());
changeName("univers00");
console.log(name());