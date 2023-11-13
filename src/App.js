import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView";

class App {
  #date;
  #menu;

  async run() {
    await this.intro();
    await this.getDate();
    await this.getMenu();
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
}

export default App;
