const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagens");

var botaoCopia = document.querySelector("#botaoCopia");



function encriptar(stringEncriptada)
{
    let matrizCodigo = [["a", "ai"], ["e", "enter"]
    , ["i", "imes"],["o", "obes"],["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i <matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
}
return stringEncriptada
}

function btnEncriptar()
{
    const textoEncriptado =  encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.classList.add("nome")
}

function desencriptar (stringDesencriptada)
{
    let matrizCodigo = [["ai", "a"], ["enter", "e"]
    , ["imes", "i"], ["obes", "o"], ["ufat", "u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++)
        {
            if(stringDesencriptada.includes(matrizCodigo[i][0]))
                {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
                }
        }    
        return stringDesencriptada
}

function btnDesencriptar ()
{
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.classList.add("nome")
}
const textoDesencriptado = desencriptar(inputTexto.value)

function limpaTela()
{
    textoDesencriptado.value = '';
    mensagem.value = '';
}
function limpa()
{
    mensagem.value = '';
}
function copiarTexto(){
    
    var textoCopiado = mensagem.value;
    navigator.clipboard.writeText(textoCopiado);
    limpaTela();
    input.focus();
}
botaoCopia.onclick = copiarTexto;
