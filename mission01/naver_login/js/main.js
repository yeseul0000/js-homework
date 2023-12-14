const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const nodes = document.querySelectorAll('input[class^="user"]');

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

$("#userEmail").on(
  "propertychange change paste input",
  function handleInvalidEmail() {
    let emailInput = $("#userEmail").val();
    nodes.forEach((node) => {
      if (!emailReg(emailInput)) node.classList.add("is--invalid");
      else if (emailReg(emailInput)) node.classList.remove("is--invalid");
    });
  }
);

$("#userPassword").on(
  "propertychange change paste input",
  function handleValidPassword() {
    let passwordInput = $("#userPassword").val();
    nodes.forEach((node) => {
      if (!pwReg(passwordInput)) node.classList.add("is--invalid");
      else if (pwReg(passwordInput)) node.classList.remove("is--invalid");
    });
  }
);

// function authenticateUser(username, password) {
//   if (authenticateUserId() && authenticateUserPassword())
//     window.location.href = "welcome.html";
//   else {
//     alert("아이디 혹은 비밀번호가 없거나 잘못됐습니다.");
//   }
// }

// function authenticateUserId(usernameInput) {}

// function authenticateUserPassword(userPasswordInput) {}
