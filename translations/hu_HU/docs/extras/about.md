# Erről az útmutatóról
---
Ezt az útmutatót a [Nintendo Homebrew Discord Server](https://discord.gg/C29hYvh) stábja írta

> **Készítők**
> 
> **Elpunical, FlimFlam69, Flump, GaryOderNichts, Hiperhazz, huhen, ihaveahax/ihaveamac, Lazr1026, Link5261, Maschell, Nightkingale, Plailect, Profanity, és redcubie.**
> 
> Köszönjük [mindenki másnak](https://github.com/hacks-guide/Guide-WiiU/graphs/contributors) aki hozzájárult az útmutatóhoz a GitHub-on.

?> [Megtalálhatod ezt az útmutatót a GitHub-on](https://github.com/hacks-guide/Guide-WiiU), A licence: [ISC License](https://github.com/hacks-guide/Guide-WiiU/blob/master/LICENSE.md).

<figure class="thumbnails">
    <img src="docs/assets/img/nh.jpg" alt="Nintendo Homebrew" title="Nintendo Homebrew">
</figure>

>
> **Fejlesztő / Eszköz készítők**
> 
> - **GaryOderNichts** és **Maschell** az [AutobootModule](https://github.com/wiiu-env/AutobootModule) készítői.
> 
> - **GaryOderNichts** a [Configurable Payload](https://github.com/GaryOderNichts/configurable-payload), az [Indexiine-Installer](https://github.com/GaryOderNichts/indexiine-installer), az [UFDiine](https://github.com/GaryOderNichts/UFDiine), a [vWii Decaffeinator](https://github.com/GaryOderNichts/vWii-Decaffeinator), a [Homebrew Launcher Channel](https://github.com/GaryOderNichts/homebrew_launcher/) javított verziója, és a [Bloopair](https://github.com/GaryOderNichts/Bloopair) készítője.
> 
> - **dragbe** és **FIX94** a <u>d2x cIOS Installer</u> készítői.
> 
> - **koolkdev** és **FIX94** a [disc2app](https://github.com/koolkdev/disc2app) készítői.
> 
> - A **Docsify team** a [docsify.js](https://github.com/docsifyjs/docsify/) készítője.
> 
> - **jhildenbiddle** a [docsify-themeable](https://github.com/jhildenbiddle/docsify-themeable) készítője.
> 
> - **Maschell** a [CustomRPXLoader](https://github.com/wiiu-env/CustomRPXLoader), a [FailST](https://maschell.github.io/homebrew/2020/12/02/failst.html), az [EnvironmentLoader](https://github.com/wiiu-env/EnvironmentLoader), a [HBLInstallerWrapper](https://github.com/wiiu-env/HBLInstallerWrapper), a [LaunchInstaller](https://github.com/wiiu-env/LaunchInstaller), a [MochaPayload](https://github.com/wiiu-env/MochaPayload), a [PayloadFromRPX](https://github.com/wiiu-env/PayloadFromRPX), a [PayloadLoaderInstaller](https://github.com/wiiu-env/PayloadLoaderInstaller), a [PayloadLoaderInstallerEnvironment](https://github.com/wiiu-env/PayloadLoaderInstallerEnvironment), a [PayloadloaderPayload](https://github.com/wiiu-env/PayloadloaderPayload), a [Tiramisu Downloader](https://tiramisu.foryour.cafe/), a [wudd](https://github.com/wiiu-env/wudd), az [FTPiiU Plugin](https://github.com/wiiu-env/ftpiiu_plugin/), az [SDCafiine Plugin](https://github.com/wiiu-env/sdcafiine_plugin/), a [Screenshot Plugin](https://github.com/wiiu-env/ScreenshotWUPS/), az [Aroma Downloader](https://aroma.foryour.cafe), és a <u>Tiramisu/Aroma</u> készítője.
> 
> - **FIX94** és **smealum** a [Haxchi és CBHC](https://github.com/FIX94/haxchi) készítői.
> 
> - **dimok789** a [Homebrew Launcher](https://github.com/dimok789/homebrew_launcher), a [Homebrew Launcher Channel](https://github.com/dimok789/homebrew_launcher), és a [Mocha](https://github.com/dimok789/mocha) készítője.
> 
> - **Maschell** és **dimok789** a [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer) készítői.
> 
> - **vgmoose**, **pwsincd**, **rw-r-r_0644**, **crc32**, **Compucat**, **Nightkingale**és a **4TU Team** a [hb-appstore](https://github.com/vgmoose/hb-appstore) készítői.
> 
> - **Jonhyjp** az [Indexiine](https://gbatemp.net/threads/indexiine-load-cfw-during-boot-and-offline-without-a-vc-ds-title.553681/) készítője.
> 
> - **JumpCallPop**, **jam1garner**, **hedgeberg**, **yellows8** és **orboditilt** a [JSTypeHax](https://github.com/wiiu-env/JsTypeHax) készítői.
> 
> - **Dr Clipper**, **ZRicky11**, **dmm** és **FIX94** a <u>patchelt IOS80 Installer for vWii</u> készítői.
> 
> - **GabyPCgeeK**,  **Ryuzaki-MrL**, és **Xpl0itU** a [SaveMii WUT Port](https://github.com/Xpl0itU/savemii) készítői.
> 
> - **djskual**, **Loadiine GX2 Team**, **Yardape** és **brienj** a [WUP Installer GX2](https://sourceforge.net/projects/wup-installer-gx2/) készítői.
> 
> - **koolkdev** a [Wii U NAND Dumper](https://github.com/koolkdev/wiiu-nanddumper) készítője.
> 
> - **koolkdev** és **Maschell** a [Wii U NAND Dumper payload](https://github.com/wiiu-env/wiiu-nanddumper-payload) készítői.
> 
> - **dimok789** a [wupclient.py](https://github.com/dimok789/mocha/blob/master/ios_mcp/wupclient.py) készítője.
> 
> - **TheLordScruffy** a [vwii-compat-installer](https://github.com/TheLordScruffy/vwii-compat-installer) készítője.
> 
> - **marco-calautti** a [Sigpatches Module](https://github.com/marco-calautti/SigpatchesModuleWiiU) készítője.
