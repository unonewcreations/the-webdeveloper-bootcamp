const btn  = document.querySelector('#v2');

btn.onclick = function() {
    console.log("you clicked me!")
    console.log("you clicked me again!")
}

function scream() {
    console.log('AHHHHH')
    console.log('STOP TOUCHIN ME!!')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clcked me again!!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function(){
    alert('you are a clicker!')
});

function twist() {
    console.log("TWIST")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

//* onclick, one callback function at a time. 
// tasButton.onclick = twist;
// tasButton.onclick = shout;

//* addeventlistener, multiple functions at same time.
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)