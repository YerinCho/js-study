import {lottoTemplate} from "./templates.js"

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
        while (lotto.length !== 6) {
            let randomNumber = Math.floor(Math.random() * 45 + 1);
            if (!lotto.includes(randomNumber)) {
                lotto.push(randomNumber);
            }
        }
        return lotto;
    };

    const render = lotto => {
        console.log(lotto);
        const template = lottoTemplate(lotto);
        $lottoList.insertAdjacentHTML("beforeEnd", template);
    }

}