import {lottoQuantityTemplate} from "./templates.js"

export function LottoQuantity() {
    const $lottoStatus = document.querySelector(".lotto-status");

    this.setQuantity = ticketCount => {
        render(ticketCount);
    };

    const render = count => {
        $lottoStatus.innerHTML = lottoQuantityTemplate(count);
    }
}