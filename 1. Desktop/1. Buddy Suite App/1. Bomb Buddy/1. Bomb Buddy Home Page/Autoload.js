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
  }; // function to get Pax Details from Header

  // -----------------------------------
  // specific stuff here
  // -----------------------------------
  $axure.ex.fn.fnGetPaxDetails = function () {
    var result = parent.$axure.ex.fn.fnGetPaxDetails();
    $axure("@WelcomeMessage").text("Welcome, " + result.firstName);
    $axure("@Input.PaxId").text(result.paxId);
    $axure("@Input.IR").text(result.ir);
    $axure("@Input.FullName").text(result.fullName);
    $axure("@_Execute.UI.Update").click();
  };

  // run the function on auto
  $axure.ex.fn.fnGetPaxDetails();
})();
