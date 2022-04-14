const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if (fieldValue.value == "") {
        alert("분야가 입력되지 않았습니다.");
        fieldValue.focus();
        return false;
    } else if (timeValue_int.value == "") {
        alert("시간이 입력되지 않았습니다.");
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert("잘못된 값 입니다. 24이하로 입력해 주세요!")
        return false;
    }
    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function() {
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
        loading.style.display = 'none';
        result.style.display = 'flex';
    }, 1800); 

    // loading.style.display = 'none';
    // result.style.display = 'flex';
    // fieldResult.innerText = fieldValue.value;
    // timeResult.innerText = parseInt((10000/timeValue_int), 10);
    // ↑같이 하게되면 처리속도가 느린경우에 아무것도 없는 결과값이 노출이 될수있으므로 순서를 바뀔수있어서 이와 같이 안함.
}

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
}

function copyUrl(){
    let url = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);