// script properties

var include_num = 1;
var bold = 0;

// ---------- site indexer variable, just an array for now ----------


var s = new Array();

s[0] = "Valve Developer Community | Category:Level Design FAQ^https://developer.valvesoftware.com/wiki/Category:Level_Design_FAQ^ This is a directory of Frequently Asked Questions about level editing and using the Hammer editor.";
s[1] = "Valve Developer Community | Creating a Material^https://developer.valvesoftware.com/wiki/Creating_a_Material^This tutorial is a step-by-step guide to creating a brand new material, including the creation of the material's texture. ";
s[2] = "W3 Schools | HTML Styles - CSS^https://www.w3schools.com/html/html_css.asp^CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once.";


//s[1] = "^^";

// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("d=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.howto_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Think there should be results for that?<p> Please let us know! We will add it to our database.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}