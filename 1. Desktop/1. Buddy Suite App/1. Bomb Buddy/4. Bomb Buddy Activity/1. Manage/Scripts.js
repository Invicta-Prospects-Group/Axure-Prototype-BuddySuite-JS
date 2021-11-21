(function () {
  $axure.ex.fn.fnTestThisOut("Paul", "you're a fucking wiz!");
  //parent.$axure.ex.fn.fnTestThisOut("Paul", "you're a fucking wiz!");
  parent.parent.$axure.ex.fn.fnTestThisOut("Paul", "you're a fucking wiz!");
  ClearPaxCardData();
})();

function ClearPaxCardData() {
  var rows = $axure("@ControlTableRepeaterRegistry")
    .getRepeaterData()
    .filter((row) => row.control_group.text == "Roles.PaxCard");
  for (let i = 0; i < rows.length; i++) {
    alert("Clearing data for table " + rows[i].control_instance.text);
    $axure(rows[i].table_id.text).clearRepeaterData().refreshRepeater();
  }
}
