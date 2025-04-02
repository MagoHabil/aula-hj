function calcularDano() {
    
    let linhas = document.querySelectorAll("#tabela-dano tr");

    linhas.forEach(linha => {
       
        let inputs = linha.querySelectorAll("input");

        if (inputs.length >= 2) {
            let ataque = parseInt(inputs[0].value) || 0;
            let defesa = parseInt(inputs[1].value) || 0;

            let dano = Math.max(0, ataque - defesa);

            let celulaDano = linha.querySelector(".dano");
            if (celulaDano) {
                celulaDano.textContent = dano;
            }
        }
    });
}
