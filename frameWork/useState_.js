const useState_ = (initVal)=>{ 
    let value = initVal;
    let state = ()=> value;
    let changeState = (newVal = null)=>{ 
        value = newVal ?? value;
        return value;
    }
    return [state, changeState];
}

export default useState_;