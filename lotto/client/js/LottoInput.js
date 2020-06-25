import {EVENT_TYPE, LOTTO} from "./constants.js";

function LottoInput({onAdd}) {
    const $lottoRound = document.querySelector("#input-lotto-round");
    const $lottoCash = document.querySelector("#input-cash-amount");
    const $lottoBuyButton = document.querySelector("#buy-button");
    $lottoBuyButton.addEventListener(EVENT_TYPE.CLICK, event => this.inputLotto(event));

    this.inputLotto = event => {
        const round = $lottoRound.value;
        const cash = $lottoCash.value;
        if (!event) {
            return alert("입력 오류! 입력 오류! 다시 시도해줏매");
        }
        if (!isRoundValid(round)) {
            return alert("회차 오류! 1이상의 회차를 입력 ");
        }
        if (!isCashValid(cash)) {
            return alert("금액 입력 오류! 로또 하나의 가격은 1000원입니다.");
        }
        onAdd(round, cash / LOTTO.MIN_MONEY);
    };

    const isRoundValid = input => {
        const round = parseInt(input);
        return isFinite(round) && round >= LOTTO.MIN_ROUND;
    };

    const isCashValid = input => {
        const cash = parseInt(input);
        return isFinite(cash) && cash >= LOTTO.MIN_MONEY;
    };

}
export default LottoInput;