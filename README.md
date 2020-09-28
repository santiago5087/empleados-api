# empleados-api

## Instrucciones:
Crear una copia del proyecto en su equipo y abrirla con VS code, crear una terminal integrada y pararse en la carpeta raíz del proyecto.<br><br>

Primero que todo, en la consola de MongoDB, ejecutar los comandos que se encuentran en el archivo "mongo-datos.txt" que corresponden a los datos iniciales de la BD. <br><br>

Ejecutar el comando "npm install" para instalar todas los paquetes y dependencias del proyecto.<br><br>

- Para correr la API en modo desarrollador (muestra registros de peticiones por consola, etc.) ingresar el siguiente comando: "npm run dev" <br>
- Para correr la API normalmente ingresar el siguiente comando: "npm start" <br>
- Para ejecutar la prueba de unidad (unit test) se ejecuta el siguiente comando **(la API debe de estar corriendo en otra terminal)**: "npm test" <br>
<br>

URL base la API: http://localhost:3000 <br><br>

## Rutas:
**Ruta: /empleados** <br>
  - Método: GET <br>
    Descripción: Retorna **todos** los empleados que se encuentran en la base de datos.<br>
  - Método: POST <br>
    Descripción: Crea un empleado, se debe de enviar los datos del empleado en el body de la petición.
<br>
<br>

**Ruta: /empleados/id** <br>
- Método: GET <br>
  Descripción: Retorna **un** empleado al cual corresponde el id enviado. <br>
- Método: DELETE <br>
  Descripción: Elimina un empleado al cual corresponda el id enviado. <br>
  
