import axios from "axios";

function contactForm() {
	
	// store contact form
	let _formContact = document.getElementById("formContact"),
		_formContact_message = document.getElementById("formContact_message");
	
	// listen submit in contact form
	_formContact.addEventListener("submit", function(e) {
		e.preventDefault();
		
		_formContact_message.innerHTML = "";			
		_formContact_message.innerHTML = "loading ...";
		
		_axiosdefault();
	});

	// Send a POST request
	function _axiosdefault() {
		
		var bodyFormData = new FormData(_formContact);

		axios({
			method: 'post',
			url: '../php/',
			data: bodyFormData,
			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
				'X-Requested-With': 'XMLHttpRequest'
			}
		})
		.then(function(response){
			console.log(response);
			_formContact_message.innerHTML = response.data.message;
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

export default contactForm;	