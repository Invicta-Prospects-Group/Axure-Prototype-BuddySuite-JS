// The following is an auto run function, so anything inside it will run
(function () {
  // general stuff doesn't need to be run here as the Header already has it
  // -----------------------------------
  // specific stuff here
  // -----------------------------------
  // function to call Buddy Suite App (alert's) to add alert
  $axure.ex.fn.fnAddMailNotificationForBlastExposure = function() {
    parent.parent.$axure.ex.fn.fnAddMailNotificationForBlastExposure();
  };
})();
