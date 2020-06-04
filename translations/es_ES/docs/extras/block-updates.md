# Bloquear las actualizaciones
---
Todos los exploits conocidos actualmente en la Wii U pueden, a diferencia del exploit RCM de Nintendo Switch, ser parcheados por una actualización del sistema. Aunque la Wii U ya no tiene soporte oficial, Nintendo aún puede publicar actualizaciones para esta. Por ejemplo, las actualizaciones 5.5.3 y 5.5.4 fueron liberadas luego del cese de soporte a la Wii U, por lo tanto, bloquear las actualizaciones es un paso recomendado.

### Instrucciones

Actualmente existen dos maneras de bloquear actualizaciones en el Wii U:
<!-- tabs:start -->

#### **Borrar la carpeta "update"**
?> This method of update blocking is a bit more advanced than DNS Blocking and uses a homebrew app to modify system files. However, it has the advantage that the eShop's functionality will not be restricted.
1. Conecta tu tarjeta SD a tu PC.
1. Download and extract [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases) to the root of your SD Card.
1. Conecta la Tarjeta SD a tu Wii U y enciéndela.
1. Enter the Homebrew Launcher.
1. Navigate the Homebrew Launcher and run the UFDiine app.
1. Press the A button to delete the update folder.
1. Confirm that it says `Update folder is deleted`. Ahora estás bloqueando actualizaciones.

### **Bloqueo DNS**
?> Este método es mas sencillo y se recomienda para los usuarios menos avanzados. Sin embargo, impide que la eShop funcione adecuadamente. Esto sin embargo, se puede solucionar ejecutando [NUPatcher](http://www.wiiubru.com/appstore/zips/nnupatcher.zip) antes de iniciar la eShop.
1. Conecta tu tarjeta SD a tu PC.
1. Extrae el archivo `nnupatcher.zip` a la raíz de tu tarjeta SD. Sobrescribe cualquier archivo duplicado.
1. Conecta la Tarjeta SD a tu Wii U y enciéndela.
1. Entra a la configuración de la consola y navega a `Internet > Conexión a Internet > Lista de Conexiónes >` `Tu conexión WiFi > Cambiar configuración > DNS` y ajusta la opción a `Modo manual`.
1. Se te pedirá que introduzca un DNS primario y secundario. Introduce las siguientes direcciones IP:
 - DNS primario: 168.235.092.108
 - DNS secundario: 081.004.127.020 <img src="docs/assets/img/DNS.png" alt="Bloqueo DNS" />
1. Haz clic en confirmar.
1. Ahora estás bloqueando actualizaciones. In order to access the eShop, run the NNUPatcher app from the Homebrew Launcher before launching the eShop.


<!-- tabs:end -->
