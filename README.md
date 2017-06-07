# CMCL to Unicode bidirectional converter
A vanilla **javascript**, simple to use bidirectional convertet from [Orlandi's CMCL](http://cmcl.it) encoding system to strict standard Unicode and the other way round.

## Working demo
A working demo can be found on the PAThs website: [http://paths.uniroma1.it/cmcl2unicode/index.html](http://paths.uniroma1.it/cmcl2unicode/index.html)

## How to use
Just type or paste in one of the two available textareas and the text will automatically be converted to the other format. For instance in you type/paste text in the CMCL textarea, the unicode version of the typed/pasted text will be automatically available.

A simple file uplader is also available. It works **simple text files**. There is **no support** for rich text files (\*.doc, \*.docx. \*.odt, etc). Just click on the *Upload a file* butto, select the file from your hard drive and its contents will be pasted in the textarea below.

No server side scripting is used for file uploads & parsing. Your browser should support the [HTML5 File API](https://developer.mozilla.org/en-US/docs/Web/API/File) for this function to work properly.

**No file will be uploaded on our servers.**

## Fonts
A specific font, **Coptonew**, has been developed to properly render the CMCL encoding. This font is embedded in the main index page and is used to render the preview of the CMCL encoded version.

For the Unicode encoded version **Antinoou** font is used, embedded to the main index page. It is a standard font designed for coptic that makes no use of the private Unicode area. More information about Antinoou font and its keyboard layout can be found [here](http://www.evertype.com/fonts/coptic/).

## Copyright & License
Copyright: Julian Bogdani <julian.bogdani@uniroma1.it> and [PATHs](http://paths.uniroma1.it) 2016.

License: [MIT](https://opensource.org/licenses/MIT).

Version 1.
