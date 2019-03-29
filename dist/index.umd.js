(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.SDKServer = factory());
}(this, function () { 'use strict';

    var SDKS = /** @class */ (function () {
        function SDKS(options) {
            this.childDomain = options.childDomain;
            this.receiveMessage();
        }
        SDKS.prototype.sendMessage = function (message) { };
        SDKS.prototype.destroy = function () {
            this.rejectMessage();
        };
        SDKS.prototype.receiveMessage = function () {
            window.addEventListener('message', this.handleMessage);
        };
        SDKS.prototype.rejectMessage = function () {
            window.removeEventListener('message', this.handleMessage);
        };
        SDKS.prototype.handleMessage = function (_a) {
            var data = _a.data, origin = _a.origin, source = _a.source;
            console.log(data);
        };
        return SDKS;
    }());
    //# sourceMappingURL=SDKServer.js.map

    var index = {
        init: function (options) {
            return new SDKS(options);
        },
    };
    //# sourceMappingURL=index.js.map

    return index;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvU0RLU2VydmVyLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNES1Mge1xuICAgIHByaXZhdGUgY2hpbGREb21haW46IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGlsZERvbWFpbiA9IG9wdGlvbnMuY2hpbGREb21haW47XG5cbiAgICAgICAgdGhpcy5yZWNlaXZlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTWVzc2FnZShtZXNzYWdlOiBhbnkpOiB2b2lkIHt9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVqZWN0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlamVjdE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2Uoe2RhdGEsIG9yaWdpbiwgc291cmNlfTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU0RLUztcbiIsImltcG9ydCBTREtTZXJ2ZXIgZnJvbSAnLi9TREtTZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdChvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTREtTZXJ2ZXIob3B0aW9ucyk7XG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsiU0RLU2VydmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUVJLGNBQVksT0FBWTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFdkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO1FBRU0sMEJBQVcsR0FBbEIsVUFBbUIsT0FBWSxLQUFVO1FBRWpDLHNCQUFPLEdBQWY7WUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFFTyw2QkFBYyxHQUF0QjtZQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzFEO1FBRU8sNEJBQWEsR0FBckI7WUFDSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM3RDtRQUVPLDRCQUFhLEdBQXJCLFVBQXNCLEVBQTJCO2dCQUExQixjQUFJLEVBQUUsa0JBQU0sRUFBRSxrQkFBTTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0wsV0FBQztJQUFELENBQUMsSUFBQTtBQUVEOztBQ3pCQSxnQkFBZTtRQUNYLElBQUksWUFBQyxPQUFZO1lBQ2IsT0FBTyxJQUFJQSxJQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakM7S0FDSixDQUFDOzs7Ozs7Ozs7In0=
