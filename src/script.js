
const novos =  [
    'Desta maneira, a complexidade dos estudos efetuados agrega valor ao estabelecimento dos paradigmas corporativos.',
    'Caros amigos, o aumento do diálogo entre os diferentes setores produtivos prepara-nos para enfrentar situações atípicas decorrentes dos níveis de motivação departamental.',
    'No entanto, não podemos esquecer que o julgamento imparcial das eventualidades faz parte de um processo de gerenciamento das novas proposições.',
    'Por conseguinte, o consenso sobre a necessidade de qualificação possibilita uma melhor visão global dos conhecimentos estratégicos para atingir a excelência.'
]


let index = 0

let descricao = document.getElementById("descricaoList")
let btnProximo = document.getElementById("proximaDescricao")

let inputNovoHobbie = document.getElementById('inputNovoHobbie')
let btnSalvar = document.getElementById('salvarNovoHobbie')

const body = document.body
const themeButton = document.getElementById('trocarTema')

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function proximaDescricao(){
    if(!btnProximo.dataset.eventoAdicionado){
        btnProximo.addEventListener("click", () => {
        descricao.textContent = novos[index]
        console.log('Descrição mudou para: ', novos[index])

        index = (index + 1) % novos.length
        })

        btnProximo.dataset.eventoAdicionado = true;
    }
   
}

function addNovoHobbie(){
    let valorInput = inputNovoHobbie.value

    if((valorInput !== "") && (valorInput != null)){
        ++index
        novos.push(valorInput)
        inputNovoHobbie.value = ""

        console.log('Adicionado: ', valorInput)
        console.log(novos)

        alert("Adicionado Com Sucesso!")

    }

}

inputNovoHobbie.addEventListener("keyup", (e) => {
    if(inputNovoHobbie.value != "" & inputNovoHobbie.value != null){
        if(e.keyCode == 13){
                e.preventDefault()
                btnSalvar.click()
                alert("Adicionado Com Sucesso!")
        }
    }
    })




