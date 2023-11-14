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

  printBenefit() {
    Console.print("<혜택 내역>");
  },
};

export default OutputView;
