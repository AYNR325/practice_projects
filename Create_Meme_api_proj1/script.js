const Createbutton=document.getElementById("create-btn");
const Deletebutton=document.getElementById("delete-btn");
const memeContainer=document.getElementById("memeImg");
const URL="https://api.imgflip.com/get_memes";
let memes=[];
let currentMemeIndex=0;

const getMeme=async ()=>{
    let response=await fetch(URL);
    console.log(response);
    let memeData= await response.json();
    memes=memeData.data.memes;
}

const createMeme=()=>{
    if(memes.length===0){
        alert("no memes available!")
        return;
    }
    // if (memeContainer.hasChildNodes()) {
    //     alert("A meme is already displayed! Delete it first.");
    //     return;
    // }
    memeContainer.innerHTML="";
    
    const meme=memes[currentMemeIndex];
    currentMemeIndex++;
    const memeImage = document.createElement("img");
    memeImage.src = meme.url;
    memeImage.alt = meme.name;
    memeContainer.appendChild(memeImage);
}

// const deleteMeme=()=>{
//     if(memeContainer.hasChildNodes()){
//         memeContainer.innerHTML="";
//     }else{
//         alert("No meme to delete!")
//     }
// }

Createbutton.addEventListener("click",createMeme);
// Deletebutton.addEventListener("click",deleteMeme);

getMeme();
