import {lottoTemplate} from "./templates.js"
import {LOTTO} from "./constants.js";

function Lottos() {
    const $lottoList = document.querySelector("#lottos");
    const $lottoQuantity = document.querySelector("#lotto-quantity");

    this.setLottos = ticketCount => {
        $lottoList.innerHTML = "";
        for (let i = 0; i < ticketCount; i++) {
            render(generateLotto());
        }
        $lottoQuantity.innerText = ticketCount;
    };

    const generateLotto = () => {
        const lotto = [];
        while (lotto.length !== LOTTO.LENGTH) {
            const randomNumber = Math.floor(Math.random() * LOTTO.MAX_NUMBER + LOTTO.MIN_NUMBER);
            if (!lotto.includes(randomNumber)) {
                lotto.push(randomNumber);
            }
        }
        return lotto;
    };

    const render = lotto => {
        const template = lottoTemplate(lotto);
        $lottoList.insertAdjacentHTML("beforeend", template);
    }

}
export default Lottos;