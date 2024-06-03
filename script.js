const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Os problemas sociais são desafios que afetam a convivência e o bem-estar da sociedade, como pobreza, desigualdade, discriminação e violência. Eles estão interligados e têm raízes em sistemas políticos, econômicos e culturais. Resolver esses problemas exige esforços colaborativos entre governos, organizações e indivíduos.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: " investir em saneamento básico é essencial para promover a saúde social. Isso não apenas reduz a incidência de doenças transmitidas pela água, mas também contribui para o desenvolvimento sustentável, garantindo acesso equitativo a recursos hídricos seguros e melhorando o bem-estar das comunidades."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ""
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A saúde deve ser investida";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
