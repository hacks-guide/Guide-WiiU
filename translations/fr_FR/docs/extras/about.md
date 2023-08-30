# À propos de ce guide
---
Ce guide a été rédigé par des membres du personnel du [Serveur Discord Nintendo Homebrew](https://discord.gg/C29hYvh)

> **Crédits**
> 
> **Elpunical, FlimFlam69, Flump, GaryOderNichts, Hiperhazz, huhen, ihaveahax/ihaveamac, Lazr1026, Link5261, Maschell, Nightkingale, Plailect, Profanity, and redcubie.**
> 
> Merci à [tous ceux](https://github.com/hacks-guide/Guide-WiiU/graphs/contributors) qui ont apporté leur contribution au guide sur GitHub.

?> [Vous pouvez trouver ce guide sur GitHub](https://github.com/hacks-guide/Guide-WiiU), Il est sous licence [ISC License](https://github.com/hacks-guide/Guide-WiiU/blob/master/LICENSE.md).

<figure class="thumbnails">
    <img src="docs/assets/img/nh.jpg" alt="Nintendo Homebrew" title="Nintendo Homebrew">
</figure>

>
> **Remerciements**
> 
> - **GaryOderNichts** et **Maschell** pour l'[AutobootModule](https://github.com/wiiu-env/AutobootModule).
> 
> - **GaryOderNichts** for the [Configurable Payload](https://github.com/GaryOderNichts/configurable-payload), [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer), [UFDiine](https://github.com/GaryOderNichts/UFDiine), [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator), the fixed version of the [Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/), and [Bloopair](https://github.com/GaryOderNichts/Bloopair).
> 
> - **dragbe** et **FIX94** pour <u>d2x cIOS Installer</u>.
> 
> - **koolkdev** et **FIX94** pour [disc2app](https://github.com/koolkdev/disc2app).
> 
> - L'**équipe de Docsify** pour [docsify.js](https://github.com/docsifyjs/docsify/).
> 
> - **jhildenbiddle** pour [docsify-themeable](https://github.com/jhildenbiddle/docsify-themeable).
> 
> - **Maschell** for the [CustomRPXLoader](https://github.com/wiiu-env/CustomRPXLoader), [FailST](https://maschell.github.io/homebrew/2020/12/02/failst.html), [EnvironmentLoader](https://github.com/wiiu-env/EnvironmentLoader), [HBLInstallerWrapper](https://github.com/wiiu-env/HBLInstallerWrapper), [LaunchInstaller](https://github.com/wiiu-env/LaunchInstaller), [MochaPayload](https://github.com/wiiu-env/MochaPayload), [PayloadFromRPX](https://github.com/wiiu-env/PayloadFromRPX), [PayloadLoaderInstaller](https://github.com/wiiu-env/PayloadLoaderInstaller), [PayloadLoaderInstallerEnvironment](https://github.com/wiiu-env/PayloadLoaderInstallerEnvironment), [PayloadloaderPayload](https://github.com/wiiu-env/PayloadloaderPayload), the [Tiramisu Downloader](https://tiramisu.foryour.cafe/), [wudd](https://github.com/wiiu-env/wudd), the [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/), the [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/), the [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/), the [Aroma Downloader](https://aroma.foryour.cafe), and <u>Tiramisu/Aroma</u>.
> 
> - **FIX94** et **smealum** pour [Haxchi et CBHC](https://github.com/FIX94/haxchi).
> 
> - **dimok789** pour le [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher), le [Homebrew Launcher Channel](https://github.com/dimok789/homebrew_launcher), et [Mocha](https://github.com/dimok789/mocha).
> 
> - **Maschell** et **dimok789** pour le [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer).
> 
> - **vgmoose**, **pwsincd**, **rw-r-r_0644**, **crc32**, **Compucat**, **Nightkingale** and the **4TU Team** for [hb-appstore](https://github.com/vgmoose/hb-appstore).
> 
> - **Jonhyjp** pour [Indexiine](https://gbatemp.net/threads/indexiine-load-cfw-during-boot-and-offline-without-a-vc-ds-title.553681/).
> 
> - **JumpCallPop**, **jam1garner**, **hedgeberg**, **yellows8** et **orboditilt** pour [JSTypeHax](https://github.com/wiiu-env/JsTypeHax).
> 
> - **Dr Clipper**, **ZRicky11**, **dmm** et **FIX94** pour <u>Patched IOS80 Installer for vWii</u>.
> 
> - **GabyPCgeeK**,  **Ryuzaki-MrL**, and **Xpl0itU** for [SaveMii WUT Port](https://github.com/Xpl0itU/savemii)
> 
> - **djskual**, **Loadiine GX2 Team**, **Yardape** et **brienj** pour [WUP Installer GX2](https://sourceforge.net/projects/wup-installer-gx2/).
> 
> - **koolkdev** pour [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper).
> 
> - **koolkdev** et **Maschell** pour le [payload de Wii U NAND Dumper](https://github.com/wiiu-env/wiiu-nanddumper-payload).
> 
> - **dimok789** pour [wupclient.py](https://github.com/dimok789/mocha/blob/master/ios_mcp/wupclient.py).
> 
> - **TheLordScruffy** pour [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer).
> 
> - **marco-calautti** for the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU)
