/**
 * Nomocas website : Server Side App
 * 
 * @author Gilles Coomans
 */
/* eslint no-console:0 */
/**
 * for getting packages infos : 
 * http://registry.npmjs.org/babelute/latest
 * http://grokbase.com/t/gg/npm-/126n5pqvbg/npm-how-to-get-package-list-through-the-api
 */
const babelute = require('babelute'),
	nomocasHTSL = require('./js/nomocas-htsl-lexicon'), // my custom html lexicon
	nomocasData = require('./js/nomocas-data-lexicon'), // my custom data lexicon
	fs = require('fs'),
	parser = require('babelute-uus');

// PARSING and TRANSLATION
babelute.registerLexicon(nomocasData); // for parsing from uus
const data = parser.fromUUS(fs.readFileSync('./src/data/nomocas.bbl').toString()),
	htsl = data._translateLexemsThrough(nomocasHTSL);

// RENDERING
require('htsl-string-pragmatics'); // html string output engine
const h = nomocasHTSL.initializer(),
	rendered = '<!DOCTYPE html>' + h.homePage(htsl, {}).$toHTMLString();

// TO FS
fs.writeFileSync('./index.html', rendered);

