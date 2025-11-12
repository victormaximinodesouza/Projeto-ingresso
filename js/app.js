function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd); // apenas o valor digitado na string
    } else if(tipo.value == 'Superior'){
         comprarSuperior(qtd);
    } else{
         comprarInferior(qtd);
    }
    }
function comprarPista(qtd){
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > qtdPista){
            alert('Quantidade indisponível para tipo Pista');
        } else{
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista; // mexe no texto que está dentro da tag
            alert('Compra realizada!');
        }
    }
 function comprarSuperior(qtd){
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > qtdSuperior){
            alert('Quantidade indisponível para tipo Superior');
        } else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior; // mexe no texto que está dentro da tag
            alert('Compra realizada!');
        }



}

 function comprarInferior(qtd){
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > qtdInferior){
            alert('Quantidade indisponível para tipo inferior');
        } else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior; // mexe no texto que está dentro da tag
            alert('Compra realizada!');
        }


}