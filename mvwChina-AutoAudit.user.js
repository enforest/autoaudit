// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  try to take over the world!
// @author       You
// @match        http://ekmz.mvwchina.com/journal/audit
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mvwchina.com
// @grant        none
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://z.chaoxing.com/js/jquery-3.5.0.min.js
// ==/UserScript==

// waitForKeyElements (".layui-btn-primary",check);

// function check() {
//     'use strict';
//     var boxes = document.getElementsByClassName("layui-unselect layui-form-checkbox")
//     boxes[boxes.length-1].click();
//     document.getElementById("approve-batch-btn").click();
//     setTimeout(function() {},10000);
// }

(function() {
    'use strict';
    setTimeout(function() {
    var i;
    for(i=1;i<document.getElementsByClassName("layui-btn layui-btn-mini layui-btn-radius").length;i+=3) {
        document.getElementsByClassName("layui-btn layui-btn-mini layui-btn-radius")[i].click();}
    }, 10000)
})();
