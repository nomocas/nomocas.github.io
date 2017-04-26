/**
 * @author Gilles Coomans
 */

const htslLexicon = require('htsl-lexicon');
const htslMetaTagLexicon = require('htsl-meta-tag-lexicon');
const badges = require('./badges-compounds');

module.exports = htslLexicon.createDialect('nomocas-htsl')
	.addCompounds(badges)
	.addCompounds((h) => {
		const meta = htslMetaTagLexicon.initializer(h.__first_level_babelute__);
		return {
			page(content) {
				return this
					.pageHead()
					.div(
						h.class('page-content')
						.main(
							h.id('app')
							.pageHeader(),
							content
						)
					);
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
					.libraries(content);
				// .contact()
				// .pageFooter();
			},
			pageHeader() {
				return this.header(
					h.class('page-header')
					.h1('Gilles Coomans')
					.p(h.class('subtitle'), 'Software Craftsman. Tools maker.')
				);
			},
			intro() {
				return this.section(
					h.class('intro')
					.h1('intro')
					.p('bla bla')
				);
			},
			libraries(libraries) {
				return this.section(
					h.class('libraries'),
					// .h2('libraries'),
					libraries
				);
			},
			contact() {
				return this.section(h.id('contact').h2('contact'));
			},
			pageFooter() {
				return this.footer(
					h.class('page-footer')
					.p('footer')
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
			library(name, sublibs) {
				return this.div(
					h.class('library')
					.a('https://github.com/nomocas/' + name, name)
					.div(h.class('badges').badges('nomocas', name, true)),
					sublibs
				);
			}
		};
	});

