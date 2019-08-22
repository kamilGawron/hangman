const changeTheme = () =>{
    const body = document.getElementsByTagName('body')[0];
    body.className=body.className=="body-light"? "body-dark" : "body-light";
}

export default changeTheme;