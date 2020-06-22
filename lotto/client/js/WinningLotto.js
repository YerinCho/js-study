import {winningLottoTemplate} from "./templates.js"

export function WinningLotto() {
    const $winningLotto = document.querySelector("#lotto-result");

    this.setWinningLotto = winningLotto => {
        render(winningLotto);
    };

    const render = winningLotto => {
        $winningLotto.innerHTML = winningLottoTemplate(winningLotto);
    }
}