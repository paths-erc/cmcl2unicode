/**
 * Reads the content of the uploaded file and sets it as target's value
 * @param  {object} e      event of file input
 * @param  {object} target input element to value with returned text
 */
function readFile(e, target){
  if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
    alert('The File APIs are not fully supported in this browser.');
  }
  var f = e.target.files[0];
  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      target.value = contents;
    };
     r.readAsText(f);
  } else {
    alert("Failed to load file");
  }
}

/**
 * Gets cmcl textarea's value, previews it in cmcl previewer, converts the text to unicode and sets the new text as unicode's textarea value and finally previews the new unicode texte in the unicode previewer
 * @return {void}
 */
function toUnicode(){
  var txt = cmcl.value,
      converted = cpt.cmcl2unicode(txt);
  uc.value = ucrend.innerText = converted;
  cmclrend.innerText = txt;
}

/**
 * Gets unicode textarea's value, previews it in unicode previewer, converts the text to cmcl encoding system and sets the new text as cmcl's textarea value and finally previews the new cmcl text in the cmcl previewer
 * @return {void}
 */
function toCmcl(){
  var txt = uc.value,
      converted = cpt.unicode2cmcl(txt);
  cmcl.value = cmclrend.innerText = converted;
  ucrend.innerText = txt;
}

/**
 * CMCL textarea input
 * @type {object}
 */
var cmcl =document.getElementById('cmcl');

/**
 * Unicode textarea input
 * @type {object}
 */
var uc = document.getElementById('unicode');

/**
 * CMCL previewer
 * @type {object}
 */
var cmclrend = document.getElementById('cmclrender');

/**
 * Unicode previewer
 * @type {object}
 */
var ucrend = document.getElementById('unicoderender');

/**
 * Instance of the Coptic class
 * @type {object}
 */
var cpt = new Coptic();

// Cmcl file uploader listener
document.getElementById('upload-cmcl').addEventListener('change', function(e){
  readFile(e, cmcl);
});

// Unicode file uploader listener
document.getElementById('upload-uc').addEventListener('change', function(e){
  readFile(e, uc);
});

// Convert to unicode button listener
document.querySelectorAll(".tounicode")[0].addEventListener('click', function(){
  toUnicode();
});

// Convert to Cmcl button listener
document.querySelectorAll(".tocmcl")[0].addEventListener('click', function(){
  toCmcl();
});

// Cmcl keyup listener
cmcl.addEventListener('keyup', function(e){
  toUnicode();
});

// Unicode keyup listener
uc.addEventListener('keyup', function(){
  toCmcl();
});

document.querySelectorAll(".ucdebug")[0].addEventListener('click', function(){
  alert(cpt.getUnicode(unicode.value));
});
document.querySelectorAll(".cmcldebug")[0].addEventListener('click', function(){
  alert(cpt.getUnicode(cmcl.value));
});
