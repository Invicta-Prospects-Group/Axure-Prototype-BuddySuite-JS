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
  $axure.ex.fn.fnRegisterChildPage = function(child){
    $var.child = child;
    alert('I got the child!');
  };
  // define the Pax object
  function PAX(paxId, rank, firstName, lastName, ir) {
    this.paxId = paxId;
    this.rank = rank;
    this.firstName = firstName;
    this.lastName = lastName;
    this.ir = ir;
    GetFullName = function() {return this.firstName + ' ' + this.lastName};
  }
  // Return Pax Details for Logged in User
  $axure.ex.fn.fnGetPaxDetails = function(){
    //debugger;
    var userId = $axure.getGlobalVariable('LoggedInUserId');
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
})();
