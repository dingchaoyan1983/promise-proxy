"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(promise) {
    var _this = this;

    _classCallCheck(this, _class);

    this.promise = promise;
    this.fulfilled = false;
    this.rejected = false;
    this.completed = false;
    this.promise.then(function () {
      _this.fulfilled = true;
      _this.completed = true;
    }, function () {
      _this.rejected = true;
      _this.completed = true;
    });
  }

  _createClass(_class, [{
    key: "then",
    value: function then() {
      var _promise;

      return new this.constructor((_promise = this.promise).then.apply(_promise, arguments));
    }
  }, {
    key: "catch",
    value: function _catch() {
      var _promise2;

      return new this.constructor((_promise2 = this.promise).catch.apply(_promise2, arguments));
    }
  }]);

  return _class;
}();

exports.default = _class;