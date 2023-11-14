import menuArr from "./menu";

const isValidDate = (date) => {
  const dateNumber = Number(date);
  if (!Number.isFinite(dateNumber)) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if (dateNumber < 1 && dateNumber > 31) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if (date !== date.trim()) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if (date.trim() === "") {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if (!Number.isInteger(dateNumber) && dateNumber > 0) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
};

const isValidMenu = (menus) => {
  const validMenu = menus.map((menu) => {
    const findMenu = menuArr.find((category) =>
      category.items.some((item) => item.name === menu[0])
    );
    // 메뉴에 없는 메뉴일 경우
    if (!findMenu) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
    // 개수는 1이상의 숫자(정수)가 아닐 경우
    if (!Number.isInteger(+menu[1])) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
    if (+menu[1] < 1) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  });

  // 메뉴형식이 예시와 다를 경우
  // 중복된 메뉴를 입력을 했을 경우
};

export { isValidDate, isValidMenu };
