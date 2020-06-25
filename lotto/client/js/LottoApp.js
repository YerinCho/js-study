import {LottoInput} from "./LottoInput.js";
import {Lottos} from "./Lottos.js";
import {WinningLotto} from "./WinningLotto.js";

function LottoApp() {
    const baseUrl = "http://localhost:8000/lotto/";
    const lottos = new Lottos();
    const winningLotto = new WinningLotto();

    this.setState = (winningNumbers, ticketCount) => {
        lottos.setLottos(ticketCount);
        winningLotto.setWinningLotto(winningNumbers);

    };
    new LottoInput({
        onAdd: (round, ticketCount) => {
            fetch(baseUrl + round)
                .then(response => response.json())
                .then(data => this.setState(data, ticketCount))
                .catch(data => alert(data.message));
        }
    });
}

new LottoApp();