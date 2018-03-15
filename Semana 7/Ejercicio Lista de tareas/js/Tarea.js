function Tarea(descripcion, fecha, realizada){
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.realizada = realizada;
    
    this.generarHtmlTarea = function(pos){
        var cadena = '<input type="checkbox" name="task';
        cadena += pos+'" id="task'+pos+'" ';
        cadena += realizada?'checked':'';
        cadena += '><label for="task';
        cadena += pos +'">'+this.descripcion+'</label>';
        return cadena;
    }
}