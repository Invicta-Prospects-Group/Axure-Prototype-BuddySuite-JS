// The following is an auto run function, so anything inside it will run

(function () {
  // -----------------------------------
  // general stuff to always run
  // -----------------------------------

  // get the document name for later use
  $var.pageName = $(document).attr("title");

  // Custom test function for calling from within
  // an Axure action expression or other script
  $axure.ex.fn.fnTestThisOut = function (value, val2) {
    alert("Hey " + value + " - " + val2 + " [from: " + $var.pageName + "]");
  };

  // -----------------------------------
  // specific stuff here
  // -----------------------------------
})();
