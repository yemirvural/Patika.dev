const taskInput = document.querySelector(".container");
const taskList = document.querySelector("#list");
const popeyes = document.querySelector('#liveToast');
let inputText = document.getElementById("task");

function newElement(){
    let inputValue = document.getElementById("task").value;
    if(inputValue){
        let li = `<li onclick="completed()" class="">${inputValue}</li>`
        taskList.innerHTML += li;
        $('#liveToast').toast('show');
        inputText.value = "";
    }
    else{
        $('#liveToastError').toast('show');
    }
}

function completed(){
    console.log(this)
}

