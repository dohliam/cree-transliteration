# Cree syllabics transliteration

A JavaScript-based converter for transliterating Cree text to and from either Latin characters or syllabics.

The converter can be downloaded and used offline. There are no dependencies.

## Usage

To use, simply enter some text in either [Canadian Aboriginal Syllabics](https://en.wikipedia.org/wiki/Canadian_Aboriginal_syllabics) or Standard Roman Orthography (SRO) into the Input box and press the Convert button. The transliterated text will appear in the Output box at the bottom of the page.

## Transliteration

The converter is able to recognize syllabics from a variety of Cree dialects, but for transliteration into syllabics it currently defaults to using the conventions for western dialects (e.g., dot after syllable for medial _w_). This may be expanded in the future to allow for selecting the desired target dialect.

For transliterating into SRO, however, the syllabics orthographies of all dialects are recognized (e.g., dot before syllable for medial _w_, as in eastern dialects).

Likewise, transliteration into SRO defaults to using circumflexes for long vowels. An option for using macrons instead will be added in the future. However, either macrons or circumflexes can be entered into the input box for conversion into syllabics.

## Demo

[Online demo](https://dohliam.github.io/transliteration/cree/).

Screenshot:

![image](https://cloud.githubusercontent.com/assets/9295750/22109276/eb5733da-de0b-11e6-83ec-474daa6f47e7.png)

## Credits

* sample text from Little Cree Books provided by the [lcb-source](https://github.com/global-asp/lcb-source) project
* [skeleton-framework CSS](https://github.com/skeleton-framework/skeleton-framework)

## LICENSE

MIT.
