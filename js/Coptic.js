/**
 * Conversion utility used to transform text string from CMCL encoding system to Unicode standard and vice-versa
 * @copyright Julian Bogdani <julian.bogdani@uniroma1.it>
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @example new Coptic().unicode2cmcl(text) will tramsform Unicode encoded text to CMCL encoded text
 * @example new Coptic().cmcl2unicode(text) will tramsfor CMCL encoded text to Unicode encoded text
 */
function Coptic(){
  var map = {
      //"\u2c96\ufe26\u2c8e\ufe26\u2c98\ufe26": "M", Resa con maiuscole
      "\u2C97\ufe24\u2C8F\ufe26\u2C99\ufe25": "M",
      //"\u2c98\ufe26\u2c9a\ufe26\u2ca6\ufe26": "N", Resa con maiuscole
      "\u2C99\ufe24\u2C9B\ufe26\u2CA7\ufe25": "N",
      //"\u2c92\ufe26\u2c8e\ufe26\u2c98\ufe26": "X", Resa con maiuscole
      "\u2C93\ufe24\u2C8F\ufe26\u2C99\ufe25": "X",
      //"\u03ea\ufe26\u2ca4\ufe26": "L", Resa con maiuscole
      "\u03EB\ufe24\u2CA5\ufe25": "L",
      //"\u2ca0\ufe26\u2c9a\ufe26\u2c80\ufe26": "D", Resa con maiuscola
      "\u2CA1\ufe24\u2C9B\ufe26\u2C81\ufe25": "D",
      //"\u2cac\ufe26\u2ca4\ufe26": "F", Resa con maiuscola
      "\u2C8F\ufe24\u2CA5\ufe25": "F",
      //"\u2cac\ufe26\u2ca2\ufe26\u2ca4\ufe26": "G", Resa con maiuscola
      "\u2CAD\ufe24\u2CA3\ufe26\u2CA5\ufe25": "G",
      //"\u2caa\ufe26\u2c90\ufe26": "O", Resa con maiuscola
      "\u2CAB\ufe24\u2C91\ufe25": "O",
      "\u2c9f\u2ca9": "U",
      //"\u2c92\ufe26\u2c8e\ufe26\u2ca4\ufe26": "I", Resa con maiuscola
      "\u2C93\ufe24\u2C8F\ufe26\u2CA5\ufe25": "I",
      //"\u2c92\ufe26\u2cb0\ufe26\u2ca4\ufe26": "K", Resa con maiuscola
      "\u2C93\ufe24\u2CB1\ufe26\u2CA5\ufe25": "K",
      //"\u2c92\ufe26\u2ca4\ufe26": "E", Resa con maiuscola
      "\u2C93\ufe24\u2CA5\ufe25": "E",
      //"\u2ca4\ufe26\u2c8e\ufe26\u2ca2\ufe26": "Q", resa con maiuscola
      "\u2CA5\ufe24\u2C8F\ufe26\u2CA3\ufe25": "Q",
      //"\u2c92\ufe26\u2c8e\ufe26\u2c96\ufe26": "W",resa con maiuscola
      "\u2C93\ufe24\u2C8F\ufe26\u2C97\ufe25": "W",
      "<unicode>\u003A\u007E</unicode>": "2",
      "\u0302":"@",
      "\u0308": ":",
      "\u2013": "~",
      "\u25a1": ";",
      "\u02fd": "?",
      "\u2040": "\"",
      "\u2591": "\/",
      "\u00ba": ">", // TODO: NON FUNZIONA
      "\u0304": "+",
      "\ufe26": "_",
      "\u2016": "#",
      "\u00b7": "$",
      "\u0387": ".",
      ".": "&",
      "\u2c80": "A",
      "\u2c81": "a",
      "\u2c82": "B",
      "\u2c83": "b",
      "\u2c85": "g",
      "\u2c87": "d",
      "\u2c89": "e",
      "\u2c8b": "S",
      "\u2c8c": "Z",
      "\u2c8d": "z",
      "\u2c8f": "H",
      "\u2c91": "q",
      "\u2c93": "i",
      "\u2c95": "k",
      "\u2c97": "l",
      "\u2c99": "m",
      "\u2c9b": "n",
      "\u2c9d": "x",
      "\u2c9f": "o",
      "\u2ca1": "p",
      "\u2ca3": "r",
      "\u2ca5": "s",
      "\u2ca7": "t",
      "\u2ca9": "u",
      "\u2cab": "P",
      "\u2cad": "C",
      "\u2caf": "T",
      "\u2cb1": "w",
      "\u2cc1": "R",
      "\u2cc9": "V",
      "\u03e3": "y",
      "\u03e5": "f",
      "\u03e7": "J",
      "\u03e9": "h",
      "\u03eb": "j",
      "\u03ed": "c",
      "\u03ef": "Y",
      ":": "7",
      "\u00f7": "1",
      "\u02d9": "3",
      "\u2019": "4",
      "\u0323": "6",
      "\u00BB": "8",
      "\u2e16": "9",
      "\u2ce7": "R",
      "\u2c8e": "H"
  };

  var entities = [
    {
      "s_cmcl": "&([0-9]{1,2})n;",
      "r_uc": function(m, i){
          return "<unicode>[\u00B1" + i +"]</unicode>";
        }
    },
    {
      "s_cmcl": "&([0-9]{1,2})\\?;",
      "r_uc": function(m, i){
          return "<unicode>" + ("\u0020\u002E").repeat(i) + "</unicode>";
        }
    },
    {
      "s_cmcl": "&\\?(cap|capitale);",
      "r_uc": function(m, i){
        return "<unicode>" + ("\u0020\u002E") + "</unicode>";
      }
    },
    {
      "s_cmcl": "&[0-9]{1,2}b;",
      "r_uc": function(m, i){
        return '';
      }
    },
    {
      "s_cmcl": "&([a-z]{1})\\?;",
      "r_uc": function(m, i){
        return i + '<unicode>\u0323</unicode>';
      }
    },
    {
      "s_cmcl": "&coppa;",
      "r_uc": function(m, i){
        return "<unicode>\u03D9</unicode>";
      }
    },
    // Coptonew litterary strings
    {
      "s_cmcl": "&(basilios|Crs|Cs|eiote|ekklHsia|fq|i:lHm|iHl|iHs|ilHm|is|isrl|iws|js|monaCos|oute|pna);",
      "r_uc": function(m, i){
        return i;
      }
    },
    {
      "s_cmcl": "&ebol_compresso;",
      "r_uc": function(){
        return 'ebol';
      }
    },
    {
      "s_cmcl": "&etcompresso;",
      "r_uc": function(){
        return "et";
      }
    },
    {
      "s_cmcl": "&([a-z]{1})sovrastante;",
      "r_uc": function(m, i){
        return i;
      }
    },
    {
      "s_cmcl": "&Hspir;",
      "r_uc": function(){
        return "<unicode>\u2C8F\u0307</unicode>";
      }
    },
    {
      "s_cmcl": "&\.b;",
      "r_uc": function(){
        return ". ";
      }
    }
  ];

  /**
   * Finds/replaces all entities map entries in text,
   * performing a global replace foreach entity item.
   * This is a one way encoding only (only cmcl -> unicode)
   * @param  {string} txt    Input text to be processed
   * @param  {boolean} toCmcl If true, no replacement will be performed (one-way encoding)
   * @return {string}        Replaced text
   */
  function convertEntities(txt, toCmcl){
    entities.forEach(function(el){
      if (toCmcl){
        return;
      }
      txt = txt.replace(new RegExp(el.s_cmcl, 'g'), el.r_uc);
   });
   return txt;
  }

  /**
   * Finds/Replaces in input text all entries on chracter map
   * performing a global replace
   * @param  {string} txt    Input text
   * @param  {boolean} toCmcl If true Unicode -> Cmcl replace will be performed, otherwise Cmcl -> Unicode
   * @return {string}        Replaced string
   */
  function convertMap(txt, toCmcl){
    var search, replace;
    for(var i in map){
      if(map[i] === '>')
        continue;
      if(toCmcl){
        search = i;
        replace = map[i];
      } else {
        search = map[i];
        replace = i;
      }

      search = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      search = '(' + search + ')(?![^<]*>|[^<>]*</)';
      txt = txt.replace(new RegExp(search, 'g'), replace);
    }
    return txt;
  }

  function convertDiacritics(txt, toCmcl){
    txt = txt.replace('\n', '\n ');
    // This is Orlandi's (Cmcl's) superlinear stroke rendered by underscore (_)
    var os = '\uFE26';
    var new_txt = [];

    // Loop through each word
    txt.split(' ').forEach(function(w){
      if(w.indexOf(os) < 0){
        new_txt.push(w);
        return;
      }

      var new_w = '';

      for (var i = 0; i < w.length; i++) {
        var s = w.charAt(i);
        if (s !== os){
          new_w += s;
        }

        // stroke is second element in 2 digits word => U+0304
        if ( s === os && i === 1 && w.length === 2){
          new_w += '\u0304';

        // stroke is second element in more than 2 digits word => U+FE24
        } else if ( s === os && i === 1 && w.length > 2 ){
          new_w += '\uFE24';

        // stroke is last element (in more than 2 digits word) => U+FE25
        } else if ( s === os && i === (w.length - 1)  && w.length > 2){
          new_w += '\uFE25';

        // stroke is mid element (in more than 3 digits word) => U+FE25
      } else if ( s === os && i > 2 && w.length > 3){
        new_w += '\uFE26';
      }

    }

      new_txt.push(new_w);
    });

    return new_txt.join(' ').replace('\n ', '\n');

  }

  /**
   * Bidirectional convertion tool: CMCL to Unicode and vice-versa
   * @param  {string} txt String to be converted
   * @param {boolean} toCmcl If false (default option) CMCL to Unicode conversion will be performed otherwize Unicode to CMCL
   * @return {string} Converted string
   */
  function convert(txt, toCmcl){

    txt = convertEntities(txt, toCmcl);
    txt = convertMap(txt, toCmcl);
    txt = convertDiacritics(txt, toCmcl);

    // finally clean text
    txt = txt.replace(/<unicode>/g, '');
    txt = txt.replace(/<\/unicode>/g, '');

    return txt;
  }

  /**
   * Public method to convert CMCL encoded text to Unicode
   * @param  {string} txt CMCL encoed text to be converted
   * @return {string}     Unicode converted text
   */
  this.cmcl2unicode = function(txt){
    return convert(txt);
  };

  /**
   * Public method to convert Unicode encoded text to CMCL
   * @param  {string} txt Unicode encoded text
   * @return {string}     CMCL converted text
   */
  this.unicode2cmcl = function(txt){
    return convert(txt, true);
  };


  /**
   * Returns Unicode reppresentation of string
   * @param  {string} txt input string
   * @return {string}     unicode repperesentation of input string
   */
  this.getUnicode = function(txt){
    var new_txt = '';
    for (var i = 0; i < txt.length; i++) {
      var codeHex = txt.charCodeAt(i).toString(16).toUpperCase();
      new_txt += "\U+" + codeHex + ' ';
    }
    return new_txt;
  };
}
