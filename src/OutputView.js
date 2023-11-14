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

  printBenefits(isDdaySale, isWeekday, isWeekend, isPresent, totalPrice) {
    let totalBenefits = 0;
    Console.print("<혜택 내역>");

    if (isDdaySale > 0) {
      totalBenefits += isDdaySale;
      Console.print(`크리스마스 디데이 할인: -${isDdaySale}원`);
    }
    if (isWeekday > 0) {
      totalBenefits += isWeekday;
      Console.print(`평일 할인: -${isWeekday}원`);
    }
    if (isWeekend > 0) {
      totalBenefits += isWeekend;
      Console.print(`주말 할인: -${isWeekend}원`);
    }
    if (isPresent) {
      totalBenefits += 25000;
      Console.print("증정 이벤트: -25,000원");
    } else if (
      isDdaySale === 0 &&
      isWeekday === 0 &&
      isWeekend === 0 &&
      !isPresent
    ) {
      Console.print("없음\n");
    }

    Console.print("<총혜택 금액>");
    Console.print(`-${totalBenefits}원\n`);

    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${totalPrice - totalBenefits + 25000}원\n`);
  },
};

export default OutputView;
