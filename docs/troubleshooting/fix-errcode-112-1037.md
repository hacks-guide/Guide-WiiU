# How To Fix The Error Code 112-1037

This page will guide you through the process of fixing the error code 112-1037.

### What You Need

- A working [Homebrew Installation](user-guide/introduction)
- [wupclient.py](https://raw.githubusercontent.com/dimok789/mocha/master/ios_mcp/wupclient.py) **(right-click -> Save link as... -> Click OK)**
- The 2.7 release of [Python](https://www.python.org/download/releases/2.7/)

### Instructions

1. Install Python 2.7 on your computer

### Fixing The Error Code

<!-- tabs:start -->

#### **Windows**

1. Power on your Wii U
1. Launch the Homebrew Launcher and launch Mocha
1. Go back to the Wii U Menu
1. On your computer, open the wupclient.py file with a text editor and change the IP address at line 29 with your console's then save it
1. Open up a command prompt window
1. Use the following command: `cd <directory>`
  - Example: <code>cd C:\Users\username<wbr>\Downloads</code>
1. Use the following command: `py -2 -i wupclient.py`
1. Use the appropriate command depending on the region of your console:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
1. If the command worked, you will get the following response: `chmod returned 0x0`
1. The error code should now be gone

#### **macOS & Linux**

1. Power on your Wii U
1. Launch the Homebrew Launcher and launch Mocha
1. Go back to the Wii U Menu
1. On your computer, open the wupclient.py file with a text editor and change the IP address at line 29 with your console's then save it
1. Open up a Terminal window
1. Use the following command: `cd <directory>`
 - On macOS, the most common place to find your downloaded files is <code>/Users/username<wbr>/Downloads</code>
 - On Linux, the most common place to find your downloaded files is <code>/home/username<wbr>/Downloads</code>
1. Use the following command: `python2 -i wupclient.py`
1. Use the appropriate command depending on the region of your console:
 - JPN: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001200a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
 - USA: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001210a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
 - EUR: <code>w.chmod("/vol<wbr>/storage_mlc01<wbr>/sys/title/00050030<wbr>/1001220a/content<wbr>/pages<wbr>/index.html", 0x644)</code>
1. If the command worked, you will get the following response: `chmod returned 0x0`
1. The error code should now be gone

<!-- tabs:end -->