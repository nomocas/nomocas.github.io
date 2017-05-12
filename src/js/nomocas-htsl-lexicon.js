/**
 * @author Gilles Coomans
 */
'use strict';

const htslLexicon = require('htsl-lexicon');
const htslMetaTagLexicon = require('htsl-meta-tag-lexicon');
const badges = require('./badges-compounds');
const ga = require('./ga');
const contactForm = require('./contact-formspree');

module.exports = htslLexicon.createDialect('nomocas-htsl')
	.addCompounds(badges)
	.addCompounds(contactForm)
	.addCompounds(ga)
	.addCompounds((h, isFirstLevel) => {
		const meta = htslMetaTagLexicon.initializer(isFirstLevel);
		return {
			page(content) {
				return this
					.pageHead()
					.main(
						h.id('app')
						.pageHeader(),
						content
					)
					.ga('UA-63787213-1');
			},
			pageHead() {
				return this
					._use(meta.pageHead(
						'nomocas : software craftsman. home page',
						'full-stack javascript developer',
						'software-architect',
						'Gilles Coomans'
					))
					.linkCSS('./public/style.css');
			},
			homePage(content) {
				return this.page(
					h.homeContent(content)
				);
			},
			homeContent(content) {
				return this
					// .intro('this is intro')
					.socialLinks()
					.libraries(content)
					.section(
						h.id('contact')
						.contactForm()
					)
					.pageFooter();
			},
			pageHeader() {
				return this.header(
					h.class('page-header')
					.h1('Gilles Coomans')
					.p(h.class('subtitle'), 'Software Craftsman. Tools maker.')
				);
			},
			intro(content) {
				return this.section(
					h.class('intro')
					.h1('intro'),
					content
				);
			},
			socialLinks() {
				return this.div(
					h.class('social-links')
					.a('https://github.com/nomocas', 'github', h.classes('github-button'))
					.a('https://be.linkedin.com/pub/gilles-coomans/22/776/100', 'linkedin', h.classes('linkedin-button'))
					// .a('https://twitter.com/GillesCoomans', 'twitter', h.classes('twitter-button'))
				);
			},
			libraries(libraries) {
				return this.section(
					h.class('libraries'),
					libraries
				);
			},
			pageFooter() {
				return this.footer(
					h.class('page-footer'),
					'Brussels | BE | Tel: ',
					h.a('tel:+32487383143', '+32 487 383 143')
				);
			},

			/**
			 ************** nomocas-data bridge
			 */

			description(message) {
				return this.div(h.class('description'), message);
			},
			librariesGroup(name, libraries) {
				return this.div(
					h.class('libraries-group')
					.h3(name),
					libraries
				);
			},
			library(name, sublibs, noNPMBadges) {
				return this.div(
					h.class('library')
					.a('https://github.com/nomocas/' + name, name)
					.div(h.class('badges').if(noNPMBadges, h.badgesWithoutNPM('nomocas', name, false), h.badges('nomocas', name, true))),
					sublibs
				);
			}
		};
	});

