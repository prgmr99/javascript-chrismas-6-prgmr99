import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(menu) {
    Console.print("<주문 메뉴>");
    const test = menu.split(",");
    test.map((e) => {
      Console.print(e);
    });
  },

  printDate(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printTotalPrice(totalPrice) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(`${totalPrice}원`);
  },

  printPresent(isPresent) {
    let message = "없음";
    Console.print("<증정 메뉴>");
    if (isPresent) {
      message = "샴페인 1개";
    }
    Console.print(`${message}`);
  },

  printBenefits(
    isDdaySale,
    isWeekday,
    isWeekend,
    isPresent,
    isSpecialDay,
    totalPrice,
    isEvent
  ) {
    let totalBenefits = 0;
    Console.print("<혜택 내역>");
    const ddaySale = printDdaySale(isDdaySale, isEvent);
    const weekdaySale = printWeekdaySale(isWeekday, isEvent);
    const weekendSale = printWeekendSale(isWeekend, isEvent);
    const specialSale = printSpecialSale(isSpecialDay, isEvent);
    const presentSale = printPresentSale(isPresent);
    totalBenefits =
      ddaySale + weekdaySale + weekendSale + specialSale + presentSale;
    if (
      isDdaySale === 0 &&
      isWeekday === 0 &&
      isWeekend === 0 &&
      isSpecialDay === 0 &&
      !isPresent
    ) {
      Console.print("없음\n");
    } else if (!isEvent) {
      Console.print("없음\n");
    }
    printTotalBenefits(totalPrice, totalBenefits);
  },

  printBadge(totalBenefits) {
    Console.print("<12월 이벤트 배지>");
    let badge = "없음";
    if (totalBenefits >= 5000) {
      badge = "별";
    }
    if (totalBenefits >= 10000) {
      badge = "트리";
    }
    if (totalBenefits >= 20000) {
      badge = "산타";
    }
    Console.print(`${badge}`);
  },
};

const printTotalBenefits = (totalPrice, totalBenefits) => {
  Console.print("<총혜택 금액>");
  if (totalBenefits === 0) {
    Console.print(`${totalBenefits}원\n`);
  } else if (totalBenefits > 0) {
    Console.print(`-${totalBenefits}원\n`);
  }

  Console.print("<할인 후 예상 결제 금액>");
  if (totalPrice >= 120000) {
    Console.print(`${totalPrice - totalBenefits + 25000}원\n`);
  } else if (totalPrice < 120000) {
    Console.print(`${totalPrice - totalBenefits}원\n`);
  }
};

const printDdaySale = (isDdaySale, isEvent) => {
  if (isDdaySale > 0 && isEvent) {
    Console.print(`크리스마스 디데이 할인: -${isDdaySale}원`);
    return isDdaySale;
  }
  return 0;
};

const printWeekdaySale = (isWeekday, isEvent) => {
  if (isWeekday > 0 && isEvent) {
    Console.print(`평일 할인: -${isWeekday}원`);
    return isWeekday;
  }
  return 0;
};

const printWeekendSale = (isWeekend, isEvent) => {
  if (isWeekend > 0 && isEvent) {
    Console.print(`주말 할인: -${isWeekend}원`);
    return isWeekend;
  }
  return 0;
};

const printSpecialSale = (isSpecialDay, isEvent) => {
  if (isSpecialDay > 0 && isEvent) {
    Console.print(`특별 할인: -${isSpecialDay}원`);
    return isSpecialDay;
  }
  return 0;
};

const printPresentSale = (isPresent) => {
  if (isPresent) {
    Console.print("증정 이벤트: -25,000원");
    return 25000;
  }
  return 0;
};

export default OutputView;
