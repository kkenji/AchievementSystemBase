var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Achievement = (function () {
        function Achievement(badgename, limit) {
            this._badgename = badgename;
            this._limit = limit;
            this._completed = false;
            this._progress = 0;
            this._level = 0;
        }
        Object.defineProperty(Achievement.prototype, "badgeName", {
            get: function () {
                return this._badgename;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Achievement.prototype, "limit", {
            get: function () {
                return this._limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Achievement.prototype, "progress", {
            get: function () {
                return this._progress;
            },
            enumerable: true,
            configurable: true
        });
        Achievement.prototype.setProgress = function (newProgress) {
            this._progress = newProgress;
            this._level = Math.floor(this.progress / this.limit * 4);
            if (this._progress == this._limit)
                this._completed = true;
        };
        Object.defineProperty(Achievement.prototype, "complete", {
            get: function () {
                if (this._completed)
                    return "complete.";
                return "incomplete.";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Achievement.prototype, "level", {
            get: function () {
                return this._level;
            },
            enumerable: true,
            configurable: true
        });
        return Achievement;
    })();
    exports.Achievement = Achievement;
    var QuizBadge = (function (_super) {
        __extends(QuizBadge, _super);
        function QuizBadge(badgename, limit) {
            _super.call(this, badgename, limit);
        }
        return QuizBadge;
    })(Achievement);
    exports.QuizBadge = QuizBadge;
    var ProgressBadge = (function (_super) {
        __extends(ProgressBadge, _super);
        function ProgressBadge(badgename, limit) {
            _super.call(this, badgename, limit);
        }
        return ProgressBadge;
    })(Achievement);
    exports.ProgressBadge = ProgressBadge;
    function outputString(a) {
        return a.badgeName + " is " + a.progress + " out of " + a.limit + " which is " + a.complete + " and is level " + a.level;
    }
    exports.outputString = outputString;
});
//# sourceMappingURL=Achievement1.js.map