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
  const menuCollect = [];
  const menuSet = [...new Set(menuCollect)];
  const validMenu = menus.map((menu) => {
    const findMenu = menuArr.find((category) =>
      category.items.some((item) => item.name === menu[0])
    );
    if (findMenu) {
      menuCollect.push(menu[0]);
    }
    if (!findMenu) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
    if (!Number.isInteger(+menu[1]) || +menu[1] < 1) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  });
  if (menuCollect !== menuSet) {
    throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  }
  // 메뉴형식이 예시와 다를 경우
};

export { isValidDate, isValidMenu };
