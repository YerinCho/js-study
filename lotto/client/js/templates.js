export const winningLottoTemplate = winningLotto => {
    return `<div class="lotto">${winningLotto.winningNumbers.map(
        number => `<div class="lotto-number winning">${number}</div>`)
        .join("")}<div class=\"lotto-number winning bonus-number\">${winningLotto.bonus}</div>`;
};

export const lottoTemplate = lottoNumbers => {
    return `<div class="lotto">${lottoNumbers.map(lottoNumber => `<div class="lotto-number">${lottoNumber}</div>`).join("")}<\div>`
};