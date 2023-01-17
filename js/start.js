const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
let q = document.querySelector(".qBox");
let a = document.querySelector(".answerBox");
const endPoint = 12;

function addAnswer(answerText, qIdx) {
    let answer = document.createElement("button");
    answer.classList.add("answerList");
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.classList.add(".fadeIn");

    answer.addEventListener("click", () => {
        let children = document.querySelectorAll(".answerList");
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.7s";
            children[i].style.animation = "fadeOut 0.7s";
        }
        setTimeout(() => {
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = "none";
            }
            goNext(++qIdx);
        }, 450);
    });
}

function goNext(qIdx) {
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }
    // 진행상태바 구현하기
    let status = document.querySelector(".statusBar");
    status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}
