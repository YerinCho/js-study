export const winningLottoTemplate = winningLotto => {
    return "<div class=\"lotto\">" +
        winningLotto.winningNumbers.map(number => "<div class=\"lotto-number winning\">" + number + "</div>").join("") +
        "<div class=\"lotto-number winning bonus-number\">" + winningLotto.bonus + "</div>";
};

export const lottoTemplate = lottoNumbers => {
    return "<div class=\"lotto\">" +
        lottoNumbers.map(number => "<div class=\"lotto-number\">" + number + "</div>")
            .join("");
};

export const lottoQuantityTemplate = ticketCount => {
    return `<h3>구매한 로또는 다음과 같습니다. 총 <span id="lotto-quantity">${ticketCount}</span>개</h3>`;
};