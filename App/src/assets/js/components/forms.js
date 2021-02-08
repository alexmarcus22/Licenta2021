var FormComponent = function FormComponent(comp) {
	var component = document.querySelectorAll(comp);
	if (component === null) return;

	function init() {
		attachEvents();
	}

	function attachEvents() {
		toggleViewPassword();
		jQuery.validator.addMethod("placeholder", function (value, element) {
			return value != $(element).attr("placeholder");
		}, jQuery.validator.messages.required);
		validateForm();
	}

	function validateForm(form, data) {
		$("#registerForm").validate({
			rules: {
				firstName: {
					required: true
				},
				lastName: {
					required: true
				},
				emailAccount: {
					required: true
				},
				confirmPasswordRegister: {
					equalTo: "#passwordRegister"
				}
			},
			messages: {
				confirmPasswordRegister: "The passwords don't match."
			},
			submitHandler: (form) => {
				$(form).submit()
			}
		})
	}

	function toggleViewPassword() {
		document.addEventListener("DOMContentLoaded", function () {
			$(document).on("click", ".input-icon", function (e) {
				e.preventDefault();
				var found = false;
				var currentFormGroupPassword = null;

				var parentEls = $(this).parents().map(function () {
					return this;
				})
				for (var i = 0; i < parentEls.length && found != true; i++) {
					if (parentEls[i].className === "form-group") {
						found = true;
						currentFormGroupPassword = parentEls[i];
					}
				}

				var currentPasswordInput = currentFormGroupPassword.lastElementChild;
				if (currentPasswordInput.type === "password") {
					currentPasswordInput.setAttribute("type", "text");
				} else {
					currentPasswordInput.setAttribute("type", "password");
				}
				$(this).toggleClass("fa-eye-slash").toggleClass("fa-eye");
			});
		});
	}

	return {
		init: init,
	};
};

var form = new FormComponent(".form-component");
form.init();
