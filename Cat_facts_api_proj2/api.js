const URL="https://cat-fact.herokuapp.com/facts";
const button=document.getElementById("btn");
const msg=document.getElementById("fact");

let facts=[];
let factIndex=0;

const getFacts=async ()=>{
    let response= await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[3].text);
    msg.innerText=data[3].text;
}
button.addEventListener("click",getFacts);
