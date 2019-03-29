(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.SDKServer = factory());
}(this, function () { 'use strict';

    var ChildPorts = /** @class */ (function () {
        function ChildPorts(port) {
            this.port = port;
        }
        return ChildPorts;
    }());
    //# sourceMappingURL=ChildPort.js.map

    var SDKS = /** @class */ (function () {
        function SDKS(options) {
            this.childPorts = {};
            this.childDomain = options.childDomain;
            this.receiveMessage();
        }
        SDKS.prototype.sendMessage = function (message) { };
        SDKS.prototype.destroy = function (key) {
            this.childPorts[key] = null;
        };
        SDKS.prototype.receiveMessage = function () {
            var _this = this;
            window.addEventListener('message', function (event) {
                var data = event.data, origin = event.origin, source = event.source, ports = event.ports;
                if (origin === _this.childDomain && source !== window) {
                    _this.initChildPort(data, ports[0]);
                }
            });
        };
        SDKS.prototype.initChildPort = function (key, ports) {
            var port = {};
            port[key] = new ChildPorts(ports);
            this.childPorts = Object.assign(this.childPorts, port);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQ2hpbGRQb3J0LnRzIiwiLi4vc3JjL1NES1NlcnZlci50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDaGlsZFBvcnRzIHtcbiAgICBwcml2YXRlIHBvcnQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoaWxkUG9ydHM7XG4iLCJpbXBvcnQgQ2hpbGRQb3J0IGZyb20gJy4vQ2hpbGRQb3J0JztcbmNsYXNzIFNES1Mge1xuICAgIHByaXZhdGUgY2hpbGREb21haW46IHN0cmluZztcbiAgICBwcml2YXRlIGNoaWxkUG9ydHM6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgICAgIHRoaXMuY2hpbGREb21haW4gPSBvcHRpb25zLmNoaWxkRG9tYWluO1xuXG4gICAgICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE1lc3NhZ2UobWVzc2FnZTogYW55KTogdm9pZCB7fVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KGtleTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hpbGRQb3J0c1trZXldID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY2VpdmVNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7ZGF0YSwgb3JpZ2luLCBzb3VyY2UsIHBvcnRzfSA9IGV2ZW50O1xuICAgICAgICAgICAgaWYgKG9yaWdpbiA9PT0gdGhpcy5jaGlsZERvbWFpbiAmJiBzb3VyY2UgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdENoaWxkUG9ydChkYXRhLCBwb3J0c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRDaGlsZFBvcnQoa2V5OiBhbnksIHBvcnRzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9ydDogYW55ID0ge307XG4gICAgICAgIHBvcnRba2V5XSA9IG5ldyBDaGlsZFBvcnQocG9ydHMpO1xuICAgICAgICB0aGlzLmNoaWxkUG9ydHMgPSBPYmplY3QuYXNzaWduKHRoaXMuY2hpbGRQb3J0cywgcG9ydCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTREtTO1xuIiwiaW1wb3J0IFNES1NlcnZlciBmcm9tICcuL1NES1NlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0KG9wdGlvbnM6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFNES1NlcnZlcihvcHRpb25zKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDaGlsZFBvcnQiLCJTREtTZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBO1FBRUksb0JBQVksSUFBUztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNMLGlCQUFDO0lBQUQsQ0FBQyxJQUFBO0FBRUQ7O0lDTkE7UUFJSSxjQUFZLE9BQVk7WUFGaEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztZQUd6QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFdkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO1FBRU0sMEJBQVcsR0FBbEIsVUFBbUIsT0FBWSxLQUFVO1FBRWpDLHNCQUFPLEdBQWYsVUFBZ0IsR0FBUTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVPLDZCQUFjLEdBQXRCO1lBQUEsaUJBT0M7WUFORyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBVTtnQkFDbkMsSUFBQSxpQkFBSSxFQUFFLHFCQUFNLEVBQUUscUJBQU0sRUFBRSxtQkFBSyxDQUFVO2dCQUM1QyxJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7b0JBQ2xELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QzthQUNKLENBQUMsQ0FBQztTQUNOO1FBQ08sNEJBQWEsR0FBckIsVUFBc0IsR0FBUSxFQUFFLEtBQVU7WUFDdEMsSUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJQSxVQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUQ7UUFDTCxXQUFDO0lBQUQsQ0FBQyxJQUFBO0FBRUQ7O0FDOUJBLGdCQUFlO1FBQ1gsSUFBSSxZQUFDLE9BQVk7WUFDYixPQUFPLElBQUlDLElBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztLQUNKLENBQUM7Ozs7Ozs7OzsifQ==
