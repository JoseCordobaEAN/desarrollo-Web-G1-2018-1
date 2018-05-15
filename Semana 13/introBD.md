# Gestión de usuario bases de datos MySQL       
Es importante para nuestras aplicaciones web que administremos los permisos de nuestros usuarios para prevenir posibles vulnerabilidades, para ver nuestros usuarios en la base de datos podemos utilizar (desde el usuario root):

```SQL 
SELECT User, Host FROM mysql.user;
```

Para crear un usuario debemos indicar el nombre de usuario, su host y su contraseña, por ejemplo

```SQL 
CREATE USER 'krusty'@'localhost' IDENTIFIED BY 'Contrasena_1';
```

Por defecto nuestros usuarios no cuentan con ningun privilegio, asi que debemos asignarselos para la base de datos y tablas que deseemos, por ejemplo:

```SQL 
GRANT ALL PRIVILEGES ON peliculas.* TO 'krusty'@'localhost';
FLUSH PRIVILEGES;
```


