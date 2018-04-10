// Creamos nuestras variables basandonos en elementos del dom
var chat = {'tons': '¿en la buena o que?'},
    chat_box = document.getElementById("chat-box"),
    entrada_texto = document.getElementById("entrada-texto"),
    btn_enviar = document.getElementById("btn-enviar"),
    bandera = true,
    nueva_pregunta = '';
chat ['hola'] = 'hola querido estudiante';
chat ['¿como estas?'] = 'bien, bien, bien, muy bien, muy bien, muy bien...';

/**
 * Funcion para aprender en el chat
 * @param {String} pregunta  La pregunta a almacenar
 * @param {String} respuesta La respuesta a la pregunta
 */
function learn(pregunta, respuesta){
    // Si no se la respuesta la almaceno
    if (!(pregunta in chat)){
        chat[pregunta]=respuesta;
    }else{ 
        alert('ya sabia eso');
    }
}

/**
 * Responde las preguntas del bot
 */
var answer = function(){
    
    // El campo que para crear el log del chat
    var user_div = document.createElement("div");
    user_div.textContent = "usser dijo: "+entrada_texto.value;
    chat_box.appendChild(user_div);
    
    // El campo para la respuesta del bot
    var div = document.createElement("div");
    div.textContent = 'Bot dijo: ';
    
    // Si estoy esperando preguntas y se la respuesta
    if (bandera && (entrada_texto.value in chat )){
        div.textContent += chat[entrada_texto.value];
        
    // Si estoy esperando respuestas para aprender
    }else if(!bandera){
        learn(nueva_pregunta, entrada_texto.value);
        div.textContent += "Aprendí que la pregunta "+ nueva_pregunta+
            " Se responde "+ chat[nueva_pregunta];
        bandera = !bandera;
        
    // Si no se y debo aprender como respondo a eso
    }else{
        div.textContent += "¿Como debería responder a eso?";
        nueva_pregunta = entrada_texto.value;
        bandera = !bandera;
    }
    
    // Limpiamos los campos y publicamos la respuesta
    entrada_texto.value = "";
    chat_box.appendChild(div);
}

// Le asignamos la funcion al boton y al enter en el campo de texto
btn_enviar.onclick = (answer);
entrada_texto.onkeypress = function(evt){
  if(evt.keyCode == 13){
      answer();
  }  
};  
//alert(btn_enviar);