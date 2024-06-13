# Tiramisu {docsify-ignore-all}

## A PayloadLoader telepítése

Now that you have your NAND backup in case anything goes wrong later, you can install the PayloadLoader on your system.

A PayloadLoader telepítése lehetővé teszi Tiramisu elérését egyszerűen az Health and Safety Information app futtatásával.

> A gyári visszaállítás **nem** távolítja el a beillesztett PayloadLoader-t. Follow [uninstall PayloadLoader](../../uninstall-payloadloader) to remove the PayloadLoader.

### Lépések

?> If you're already booted into Tiramisu, restart your console before executing the browser exploit again.

1. Vedd ki az SD kártyát a számítógépedből, és dugd be a Wii U konzolodba.
1. Execute the web browser exploit as [previously explained](browser-exploit) but this time, you will need to hold the X button to open the Environment Loader menu.
1. Navigate the list using the D-Pad and navigate to the `installer` environment, press A to launch it.
1. Nyomd meg az A gombot, hogy ellenőrizd, hogy telepíthető-e a PayloadLoader.
    - Most már azt kell jeleznie, hogy a PayloadLoader telepíthető a Health and Safety Information apphoz.
1. Nyomj A gombot az `Install / Update` kiválasztásához.
1. Rá fog kérdezni, hogy biztosan telepíteni akarod-e a PayloadLoader-t. Használd a D-Pad-et az `Install` kiválasztásához és nyomj A gombot.
1. Ha a telepítés befejeződött, nyomj A gombot, hogy teljesen leállítsd a konzolt.

!> If you do not wish to autoboot Tiramisu on your console, you can skip the `Autobooting Tiramisu` part and head directly to [Finalizing Setup](finalizing-setup).