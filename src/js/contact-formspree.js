/*
 * @Author: Gilles Coomans
 * @Date:   2017-04-30 11:10:05
 * @Last Modified by:   Gilles Coomans
 * @Last Modified time: 2017-05-03 15:40:41
 */
/* src: https://www.sanwebe.com/2013/10/css-html-form-styles */

'use strict';
module.exports = (h) => {
	return {
		contactForm() {
			return this
				.form(
					h.class('bootstrap-frm')
					.attr('action', 'http://formspree.io/gilles.coomans@gmail.com')
					.attr('method', 'POST')
					.h2(
						h.text('Contact')
						.span('Please fill all the texts in the fields.')
					)
					.textInput('',
						h.attr('id', 'name')
						.attr('name', 'name')
						.prop('required', true)
						.attr('placeholder', 'Your Full Name')
					)
					.emailInput('',
						h.attr('id', '_replyto')
						.prop('required', true)
						.attr('name', '_replyto')
						.attr('placeholder', 'Valid Email Address')
					)
					.textarea(
						h.attr('id', 'message')
						.prop('required', true)
						.attr('name', 'message')
						.attr('placeholder', 'Your Message to Us')
					)
					.select(
						h.attr('name', 'selection')
						.prop('required', true)
						.option('Job Inquiry', 'Job Inquiry')
						.option('General Question', 'General Question')
					)
					.hiddenInput('//nomocas.github.io/#thanks', h.attr('name', '_next'))
					.hiddenInput('nomocas.github.io contact form', h.attr('name', '_subject'))
					.textInput('', h.attr('name', '_gotcha').display(false))
					.br()
					.submitInput('send', h.class('button'))
					.div(h.id('thanks').display(false).p('Message is sent. Thanks...'))
				)
				.scriptRaw("if (window.location.hash == '#thanks') document.getElementById('thanks').style.display = 'block';");
		}
	};
};

