// The following is an auto run function, so anything inside it will run
(function () {
  // -----------------------------------
  // specific stuff here
  // -----------------------------------
  $axure.ex.fn.fnGetPaxDetails = function (pathId) {
    //alert(pathId);
    var allRows = $axure("@PaxSelectorTable").getRepeaterData();
    var item = allRows.find((row) => row.path.text == pathId);
    if (item.id.text == "") {
      alert("not a pax");
      return;
    }
    var rows = allRows.sort(
      (a, b) => parseInt(a.path.text) - parseInt(b.path.text)
    );
    var position = -1;
    var index = -1;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].visible.text == "True") {
        position++;
      }
      if (rows[i].path.text == pathId) {
        index = i;
        break;
      }
    }

    // set the variables for the Pax Bar
    $axure("@_State.PaxBar.Selected.VisibleIndex").text(position.toString());
    $axure("@_State.PaxBar.Selected.Index").text(index.toString());
    $axure("@_State.PaxBar.Selected.PaxId").text(rows[index].id.text);
    $axure("@_State.PaxBar.Selected.DisplayName").text(rows[index].name.text);
    $axure("@_State.PaxBar.Selected.SQE_RAG").text(rows[index].sqerag.text);
    $axure("@_State.PaxBar.Selected.DOC_RAG").text(rows[index].docrag.text);
    $axure("@_State.PaxBar.Selected.Reason").text(rows[index].reason.text);
    // show the Pax Bar
    $axure.ex.fn.fnShowPaxBar();
  };

  $axure.ex.fn.fnShowPaxBar = function () {
    $axure("@_Execute.PaxBar.UI.UpdateAndShow").click();
  };

  $axure.ex.fn.fnSetPaxOk = function (index) {
    var target = $axure("@PaxSelectorTable");
    var rows = target.getRepeaterRows();
    if (rows.length > 1) {
      var row = {
        sqerag: { type: "text", text: "RA" },
        checkbox: { type: "text", text: "Checked" },
      };
      target.updateRepeaterData(rows[index], row).refreshRepeater();
    }
  };
})();
