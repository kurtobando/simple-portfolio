// import axios from "axios";
import $ from "jquery";

function contactForm() {

	// store contact form
	let _formContact = document.forms.formContact;

	// listen submit in contact form
	_formContact.addEventListener("submit", function(e) {
		e.preventDefault();

		// 		_useAxios();
		_useJQuery();
	});

	// prepare AJAX request

	// 	function _useAxios() {
	// 		let config = {
	// 				headers: {
	// 					'Content-Type': 'application/x-www-form-urlencoded',
	// 					'X-Requested-With': 'xmlhttprequest'
	// 				}
	// 			},
	// 			url = _formContact.action;

	// 		axios.post(url, {
	// 				name: _formContact.elements.name.value,
	// 				email: _formContact.elements.email.value,
	// 				message: _formContact.elements.message.value
	// 			}, config)
	// 			.then(function(response) {
	// 				console.log("response : " + response);
	// 			})
	// 			.catch(function(error) {
	// 				console.log("error : " + error);
	// 			});
	// 	}

	function _useJQuery() {
		let formContact_message = $('#formContact_message');

		formContact_message.html('');

		$.ajax({
			url: _formContact.action,
			type: _formContact.method,
			data: $('form[name="formContact"]').serialize(),
			dataType: 'json',
			beforeSend: function() {
				formContact_message.html('loading ... please wait...');
			},
			success: function(returnData) {
				formContact_message.html(returnData.message);
				
				if(returnData.message === "Successfully Sent."){
					_formContact.elements.submit.disabled = true;
				}
			}
		});
	}
}


export default contactForm;