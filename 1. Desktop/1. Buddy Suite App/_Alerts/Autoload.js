// The following is an auto run function, so anything inside it will run
(function () {
  // general stuff doesn't need to be run here as the Header already has it
  // -----------------------------------
  // specific stuff here
  // -----------------------------------
  // function for getting number of unread alearts for PAX
  $axure.ex.fn.fnGetUnreadAlertsCount = function name(paxId) {
    var rows = $axure("@Alerts Data")
      .getRepeaterData()
      .filter((row) => row.pax.text == paxId && !(row.read.text === 'true'));
    return rows.length;
  };
})();
