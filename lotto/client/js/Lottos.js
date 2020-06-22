import {lottoTemplate} from "./templates.js"
import {LOTTO} from "./constants.js";

export function Lottos() {
    const $lottoList = document.querySelector("#lottos");

    this.setLottos = ticketCount => {
        $lottoList.innerHTML = "";
        for (let i = 0; i < ticketCount; i++) {
            render(generateLotto());
        }
    };

    const generateLotto = () => {
        let lotto = [];
        while (lotto.length !== LOTTO.LENGTH) {
            let randomNumber = Math.floor(Math.random() * LOTTO.MAX_NUMBER + LOTTO.MIN_NUMBER);
            if (!lotto.includes(randomNumber)) {
                lotto.push(randomNumber);
            }
        }
        return lotto;
    };

    const render = lotto => {
        const template = lottoTemplate(lotto);
        $lottoList.insertAdjacentHTML("beforeEnd", template);
    }

}