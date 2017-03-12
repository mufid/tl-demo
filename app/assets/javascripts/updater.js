(function() {
  if (this.LiveUpdater) {
    return;
  }

  var timers = [];

  this.LiveUpdater = (function() {
    function LiveUpdater(path) {
      this.path = path;
    }

    LiveUpdater.prototype.appender = function(html) {
      $('body').append(html);
    }

    LiveUpdater.prototype.createHandler = function(interval) {
      var instance = this;
      return setInterval(function() {
        $.get(instance.path, instance.appender);
      }, interval || 1000);
    }

    LiveUpdater.prototype.attach = function() {
      var path = this.path;
      var handler = this.createHandler()
      timers.push(handler);
    }

    return LiveUpdater;
  })();

  document.addEventListener('turbolinks:before-render', function() {
    $(timers).each(function() {
      clearInterval(this);
    });

    timers = [];
  })
}).call(this);