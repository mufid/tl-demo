(function() {
  this.TurbolinksUtil = {} || this.TurbolinksUtil;

  this.TurbolinksUtil.cleanup = function() {
    var target;

    // Select2 Removal
    target = $(".select2-hidden-accessible").first();
    if (target.length > 0) {
      target.each(function() {
        var par = $(this).parent();
        par.find(".select2-hidden-accessible").removeClass("select2-hidden-accessible");
        par.find(".select2").remove();
      });
    }
  }
}).call(this);