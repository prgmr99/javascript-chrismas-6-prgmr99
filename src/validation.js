const isValidDate = (date) => {
  const dateNumber = Number(date);
  if (!Number.isFinite(dateNumber)) {
    throw new Error("[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.");
  }
  if (dateNumber < 1 && dateNumber > 31) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if (date !== date.trim()) {
    throw new Error("[ERROR] 공백이 포함되어 있습니다. 다시 입력해 주세요.");
  }
  if (date.trim() === "") {
    throw new Error("[ERROR] 공백만 입력할 수 없습니다. 다시 입력해 주세요.");
  }
};

export { isValidDate };
