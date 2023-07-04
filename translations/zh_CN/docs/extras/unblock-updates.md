# 解除阻止更新
---
如果你需要进行系统更新，则你就需要做这个教程。

?> If you are running Tiramisu and have deleted the update folder, you need to disable both autobooting and recreate the update folder.

### 步骤 {docsify-ignore}

<!-- tabs:start -->

#### **Removing Tiramisu Autoboot**

### Removing Tiramisu Autoboot

?> When autobooting into the PayloadLoader, updates are automatically blocked. Follow the guide below to disable it.

1. Boot the console while holding X on the Gamepad.
1. Navigate to the `installer` environment and launch it by pressing A.
1. Press A to select `Check`.
1. Select `Boot options`.
1. You will be asked if you want to switch the boot title. Press A to select `Switch back to Wii U Menu`.
1. When the process finished, press A to shutdown the console.
1. Perform the System Update.
1. Follow [this](../docs/user-guide/tiramisu/autoboot) to re-enable autobooting.

#### **Recreating Update Folder**

### Recreating Update Folder

1. 将 SD 卡插入电脑。
1. Download and extract the contents of [UFDiine](https://github.com/GaryOderNichts/UFDiine/releases/tag/v1.1) to the root of your SD Card.
1. Plug the SD Card into your Wii U console and power it on.
1. 启动 Homebrew Launcher。
1. 移动 Homebrew Launcher 并启动 UFDiine app。
1. Press the A button to create the update folder.
1. Confirm that it says `Update folder exists`. You are no longer blocking updates.

#### **Removing DNS Blocks**

### Removing DNS Blocks

1. Enter the Wii U's system settings and navigate to `Internet > Connect to the Internet > Connection List >` `Your WiFi connection > Change Settings > DNS` and set the option to `Auto-obtain`.
1. You are no longer blocking system updates.

<!-- tabs:end -->
