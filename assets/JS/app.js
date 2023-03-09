




/*get the number of characters*/

function charLength() {
    const charLength = document.getElementById('length').value

    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
console.log();

document.getElementById('length').addEventListener('change', charLength);

let upp_check= document.getElementById("uppercase")
let low_check =document.getElementById("lowercase")
let num_check = document.getElementById("numbers")
let symbol_check =document.getElementById("symbols")
let result = document.getElementById("password__result")
let generate = document.getElementsByClassName("btn")
console.log(generate);
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
generate[0].addEventListener("click",e=>{
   
    let res =""

    if (upp_check.checked == true && low_check.checked== true && num_check.checked==false && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        let upp_low = uppercase + lowercase
        for(let i =0;i<charlength;i++){
            res+= upp_low.charAt(Math.random()*upp_low.length)
        }
        console.log(res);
        result.value = res;
    }
    if (upp_check.checked == true && low_check.checked==false && num_check.checked==false && symbol_check.checked == false){
        let  charlength = document.getElementById('length').value
        for(let i =0;i<charlength;i++){
            res+= uppercase.charAt(Math.random()*uppercase.length)
        }
        console.log(res);
        result.value = res;

    }

})


