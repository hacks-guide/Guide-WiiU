# How To Fix The Error Code 112-1037
---
This page will guide you through the process of fixing the error code 112-1037.

### Cosa ti servirà {docsify-ignore}

- A working [homebrew installation](introduction).
- [wupclient.py](https://raw.githubusercontent.com/Elpunical/mocha/master/ios_mcp/wupclient.py) **(right-click -> Save link as... -> Click Save).**
- The latest release of [Python](https://www.python.org/downloads/).

### Istruzioni {docsify-ignore}

1. Install Python on your computer.

### Fixing The Error Code

<!-- tabs:start -->

#### **Windows**

### Windows

1. Accendi il tuo Wii U.
1. Launch the Homebrew Launcher and launch Mocha.
1. Go back to the Wii U Menu.
1. Open up a command prompt window.
1. Use the following command: `cd <directory>`.
  - Example: <code>cd C:\Users\username<wbr>\Downloads</code>.
1. Use the following command: `py -3 -i wupclient.py`.
1. Enter the IP address of your Wii U.
 - Don't know how to find it? Read [this](find-wiiu-ip-address).
1. Use the appropriate command depending on the region of your console:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. If the command worked, you will get the following response: `chmod returned 0x0`.
1. The error code should now be gone.

#### **macOS & Linux**

### macOS & Linux

1. Accendi il tuo Wii U.
1. Launch the Homebrew Launcher and launch Mocha.
1. Go back to the Wii U Menu.
1. Open up a Terminal window.
1. Use the following command: `cd <directory>`.
 - On macOS, the most common place to find your downloaded files is <code>/Users/username<wbr>/Downloads</code>.
 - On Linux, the most common place to find your downloaded files is <code>/home/username<wbr>/Downloads</code>.
1. Use the following command: `python3 -i wupclient.py`.
1. Enter the IP address of your Wii U.
 - Don't know how to find it? Read [this](find-wiiu-ip-address).
1. Use the appropriate command depending on the region of your console:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>.
1. If the command worked, you will get the following response: `chmod returned 0x0`.
1. The error code should now be gone.

<!-- tabs:end -->