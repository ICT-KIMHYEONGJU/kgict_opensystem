
// 데이터 GET 요청 및 form 값 입력
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        document.getElementById("username").value   = data.id;
        document.getElementById("title").value      = data.title;
        document.getElementById("content").value    = data.body;
    });


// 폼 제출 이벤트
const form = document.getElementById("boardForm");
form.addEventListener("submit", function (e) {
    
    //새로 고침 방지
    e.preventDefault();

    // 폼 데이터 가져오기
    const username        = document.getElementById("username").value.trim();
    const title           = document.getElementById("title").value.trim();
    const content         = document.getElementById("content").value.trim();
    const password        = document.getElementById("password").value.trim();
    const passwordConfirm = document.getElementById("passwordConfirm").value.trim();

    //유효성 검사
    isValid(username, title, content, password, passwordConfirm);

});


//유효성 검사
function isValid(username, title, content, password, passwordConfirm){

    const usernameRegex   = /^[ㄱ-ㅎ가-힣]+$/;                          // 작성자명 유효성 검사(한글만 가능)
    const passwordRegex   = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/;      // 비밀번호 유효성 검사(6~12자, 영문+숫자 조합)
    const passwordMsg     = document.getElementById("passwordMsg");    // 비밀번호 오류 시 작성할 메시지

    if (!username || !usernameRegex.test(username)) {
        alert("작성자명이 유효하지 않습니다.");
        return;
    }

    if (!title) {
        alert("제목을 작성해주세요");
        return;
    }

    if (content.length < 20) {
        alert("내용은 최소 20자 이상 작성해야 합니다.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("비밀번호는 영문과 숫자를 포함한 6~12자리여야 합니다.");
        return;
    }

    if (password !== passwordConfirm) {
        passwordMsg.style.display = "block";
        passwordMsg.innerText     = "비밀번호가 일치하지 않습니다.";
        return;
    } else { 
        passwordMsg.style.display = "none";
    }

    alert("게시글 작성이 완료됐습니다.");

}