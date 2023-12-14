/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector(".nav ul");
const visualImage = document.querySelector(".visual img");
let nickname = document.querySelector(".nickName");

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");
  if (!li) return;

  const index = li.dataset.index;
  const list = Array.from(navigation.children);
  list.forEach((item) => item.classList.remove("is-active"));

  setImage(index);
  setNameText(index);
  setBgColor(index);
  li.classList.add("is-active");
}

function setBgColor(index) {
  document.querySelector(
    "body"
  ).style.background = `linear-gradient(to bottom,${
    data[index - 1].color
  },#000)`;
}

function setImage(index) {
  visualImage.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  visualImage.alt = data[index - 1].alt;
}

function setNameText(index) {
  nickname.innerText = `${data[index - 1].name}`;
}

navigation.addEventListener("click", handleClick);
