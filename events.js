// Add onclick function

// Option 1: Add onclick function
// directly add onclik in HTML Element


// Option 2: Add onclick function
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// Option 3: Add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3.1: Add onclick function
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// Option 4:
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// Option 4.1:
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

// Option 4.2:
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})