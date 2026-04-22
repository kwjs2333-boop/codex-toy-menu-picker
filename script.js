const DEFAULT_MENU = "김밥, 라면, 비빔밥, 돈까스, 떡볶이, 초밥";

const menuInput = document.getElementById("menuInput");
const pickButton = document.getElementById("pickButton");
const resetButton = document.getElementById("resetButton");
const result = document.getElementById("result");

// 쉼표로 입력한 메뉴 문자열을 배열로 변환
function getMenuItems(text) {
  return text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function pickRandomMenu() {
  const menus = getMenuItems(menuInput.value);

  if (menus.length === 0) {
    result.textContent = "메뉴를 한 개 이상 입력해 주세요.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * menus.length);
  result.textContent = `오늘의 추천은 ${menus[randomIndex]}!`;
}

function resetMenus() {
  menuInput.value = DEFAULT_MENU;
  result.textContent = "기본 메뉴로 초기화했어요. 다시 추천 받아보세요!";
}

pickButton.addEventListener("click", pickRandomMenu);
resetButton.addEventListener("click", resetMenus);
