// ==UserScript==
// @name         Legend Express Agar.io Extension
// @namespace    Legend Express Agario Mod
// @version      1.8
// @description  Agario Mod - Legend,Ogario,Kitty,Old Skins,Animated Skins,Language Packs,Manual User Scripts,Chat,60++ Macros/Hotkeys(Tricksplit,Doublesplit,Quick Feeding,Popsplit,Auto Coins,Freeze Cell Macro,Auto respawn)
// @homepage     https://www.jimboy3100.github.io
// @author       Jimboy3100
// @license      MIT
// @icon         https://jimboy3100.github.io/banners/CropedImage128.gif
// @match        https://agar.io/*
// @match        https://play.google.com/*
// @downloadURL  https://jimboy3100.github.io/LMexpress/LMexpress.user.js
// @updateURL    https://jimboy3100.github.io/LMexpress/LMexpress.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      hslo.io
// @connect	 agartool.io
// @connect	 imasters.org.ru
// @connect	 cdn.ogario.ovh
// @connect      deltav4.glitch.me
// @connect      jimboy3100.github.io
// @grant        GM_registerMenuCommand

// ==/UserScript==

// Legend Mod by Jimboy3100
/*MIT License*/

GM_registerMenuCommand('Legend Mod Website', function() {
    window.open("http://jimboy3100.github.io");
}, 'r');
GM_registerMenuCommand('LM Library', function() {
    window.open("https://github.com/jimboy3100/jimboy3100.github.io/");
}, 'r');
GM_registerMenuCommand('Donate for Legend Mod', function() {
    window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CM3GDVCW6PBF6");
}, 'r');

var version = 2;

// Check location
if (location.host === "agar.io" && location.pathname === "/") {
    var url = window.location.href;
    localStorage.setItem("url", url);
    location.href = "https://agar.io/legendmod" + location.hash;
    return;
}
var modVersion = GM_info.script.version;
// Inject Legend
function inject(page) {
    var page = page.replace("</body>", "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}
document.documentElement.innerHTML = "";
var LMdetails;
var mode = location.pathname.slice(1);
var modwebsite;
switch (mode) {
    case 'normal':
        modwebsite = 'https://agar.io';
        Htmlscript(modwebsite);
        break;
    case 'hslo':
        modwebsite = 'https://hslo.io/install.user.js';
        Userscript(modwebsite);
        break;
    case 'agartool':
        modwebsite = 'https://www.agartool.io/agartool.user.js';
        Userscript(modwebsite);
        break;
    case 'vanilla':
        modwebsite = 'http://imasters.org.ru/agar/js/vanilla.user.js';
        Userscript(modwebsite);
        break;		
    case 'ogario':
        modwebsite = 'https://cdn.ogario.ovh/v4/beta/ogario.v4.user.js';
        Userscript(modwebsite);
        break;		
    case 'delta':
        modwebsite = 'https://deltav4.glitch.me/v4/index.html';
        Htmlscript(modwebsite);
        break;
    case 'neo': 
        modwebsite = 'kyriakidisdimitrios.github.io/test/Lm/kyriakidisdimitrios.github.io/test/Lm/play.html?' + version;
        Htmlscript(modwebsite);
		setTimeout(function() {		
			modwebsite = 'https://jimboy3100.github.io/ExampleScripts/Neoprivate.js';
			Userscript(modwebsite);
		}, 5000);
	break;	
    case 'mobile': 
        modwebsite = 'kyriakidisdimitrios.github.io/test/Lm/kyriakidisdimitrios.github.io/test/Lm/play.html';
        Htmlscript(modwebsite);
		setTimeout(function() {		
			modwebsite = 'https://jimboy3100.github.io/ExampleScripts/gamepad.user.js';
			Userscript(modwebsite);
		}, 5000);
	break;		
    case 'captcha':
        modwebsite = 'https://jimboy3100.github.io/ogario/captcha.html'
        Htmlscript(modwebsite);
        break;	
    case 'legendmod': default:
        modwebsite = 'kyriakidisdimitrios.github.io/test/Lm/kyriakidisdimitrios.github.io/test/Lm/play.html?' + version;
        Htmlscript(modwebsite);
        break;
}

function Htmlscript(modwebsite) {
    LMdetails = GM_xmlhttpRequest({
        method: "GET",
        url: modwebsite,
        synchronous: false,
        onload: function(legend) {
            var doc = inject(legend.responseText);
            document.open();
            document.write(doc);
            setTimeout(function() {
                window.history.pushState(null, null, "/");
            }, 2000);
            document.close();
        }
    });
}

function Userscript(modwebsite) {
    LMdetails = GM_xmlhttpRequest({
        method: "GET",
        url: modwebsite,
        onload: function(e) {
            new Function(['GM_info, GM_xmlhttpRequest'], e.responseText)(GM_info, GM_xmlhttpRequest);
        }
    });
}

if (location.host == "play.google.com") {
    window.close();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
