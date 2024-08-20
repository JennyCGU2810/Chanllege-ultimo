// Seleccionar elementos//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso= document.querySelector(".texto-aviso");
const respuesta=document.querySelector(".evaluar");
const contenido=document.querySelector(".tarjeta-contenedor");
const btnCopiado= document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Botón para encriptar//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );  
    if (texto ==""){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="El campo no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);

    }
    else if(texto !== txt){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="No debe contener acentos y caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="El texto debe ser solo minúscula";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);
    }
    else{
        texto=texto.replace(/e/mg,"enter");
        texto=texto.replace(/i/mg,"imes");
        texto=texto.replace(/a/mg,"ai");
        texto=texto.replace(/o/mg,"ober");
        texto=texto.replace(/u/mg, "ufat");
        
        respuesta.innerHTML = texto;
        btnCopiado.style.visibility="inherit";
        contenido.remove();
        texto.value="";
    }

});

// Botón para desencriptar//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= txtEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );    
    if (texto ==""){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="El campo no debe estar vacio";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);
    }
    else if(texto !== txt){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="No debe contener acentos y caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background="#0a3871";
        aviso.style.color= "#ffff";
        aviso.style.fontheight="800";
        aviso.textContent="El texto debe ser solo minúscula";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        }, 1200);
    }
    else{
        texto=texto.replace(/enter/mg,"e");
        texto=texto.replace(/imes/mg,"i");
        texto=texto.replace(/ai/mg,"a");
        texto=texto.replace(/ober/mg,"o");
        texto=texto.replace(/ufat/mg, "u");
        
        respuesta.innerHTML = texto;
        btnCopiado.style.visibility="inherit";
        contenido.remove();
        texto.value="";
    }
});

// Botón copiar//
const copiarTexto = () => {
    const copiar = respuesta.value;
    
    navigator.clipboard.writeText(copiar)
        .then(() => {
            alert('Texto copiado al portapapeles: ' + copiar);
            
            copiar.value="";
        })
        .catch(err => {
            alert('Error al copiar el texto');
            copiar.value="";

        });
        
};

btnCopiado.addEventListener('click', copiarTexto);




