let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let h1 = document.getElementById("h1")

let count = 0;

increment.addEventListener("click",increments)
decrement.addEventListener("click",decrements)
reset.addEventListener("click",resets)

function increments(){
    if(count >= 10){
        alert("allows only 10numbers")
        return;
    }
    count++
    h1.innerText = count;

}
function decrements(){
    if(count <= 0) return
    count--
    h1.innerText = count;
}

function resets(){
    count = 0;
    h1.innerText = count;
}
