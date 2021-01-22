var FormComponent = function FormComponent(comp) {
  var component = document.querySelectorAll(comp);
  if (component === null) return;

  function init() {
    attachEvents();
  }

  function attachEvents() {
    toggleViewPassword();
  }

  function toggleViewPassword() {
    // $(document).on("click", "svg.input-icon", (e) => {
    // 	var inputIconSVG = document.querySelectorAll("svg.input-icon");
    // 	var inputIconPATH = document.querySelectorAll("path");
    // 	inputIconSVG.forEach((el) => {
    // 		if(el === e.target) {
    // 			console.log('SVG');
    // 			el.classList.toggle("fa-eye-slash");
    // 			el.classList.toggle("fa-eye");
    // 		}
    // 	})
    // 	inputIconPATH.forEach((el) => {
    // 		if(el === e.target) {
    // 			console.log('PATH');
    // 			el.classList.toggle("fa-eye-slash");
    // 			el.classList.toggle("fa-eye");
    // 		}
    // 	})
    // })
    document.addEventListener('DOMContentLoaded', function () {
      $(document).on('click', '.input-icon', function () {
        $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye');
      });
    });
  }

  return {
    init: init
  };
};

var form = new FormComponent(".form-component");
form.init();