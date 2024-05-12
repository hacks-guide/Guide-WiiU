# 阻止更新
---
目前所有已知的 Wii U 漏洞（例如 Nintendo Switch RCM 漏洞）都可以被通过更新系统失效。 虽然 Wii U 不再会得到任天堂官方的技术支持，但任天堂仍然可以为其发布新的系统更新。 Namely, the updates 5.5.3 up to 5.5.6 were all released after the Wii U was discontinued, so blocking updates is still a recommended action.

While Aromas's PayloadLoader already has built-in update blocking functionality, it is recommended to delete the update folder to effectively block system updates. If you get a yellow warning screen while booting into Aroma, the update folder still exists and it is recommended to delete it using the guide below.

### 简介 {docsify-ignore}

Currently, one way exists to effectively block updates on the Wii U system:

1. Make sure you have the latest Aroma beta.
1. Boot into Aroma.
    - If you got the yellow warning screen, press X to block updates.
    - If you didn't get the warning, but the AutobootMenu says "Updates not blocked!", press and hold + (Plus) **and** - (Minus) at the same time until it says they are blocked.
