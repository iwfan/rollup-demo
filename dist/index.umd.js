(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.WidgetSDK = {}));
}(this, function (exports) { 'use strict';

    var SDKS = /** @class */ (function () {
        function SDKS(options) {
            this.childDomain = options.childDomain;
            this.init();
        }
        SDKS.prototype.init = function () {
            this.receiveMessage();
        };
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
            console.log('123');
        };
        return SDKS;
    }());

    exports.SDKServer = SDKS;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvU0RLU2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNES1Mge1xuICAgIHByaXZhdGUgY2hpbGREb21haW46IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLmNoaWxkRG9tYWluID0gb3B0aW9ucy5jaGlsZERvbWFpbjtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVqZWN0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlamVjdE1lc3NhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2Uoe2RhdGEsIG9yaWdpbiwgc291cmNlfTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnMTIzJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTREtTO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBO1FBR0ksY0FBWSxPQUFZO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUV2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVPLG1CQUFJLEdBQVo7WUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekI7UUFFTyxzQkFBTyxHQUFmO1lBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBRU8sNkJBQWMsR0FBdEI7WUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxRDtRQUVPLDRCQUFhLEdBQXJCO1lBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0Q7UUFFTyw0QkFBYSxHQUFyQixVQUFzQixFQUEyQjtnQkFBMUIsY0FBSSxFQUFFLGtCQUFNLEVBQUUsa0JBQU07WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO1FBQ0wsV0FBQztJQUFELENBQUMsSUFBQTs7Ozs7Ozs7Ozs7OyJ9
