# Om Denne Guiden
---
Denne guiden er skrevet av staff fra [Nintendo Homebrew Discord Server](https://discord.gg/C29hYvh)

> **Forfattere**
> 
> **Elpunical, FlimFlam69, Flump, GaryOderNichts, Hiperhazz, huhen, ihaveahax/ihaveamac, Lazr1026, Link5261, Maschell, Nightkingale, Plailect, Profanity, and redcubie.**
> 
> Takk til [alle andre ](https://github.com/hacks-guide/Guide-WiiU/graphs/contributors) som bidrar til guiden på GitHub.

?> [Du kan finne guiden vår på GitHub](https://github.com/hacks-guide/Guide-WiiU), den bruker [ISC-lisens](https://github.com/hacks-guide/Guide-WiiU/blob/master/LICENSE.md).

<figure class="thumbnails">
    <img src="docs/assets/img/nh.jpg" alt="Nintendo Homebrew" title="Nintendo Homebrew">
</figure>

>
> **Utviklere og Verktøy**
> 
> - **GaryOderNichts** og **Maschell** for [AutobootModule](https://github.com/wiiu-env/AutobootModule).
> 
> - **GaryOderNichts** for the [Configurable Payload](https://github.com/GaryOderNichts/configurable-payload), [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer), [UFDiine](https://github.com/GaryOderNichts/UFDiine), [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator), the fixed version of the [Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/), and [Bloopair](https://github.com/GaryOderNichts/Bloopair).
> 
> - **dragbe** og **FIX94** for <u>d2x cIOS Installer</u>.
> 
> - **koolkdev** og **FIX94** for [disc2app](https://github.com/koolkdev/disc2app).
> 
> - **Docsify team** for [docsify.js](https://github.com/docsifyjs/docsify/).
> 
> - **jhildenbiddle** for [docsify-themeable](https://github.com/jhildenbiddle/docsify-themeable).
> 
> - **Maschell** for the [CustomRPXLoader](https://github.com/wiiu-env/CustomRPXLoader), [FailST](https://maschell.github.io/homebrew/2020/12/02/failst.html), [EnvironmentLoader](https://github.com/wiiu-env/EnvironmentLoader), [HBLInstallerWrapper](https://github.com/wiiu-env/HBLInstallerWrapper), [LaunchInstaller](https://github.com/wiiu-env/LaunchInstaller), [MochaPayload](https://github.com/wiiu-env/MochaPayload), [PayloadFromRPX](https://github.com/wiiu-env/PayloadFromRPX), [PayloadLoaderInstaller](https://github.com/wiiu-env/PayloadLoaderInstaller), [PayloadLoaderInstallerEnvironment](https://github.com/wiiu-env/PayloadLoaderInstallerEnvironment), [PayloadloaderPayload](https://github.com/wiiu-env/PayloadloaderPayload), the [Tiramisu Downloader](https://tiramisu.foryour.cafe/), [wudd](https://github.com/wiiu-env/wudd), the [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/), the [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/), the [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/), the [Aroma Downloader](https://aroma.foryour.cafe), and <u>Tiramisu/Aroma</u>.
> 
> - **FIX94** og **smealum** for [Haxchi og CBHC](https://github.com/FIX94/haxchi).
> 
> - **dimok789** for [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher), [Homebrew Launcher Channel](https://github.com/dimok789/homebrew_launcher), og [Mocha](https://github.com/dimok789/mocha).
> 
> - **Maschell** og **dimok789** for [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer).
> 
> - **vgmoose**, **pwsincd**, **rw-r-r_0644**, **crc32**, **Compucat**, **Nightkingale** and the **4TU Team** for [hb-appstore](https://github.com/vgmoose/hb-appstore).
> 
> - **Jonhyjp** for [Indexiine](https://gbatemp.net/threads/indexiine-load-cfw-during-boot-and-offline-without-a-vc-ds-title.553681/).
> 
> - **JumpCallPop**, **jam1garner**, **hedgeberg**, **yellows8** og **orboditilt** for [JSTypeHax](https://github.com/wiiu-env/JsTypeHax).
> 
> - **Dr Clipper**, **ZRicky11**, **dmm** og **FIX94** for <u>Patched IOS80 Installer for vWii</u>.
> 
> - **GabyPCgeeK**,  **Ryuzaki-MrL**, and **Xpl0itU** for [SaveMii WUT Port](https://github.com/Xpl0itU/savemii)
> 
> - **djskual**, **Loadiine GX2 Team**, **Yardape** og **brienj** for [WUP Installer GX2](https://sourceforge.net/projects/wup-installer-gx2/).
> 
> - **koolkdev** for [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper).
> 
> - **koolkdev** og **Maschell** for [Wii U NAND Dumper payload](https://github.com/wiiu-env/wiiu-nanddumper-payload).
> 
> - **dimok789** for [wupclient.py](https://github.com/dimok789/mocha/blob/master/ios_mcp/wupclient.py).
> 
> - **TheLordScruffy** for [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer).
> 
> - **marco-calautti** for the [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU)
