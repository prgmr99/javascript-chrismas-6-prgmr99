import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView";
import OutputView from "./OutputView";
import menuArr from "./menu";
import { isValidDate, isValidMenu } from "./validation";

class App {
  #date;
  #menu;
  #menuSplit;
  #totalPrice;
  #isPresent;
  #isDdaySale;
  #isWeekDay;
  #isWeekend;
  #isSpecialDay;
  #totalBenefit;
  #isEvent;

  async run() {
    this.#isEvent = false;
    this.intro();
    await this.getDate();
    await this.getMenu();
    this.showDate();
    this.showMenu();
    this.#menuSplit = this.handleMenu();
    this.#totalPrice = this.calculateTotalPrice(this.#menuSplit);
    this.showTotalPrice(this.#totalPrice);
    this.checkPresent(this.#totalPrice);
    this.showPresent(this.#isPresent);
    this.#isDdaySale = this.checkDdaySale(this.#date);
    this.#isWeekDay = this.checkWeekdaySale(this.#date);
    this.#isWeekend = this.checkWeekendSale(this.#date);
    this.#isSpecialDay = this.checkSpecialSale(this.#date);

    this.showBenefits(
      this.#isDdaySale,
      this.#isWeekDay,
      this.#isWeekend,
      this.#isPresent,
      this.#isSpecialDay,
      this.#totalPrice,
      this.#isEvent
    );
    this.#totalBenefit = this.getTotalBenefit();
    this.showBadge(this.#totalBenefit);
  }

  intro() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  }

  async getDate() {
    try {
      this.#date = await InputView.readDate();
      isValidDate(this.#date);
      Console.print(this.#date);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getMenu() {
    try {
      this.#menu = await InputView.readMenu();
      const menus = this.handleMenu(this.#menu);
      isValidMenu(menus, this.#menu);
      noBeverageOnly(menus);
      Console.print(this.#menu);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculateTotalPrice(menu) {
    const priceArr = [];
    const menuName = menu.map((e) => {
      const foundItem = menuArr
        .flatMap((category) => category.items)
        .find((item) => item.name === e[0]);
      if (foundItem) {
        priceArr.push(foundItem.price * Number(e[1]));
      }
    });
    const sum = priceArr.reduce((acc, cur) => acc + cur, 0);

    if (sum >= 10000) {
      this.#isEvent = true;
    }
    return sum;
  }

  noBeverageOnly(menus) {
    const isBeverageOrder = order.every((item) => {
      const itemName = item[0];
      const category = menuArr.find((category) =>
        category.items.some((menuItem) => menuItem.name === itemName)
      );
      return category && category.category === "음료";
    });

    if (isBeverageOrder) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  getTotalBenefit() {
    if (this.#isPresent) {
      return (this.#totalBenefit =
        this.#isDdaySale +
        this.#isWeekDay +
        this.#isWeekend +
        this.#isSpecialDay +
        25000);
    }
    return (this.#totalBenefit =
      this.#isDdaySale +
      this.#isWeekDay +
      this.#isWeekend +
      this.#isSpecialDay);
  }

  handleMenu() {
    const splitMenu = this.#menu.split(",");
    const menu = splitMenu.map((e) => {
      return e.split("-");
    });
    return menu;
  }

  checkPresent(totalPrice) {
    this.#isPresent = false;
    if (totalPrice >= 120000) {
      this.#isPresent = true;
    }
    return this.#isPresent;
  }

  checkDdaySale(date) {
    let sale = 1000;
    if (date < 26) {
      sale += (date - 1) * 100;
    }
    if (date > 25) {
      sale = 0;
    }
    return sale;
  }

  checkWeekdaySale(date) {
    const menus = this.handleMenu();
    let saleArr = [];
    const weekday = [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ];
    if (weekday.includes(+date)) {
      const menuName = menus.map((e) => {
        const menuItem = menuArr.find((category) =>
          category.items.some((item) => item.name === e[0])
        );
        if (menuItem.category === "디저트") {
          saleArr.push(Number(e[1]) * 2023);
        }
      });
    }
    const sum = saleArr.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  checkWeekendSale(date) {
    const menus = this.handleMenu();
    let saleArr = [];
    const weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (weekend.includes(+date)) {
      const menuName = menus.map((e) => {
        saleArr = this.findingMenu(e, "메인");
      });
    }
    const sum = saleArr.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  checkSpecialSale(date) {
    let sum = 0;
    const specialDays = [3, 10, 17, 24, 25, 31];
    if (specialDays.includes(+date)) {
      sum = 1000;
    }
    return sum;
  }

  showDate() {
    OutputView.printDate(this.#date);
  }

  showMenu() {
    OutputView.printMenu(this.#menu);
  }

  showTotalPrice(totalPrice) {
    OutputView.printTotalPrice(totalPrice);
  }

  showPresent(isPresent) {
    OutputView.printPresent(isPresent);
  }

  showBenefits(
    isDdaySale,
    isWeekday,
    isWeekend,
    isPresent,
    isSpecialDay,
    totalPrice,
    isEvent
  ) {
    OutputView.printBenefits(
      isDdaySale,
      isWeekday,
      isWeekend,
      isPresent,
      isSpecialDay,
      totalPrice,
      isEvent
    );
  }

  showBadge(totalBenefits) {
    OutputView.printBadge(totalBenefits);
  }
}

export default App;
