import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView";

class App {
  async run() {
    await this.intro();
    await this.getDate();
  }

  async intro() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  }

  async getDate() {
    InputView.readDate().then((result) => {
      console.log(result);
    });
  }
}

export default App;
