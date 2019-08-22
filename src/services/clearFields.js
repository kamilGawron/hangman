const clearFields=()=>{
    let fields = document.querySelectorAll('div[sign]')
    for(let x of fields){
        x.childNodes[0].classList.remove("show");
        x.childNodes[0].classList.add("hide");
    }
}

export default clearFields;