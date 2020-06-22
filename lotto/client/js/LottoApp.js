import {LottoInput} from "./LottoInput.js";
import {Lottos} from "./Lottos.js";
import {WinningLotto} from "./WinningLotto.js";
import {LottoQuantity} from "./LottoQuantity.js";

function LottoApp() {
    const baseUrl = "http://localhost:8000/lotto/";

    this.setState = (winningNumbers, ticketCount) => {
        lottos.setLottos(ticketCount);
        winningLotto.setWinningLotto(winningNumbers);
        lottoQuantity.setQuantity(ticketCount);
    };

    new LottoInput({
        onAdd: (round, ticketCount) => {
            fetch(baseUrl + round)
                .then(response => response.json())
                .then(data => this.setState(data, ticketCount))
                .catch(data => alert(data.message));
        }
    });
    const lottos = new Lottos();
    const winningLotto = new WinningLotto();
    const lottoQuantity = new LottoQuantity();
}

new LottoApp();