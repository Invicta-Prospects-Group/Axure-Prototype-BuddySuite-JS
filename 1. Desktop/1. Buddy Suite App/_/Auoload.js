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
  // Function to allow child page to register itself
  $axure.ex.fn.fnRegisterChildPage = function (child) {
    $var.child = child;
    //alert('I got the child!');
  };
  // Function to allow child page to deregister itself
  $axure.ex.fn.fnDeregisterChildPage = function () {
    $var.child = "undefined";
  };
  // define the Pax object
  function PAX(paxId, rank, firstName, lastName, ir) {
    this.paxId = paxId;
    this.rank = rank;
    this.firstName = firstName;
    this.lastName = lastName;
    this.ir = ir;
    this.fullName = this.firstName + " " + this.lastName;
  }
  // Return Pax Details for Logged in User
  $axure.ex.fn.fnGetPaxDetails = function () {
    var userId = $axure.getGlobalVariable("LoggedInUserId");
    var rows = $axure("@Master PAX Data Table")
      .getRepeaterData()
      .filter((row) => row.id.text == userId);
    if (rows.length == 1)
      return new PAX(
        rows[0].id.text,
        rows[0].rank.text,
        rows[0].first_name.text,
        rows[0].last_name.text,
        rows[0].ir.text
      );
  };
  // Allow child to set app context
  $axure.ex.fn.fnSetAppState = function (buddyModule) {
    $axure("@_Function.App.Context.SetAppByNameSpecial").text(buddyModule);
    $axure("@_Function.App.Context.SetAppByNameSpecial.UI.Update").click();
  };
  // Call Bomb Buddy Home Page to show Blast Reports
  $axure.ex.fn.fnOpenBlastReports = function () {
    if (typeof $var.child.$axure.ex.fn.fnOpenBlastReports != "undefined") {
      $var.child.$axure.ex.fn.fnOpenBlastReports();
    }
  };
})();
