(function () {
  //$axure.ex.fn.fnTestThisOut("Paul", "you're a fucking wiz!");
  //This will work as long as the child is loaded
  //window.frames[0].$axure.ex.fn.DidYouGetThis($var.pageName);
  if (typeof $var.child != "undefined") {
    $var.child.$axure.ex.fn.DidYouGetThis($var.pageName)
  }
})();
