const isValidDate = (date) => {
  const dateNumber = Number(date);
  if (!Number.isFinite(dateNumber)) {
    throw new Error("[ERROR] 숫자만 입력해주세요.");
  }
  if (dateNumber < 1 && dateNumber > 31) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
};

export { isValidDate };
