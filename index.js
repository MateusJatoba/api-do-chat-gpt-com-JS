const treino = document.getElementById('tipoTreino')
let botao = document.getElementById('enviarMsg')

botao.addEventListener('click' , enviarPergunta)





const ApiKey = "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"

function enviarPergunta(){
    let question = treino.value
    console.log('oi')
    fetch("https://api.openai.com/v1/chat/completions" , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ApiKey}`
        } , 
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Me fale 6 exercícios de hipertrofia para: ${question}`,
            max_tokens: 2048,
            temperature: 0.5
        })
    })
    .then((response) => response.json())
    .then((json) => {
        if(json.choices?.[0].text){
            var text = json.choices[0].text || "Sem resposta"
    
            console.log(text)

        }
    })
    .catch((e) => console.log('Erro: ' , e))
}