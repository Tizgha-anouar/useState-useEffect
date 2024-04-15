let uni = (() => {
    let hooks = [];
    let index = 0;
    function useState(initVal) {
        const _index = index;
        const state = hooks[_index] || initVal;
        function changeState(newVal) {
            hooks[_index] = newVal;
        }
        index++;
        return [state, changeState]
    }
    function render(fnc) {
        index = 0;
        let c = fnc();
        c.render();
        return c;
    }
    function useEffect(callback, dependency) { 
        //if dependecy is empty the callback run once;
        
        let detectChange = true;
        let oldDep = hooks[index];
        if (oldDep) { 
            detectChange = dependency.some((item, i) => { return !Object.is(item, oldDep[i]) });
            //console.log(detectChange);
        }
        if (detectChange) { 
            callback();
        }
        hooks[index] = dependency;
        //index++;
    }

    function getIndex() { 
        return index;
    }
    return {render, useState, useEffect, hooks, getIndex};
})()

export default uni;