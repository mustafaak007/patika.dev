let taskDom = document.querySelector("#task");
let ulDom = document.querySelector("#list");
let toastMessage;
function newElement() {
    if (taskDom.value.trim()!=="") {
        let liDom = document.createElement("li");

        let success = "success";
        liDom.innerHTML = taskDom.value;
        taskDom.value = "";
        ulDom.append(liDom);
        $('.success').toast('show')

    } else {
        $('.error').toast('show')
    }
}

