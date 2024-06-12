const inp = document.getElementById("input-box")
const lstContainer = document.getElementById("list-container")

function addTask(){
    if (inp.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inp.value;
        lstContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inp.value = "";
    saveData()
}


// const btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     if(inp.value === ''){
//         alert("You must write something!");
    
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = inp.value;
//         lstContainer.appendChild(li);
//     }

// });


lstContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",lstContainer.innerHTML);
}

function showData(){
    lstContainer.innerHTML = localStorage.getItem("data");
}

showData()