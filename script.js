function salvarNaAPI() {
    event.preventDefault(); /** */
    let aluno = {
        nome: nome.value,
        email: email.value,
        whatsapp: whatsapp.value,
        objetivo: objetivo.value
    }

    let button = document.getElementById("btn");
    button.disabled = true;


    fetch("https://63c305a5b0c286fbe5f7d74d.mockapi.io/landingpage/storage-landingpage", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        
        body: JSON.stringify(aluno)
    }
       /** Função de flecha */
    ).then (() => {

        button.disabled = false;
        alert("Enviado com sucesso");
        document.getElementById("cadastro").reset();

    })
}


/* método POST Toda a troca de informação na internet é feita em texto 
    * Resposavel por fazer uma requisição em algum canto na internet
    * 
    * Verbos HTTP: GET, POST, PUT, PATCH, DELETE
    * Headers: No cabeçalho informa qual o tipo de informação estou enviando um JSON
    * 
    * Quando uso json stringfy transformo o objeto aluno em um JSON
    * 
    */