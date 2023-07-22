function tabela() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    function recebeValores(e) {
        e.preventDefault();

        const distancia = Number(form.querySelector('.distancia').value.replace(',', '.'));
        const consumo = Number(form.querySelector('.consumo').value.replace(',', '.'));
        const precog = Number(form.querySelector('.precog').value.replace(',', '.'));
        const pop = Number(form.querySelector('.pop').value.replace(',', '.'));
        const uber = Number(form.querySelector('.uber').value.replace(',', '.'));

        if (isNaN(distancia)) {
            resultado.innerHTML = "Distancia Inválido! Por favor, insira um número válido."
            resultado.classList.add('erro');
            return;
        }
        if (isNaN(consumo)) {
            resultado.innerHTML = "Consumo inválido! Por favor, insira um número válido.";
            resultado.classList.add('erro');
            return;
        }
        if (isNaN(precog)) {
            resultado.innerHTML = "Preço por litro inválido! Por favor, insira um número válido.";
            resultado.classList.add('erro');
            return;
        }
        if (isNaN(pop)) {
            resultado.innerHTML = "Valor 99 inválido! Por favor, insira um número válido.";
            resultado.classList.add('erro');
            return;
        }
        if (isNaN(uber)) {
            resultado.innerHTML = "Valor Uber inválido! Por favor, insira um número válido.";
            resultado.classList.add('erro');
            return;
        }

        let custo = (distancia / consumo) * precog

        let bruto = pop + uber

        let lucro = bruto - custo

        let percentc = (custo / bruto) * 100;

        let percentl = (lucro / bruto) * 100;

        resultado.classList.remove('erro');

        resultado.innerHTML = `Custo da gasolina: R$ ${custo.toFixed(2)} <br> Valor bruto: R$ ${bruto.toFixed(2)} <br> Lucro: R$ ${lucro.toFixed(2)}
        <br> Percentual de custo: ${percentc.toFixed(1)}% <br> Percentual de lucro: ${percentl.toFixed(1)}%`;

    }

    form.addEventListener('submit', recebeValores)

};
tabela();