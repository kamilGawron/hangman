const activateButtons =()=>{
    let buttons = document.getElementsByTagName('button');
    for (let x of buttons){
        x.disabled = false;
    }
}

export default activateButtons