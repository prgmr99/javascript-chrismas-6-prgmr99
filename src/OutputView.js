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

  printBenefits(isDdaySale) {
    Console.print("<혜택 내역>");
    const weekday = [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ];
    const weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (isDdaySale > 0) {
      Console.print(`크리스마스 디데이 할인: -${isDdaySale}원`);
    }
  },
};

export default OutputView;
