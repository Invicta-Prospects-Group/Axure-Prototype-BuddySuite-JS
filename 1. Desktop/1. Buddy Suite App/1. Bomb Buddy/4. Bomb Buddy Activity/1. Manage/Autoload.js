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

  // Function to register the Axure Ids of
  // Table Repeaters within component controls

  $axure.ex.fn.fnRegisterControlTableRepeater = function (
    controlGroup,
    controlInstance,
    tableId
  ) {
    $axure("@ControlTableRepeaterRegistry")
      .addRepeaterData([
        {
          control_group: { type: "text", text: controlGroup },
          control_instance: { type: "text", text: controlInstance },
          table_id: { type: "text", text: tableId },
        },
      ])
      .refreshRepeater();
    return tableId;
  };

  // -----------------------------------
  // specific stuff here
  // -----------------------------------

  $axure.ex.fn.fnClearPaxCardData = function (controlGroup) {
    var rows = $axure("@ControlTableRepeaterRegistry")
      .getRepeaterData()
      .filter((row) => row.control_group.text == controlGroup);
    for (let i = 0; i < rows.length; i++) {
      alert("Clearing data for table " + rows[i].control_instance.text);
      $axure(rows[i].table_id.text).clearRepeaterData().refreshRepeater();
    }
  };
})();
