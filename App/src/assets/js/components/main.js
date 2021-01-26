document.addEventListener("DOMContentLoaded", (event) => {
  console.clear();
  console.log("Development in progress.");

  var Utilities = function Utilities(comp) {
    function init() {
      attachEvents();
    }

    function attachEvents() {}

    return {
      init: init,
    };
  };

  var Util = new Utilities(".body");
  Util.init();
});
