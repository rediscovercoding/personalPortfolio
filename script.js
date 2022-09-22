console.log('Hello')
let body= document.getElementById('bodyId');
let button= document.getElementById('buttonTheme')
function themeChange(){
    console.log(body)
    if(button.innerHTML === 'Dark'){
        button.innerHTML="Light"
    }
    else if (button.innerHTML === 'Light'){
        button.innerHTML="Dark"
    }
    
    body.classList.toggle('bodyClassDark');
    body.classList.toggle('bodyClassLight');
}