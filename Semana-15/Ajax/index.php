<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="main.js"></script>
    <label for="campoTexto">Noticia</label>
    <input type="text" name="campoTexto" id="campoTexto" onkeyup="showHint(this.value)">
    <div>Sugerencia: <div class="txtHint" id="txtHint"></div></div>
    
</body>
</html>