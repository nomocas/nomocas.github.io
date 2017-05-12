/**
 * Lib Badges
 * @author Gilles Coomans
 */
'use strict';


module.exports = (h) => {
	return {
		badge(href, imgSrc, imgAlt) {
			return this.a(href, h.img(imgSrc, h.attr('alt', imgAlt)));
		},
		badges(author, libName, coveralls) {
			return this
				.badgeTravis(author, libName)
				.badgeBithound(author, libName)
				.if(coveralls, h.badgeCoveralls(author, libName))
				.badgeDependencies(author, libName)
				// .badgeDevDependencies(author, libName)
				.br()
				.badgeNpmDownloads(author, libName)
				.badgeNpm(author, libName)
				.badgeLicence(author, libName);
			// .badgeStandardVersion(author, libName);
		},
		badgesWithoutNPM(author, libName, coveralls) {
			return this
				.badgeTravis(author, libName)
				.badgeBithound(author, libName)
				.if(coveralls, h.badgeCoveralls(author, libName))
				.badgeDependencies(author, libName)
				.br()
				.badgeLicence(author, libName);
		},
		badgeTravis(author, libName) {
			return this.badge(
				'https://travis-ci.org/' + author + '/' + libName,
				'https://img.shields.io/travis/' + author + '/' + libName + '/master.svg',
				'Travis branch'
			);
		},
		badgeNpm(author, libName) {
			return this.badge(
				'https://npmjs.org/package/' + libName,
				'https://img.shields.io/npm/v/' + libName + '.svg',
				'npm'
			);
		},
		badgeNpmDownloads(author, libName) {
			return this.badge(
				'https://npmjs.org/package/' + libName,
				'https://img.shields.io/npm/dm/' + libName + '.svg',
				'npm-downloads'
			);
		},
		badgeLicence(author, libName) {
			return this.badge(
				'https://npmjs.org/package/' + libName,
				'https://img.shields.io/npm/l/' + libName + '.svg',
				'licence'
			);
		},
		badgeDependencies(author, libName) {
			return this.badge(
				`https://www.bithound.io/github/${ author }/${ libName }/master/dependencies/npm`,
				`https://www.bithound.io/github/${ author }/${ libName }/badges/dependencies.svg`,
				'bitHound Dependencies'
			);
		},
		badgeDevDependencies(author, libName) {
			return this.badge(
				'https://npmjs.org/package/' + libName,
				'https://img.shields.io/david/dev/' + author + '/' + libName + '.svg',
				'dev-dependencies'
			);
		},
		badgeBithound(author, libName) {
			// [![bitHound Overall Score]()](https://www.bithound.io/github/nomocas/elenpi)
			return this.badge(
				'https://www.bithound.io/github/' + author + '/' + libName,
				'https://www.bithound.io/github/' + author + '/' + libName + '/badges/score.svg',
				'bitHound Overall Score'
			);
		},

		badgeCoveralls(author, libName) {
			// [![Coverage Status](https://coveralls.io/repos/github/nomocas/elenpi/badge.svg?branch=master)](https://coveralls.io/github/nomocas/elenpi?branch=master)
			return this.badge(
				'https://coveralls.io/github/' + author + '/' + libName + '?branch=master',
				'https://coveralls.io/repos/github/' + author + '/' + libName + '/badge.svg?branch=master',
				'Coverage Status'
			);
		},

		// @TODO: still to be done
		badgeStandardVersion(author, libName) {
			return this.badge(
				'https://npmjs.org/package/' + libName,
				'https://img.shields.io/david/dev/' + author + '/' + libName + '.svg',
				'dev-dependencies'
			);
		}
	};
};


//

