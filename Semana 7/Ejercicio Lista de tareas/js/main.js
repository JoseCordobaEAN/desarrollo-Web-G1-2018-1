/**
 * Crea un objeto de tipo tarea
 * @param   {String} descripcion El texto de la tarea
 * @param   {Date} fecha      la Fecha de creación de la tarea
 * @param   {bool} realizada   Si la tarea ha sido realizada
 * @returns {Tarea} [El objeto tarea]
 */
function Tarea(descripcion, fecha, realizada){
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.realizada = realizada;
    
    
    /**
     * Genera un html para insertar nuestras tareas en la aplicación
     * @param   {int} pos [La posición de la tarea en la lista]
     * @returns {String} [La version html de la tarea]
     */
    this.generarHtmlTarea = function(pos){
        var cadena = '<div><input type="checkbox" name="task';
        cadena += pos+'" id="task'+pos+'" ';
        cadena += realizada?'checked':'';
        cadena += '><label for="task';
        cadena += pos +'">'+this.descripcion+'</label></div>';
        return cadena;
    }
}

var tareas = [];

var btnTask = document.getElementById("add-task");

btnTask.onclick = function(){
    var inputTask = document.getElementById("input-task");
    tareas.push(new Tarea(" "+inputTask.value, new Date(), false));
    var misTareas = document.getElementById("mis-tareas");
    misTareas.innerHTML += tareas[tareas.length -1].generarHtmlTarea(tareas.length -1); 
};



