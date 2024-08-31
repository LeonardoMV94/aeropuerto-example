## Proyecto pagina web de Aerolinea

<<<<<<< HEAD
- [Francisco]            Carrousel de imagenes :white_check_mark: , mejorar mas sobre :white_check_mark:
- [Jose]                 Validacion de niños y pasajeros, integrar array de jose
=======
- [Francisco]            Carrousel de imagenes (fix), mejorar mas sobre
:x: [Jose]                 Validacion de niños y pasajeros, integrar array de jose
>>>>>>> main
- [Simone]               Refactorizar css
- [Yarira]               listado destino - origen from array
- [Nicolas]              Estilo de destinos :white_check_mark:
- [Leonardo]             Pull request -  validar formulario contacto :white_check_mark:

:white_check_mark:
:x:

### comandos para subir cambios
```bash
git checkout -b tu-rama # primero crea tu rama
# ... realiza tus cambios ...
git add . # agrega los archivos al rastreo de git
git commit -m "mensaje" # añadir cambios
git push -u origin tu-rama # subir cambios a tu rama remota por primera vez
git push # desde la segunda vez
# solicitar el pull request en el boton verde del repositorio de github
```

### comandos para obtener los ultimos cambios de la rama main en tu rama
```bash
git checkout main # cambia a la rama main
git pull -u origin main # obtener los ultimos cambios primera vez
git pull origin main # despues de la segunda vez
git checkout tu-rama # cambia a tu rama
git merge main # combinar cambios actualizados de main a tu rama
```
