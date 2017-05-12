/*
 * @Author: Gilles Coomans
 * @Date:   2017-05-12 09:01:02
 * @Last Modified by:   Gilles Coomans
 * @Last Modified time: 2017-05-12 09:01:50
 */

'use strict';

module.exports = () => ({
	ga(key) {
		return this.scriptRaw(`
	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	ga('create', '${ key }', 'auto');
	ga('send', 'pageview');
`);
	}
});

