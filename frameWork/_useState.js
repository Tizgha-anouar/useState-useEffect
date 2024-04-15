let uni = (() => {
    let value;
    function useState(initVal) {
        const state = value || initVal ;
        function changeState(newVal) { 
            //value = newVal ?? value;
            value = newVal;
            //console.log(value);
            return value;

}
        return [state, changeState]
    }
    function render() { 
        return component();
    }
    function component(name_ = "guest") {
        let [age, changeAge] = useState(30);
        let [name, changeName] = useState(name_);

        let component = {
            render: () => {
                console.log(age);
                console.log(name);
            },
            click: () => { changeAge((age + 1)) },
            rename: (newName) => { changeName(newName)}
        }; 
        return component;
    }


    return {render};
})()

export default uni;