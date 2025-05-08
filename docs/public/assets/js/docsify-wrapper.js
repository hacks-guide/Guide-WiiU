/*
    Copyright (C) 2024 Nintendo Homebrew

    SPDX-License-Identifier: MIT
*/

const map = new WeakMap()

function checkDocsify(callback) {
    if (map.has(callback))
        return;
    map.set(callback, true);
    if (document.readyState === 'complete')
        callback();
    else
        window.addEventListener('load', callback, false);
}

checkDocsify(() => {
    if(!window.location.hash)
        return;

    if(window.location.hash[1] == '/') {
        path = window.location.hash.substring(1);
        window.location.href = path;
    }
})
