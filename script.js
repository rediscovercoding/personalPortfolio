console.log('Hello')
let body= document.getElementById('bodyId');
let button= document.getElementById('buttonTheme')
function themeChange(){
    console.log(body)
    if(button.innerHTML === 'Dark Theme'){
        button.innerHTML="Light Theme"
    }
    else if (button.innerHTML === 'Light Theme'){
        button.innerHTML="Dark Theme"
    }
    
    body.classList.toggle('bodyClassDark');
    body.classList.toggle('bodyClassLight');
}


let contactContainer= document.getElementById('contactContainer')
function closePopUp(){
    contactContainer.style.display= 'none';
}

function contactPopUp(){
    contactContainer.style.display= 'grid';
}