import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView";
import OutputView from "./OutputView";
import menuArr from "./menu";

class App {
  #date;
  #menu;
  #menuSplit;
  #totalPrice;
  #isPresent;

  async run() {
    await this.intro();
    await this.getDate();
    await this.getMenu();
    this.showDate();
    this.showMenu();
    this.#menuSplit = this.handleMenu();
    this.#totalPrice = this.calculatePrice(this.#menuSplit);
    this.showTotalPrice(this.#totalPrice);
    this.checkPresent(this.#totalPrice);
    this.showPresent(this.#isPresent);
  }

  async intro() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  }

  async getDate() {
    this.#date = await InputView.readDate();
    Console.print(this.#date);
  }

  async getMenu() {
    this.#menu = await InputView.readMenu();
    Console.print(this.#menu);
  }

  calculatePrice(menu) {
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
    return sum;
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
}

export default App;
