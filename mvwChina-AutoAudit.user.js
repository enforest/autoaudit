// ==UserScript==
// @name         mvwChina-AutoAudit
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  try to take over the world!
// @author       You
// @match        http://ekmz.mvwchina.com/journal/audit
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function() {
    var i;
    for(i=1;i<document.getElementsByClassName("layui-btn layui-btn-mini layui-btn-radius").length;i+=3) {
        document.getElementsByClassName("layui-btn layui-btn-mini layui-btn-radius")[i].click();}
    }, 20000)
})();
