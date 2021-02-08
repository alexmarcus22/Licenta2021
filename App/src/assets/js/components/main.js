document.addEventListener("DOMContentLoaded", (event) => {
  console.clear();
  console.log("Development in progress.");

  var Utilities = function Utilities(comp) {
    function init() {
      attachEvents();
    }

    function attachEvents() {
      jQuery.validator.addMethod("placeholder", function (value, element) {
        return value != $(element).attr("placeholder");
      }, jQuery.validator.messages.required);
    }

    return {
      init: init,
    };
  };

  var Util = new Utilities(".body");
  Util.init();
});
