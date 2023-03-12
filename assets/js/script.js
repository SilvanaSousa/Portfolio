const texto = document.querySelector('.subtitulo-perfil');
maquinaDeEscrever(texto);


function maquinaDeEscrever(elemento){
    const letrasDoTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    letrasDoTexto.forEach((letra,i) => {
        setTimeout(function(){
            elemento.innerHTML+=letra;
        },i*200)

    });
}
