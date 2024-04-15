//# level 3 useState
 import uni from "./../frameWork/useState.js";

let app = document.getElementById("app");
let countDiv = document.createElement("div");
let nameDiv = document.createElement("div");
let button = document.createElement("button");



function component() {
        let [age, changeAge] = uni.useState(30);
        let [name, setName] = uni.useState("univers");

        uni.useEffect(() => { console.log("you change the age") }, [age]);
    

        let component = {
            render: () => {
                app.appendChild(nameDiv)
                app.appendChild(countDiv);
                app.appendChild(button);

                countDiv.innerHTML = age;
                nameDiv.innerHTML = name;

                button.innerHTML = "click me";
            },
            click: () => {
                changeAge(age + 1)
            },
            rename: (newName) => {
                setName(newName)
            }
        }; 
        return component;
    }
let comp1 = uni.render(component);

// setInterval(() => { 
// comp1 = uni.render(component);
// }, 500)

button.addEventListener("click", (event) => { 
    comp1.click();
    comp1 = uni.render(component);
})

//console.log(uni.hooks, "=>" , uni.getIndex());















