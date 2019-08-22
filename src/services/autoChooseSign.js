import checkSign from './checkSign'

const autoChooseSign = () =>{
    let avaiableButtonsArray = [...document.querySelectorAll("#buttons div>button:not([disabled])")]
    let autoChooseIndex = Math.floor(Math.random()*avaiableButtonsArray.length);
    avaiableButtonsArray[autoChooseIndex].click();
}

export default autoChooseSign;