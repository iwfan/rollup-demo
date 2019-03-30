(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.server = factory());
}(this, function () { 'use strict';

    var ChildPorts = /** @class */ (function () {
        function ChildPorts(port) {
            this.port = port;
        }
        return ChildPorts;
    }());

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

    var index = {
        init: function (options) {
            return new SDKS(options);
        },
    };

    return index;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0NoaWxkUG9ydC50cyIsIi4uL3NyYy9TREtTZXJ2ZXIudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hpbGRQb3J0cyB7XG4gICAgcHJpdmF0ZSBwb3J0OiBhbnk7XG4gICAgY29uc3RydWN0b3IocG9ydDogYW55KSB7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGlsZFBvcnRzO1xuIiwiaW1wb3J0IENoaWxkUG9ydCBmcm9tICcuL0NoaWxkUG9ydCc7XG5jbGFzcyBTREtTIHtcbiAgICBwcml2YXRlIGNoaWxkRG9tYWluOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjaGlsZFBvcnRzOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLmNoaWxkRG9tYWluID0gb3B0aW9ucy5jaGlsZERvbWFpbjtcblxuICAgICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWQge31cblxuICAgIHByaXZhdGUgZGVzdHJveShrZXk6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkUG9ydHNba2V5XSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWNlaXZlTWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGEsIG9yaWdpbiwgc291cmNlLCBwb3J0c30gPSBldmVudDtcbiAgICAgICAgICAgIGlmIChvcmlnaW4gPT09IHRoaXMuY2hpbGREb21haW4gJiYgc291cmNlICE9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGlsZFBvcnQoZGF0YSwgcG9ydHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0Q2hpbGRQb3J0KGtleTogYW55LCBwb3J0czogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcnQ6IGFueSA9IHt9O1xuICAgICAgICBwb3J0W2tleV0gPSBuZXcgQ2hpbGRQb3J0KHBvcnRzKTtcbiAgICAgICAgdGhpcy5jaGlsZFBvcnRzID0gT2JqZWN0LmFzc2lnbih0aGlzLmNoaWxkUG9ydHMsIHBvcnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU0RLUztcbiIsImltcG9ydCBTREtTZXJ2ZXIgZnJvbSAnLi9TREtTZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdChvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTREtTZXJ2ZXIob3B0aW9ucyk7XG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ2hpbGRQb3J0IiwiU0RLU2VydmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTtRQUVJLG9CQUFZLElBQVM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFDTCxpQkFBQztJQUFELENBQUMsSUFBQTs7SUNKRDtRQUlJLGNBQVksT0FBWTtZQUZoQixlQUFVLEdBQVEsRUFBRSxDQUFDO1lBR3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUV2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDekI7UUFFTSwwQkFBVyxHQUFsQixVQUFtQixPQUFZLEtBQVU7UUFFakMsc0JBQU8sR0FBZixVQUFnQixHQUFRO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBRU8sNkJBQWMsR0FBdEI7WUFBQSxpQkFPQztZQU5HLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFVO2dCQUNuQyxJQUFBLGlCQUFJLEVBQUUscUJBQU0sRUFBRSxxQkFBTSxFQUFFLG1CQUFLLENBQVU7Z0JBQzVDLElBQUksTUFBTSxLQUFLLEtBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtvQkFDbEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO2FBQ0osQ0FBQyxDQUFDO1NBQ047UUFDTyw0QkFBYSxHQUFyQixVQUFzQixHQUFRLEVBQUUsS0FBVTtZQUN0QyxJQUFNLElBQUksR0FBUSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUlBLFVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxRDtRQUNMLFdBQUM7SUFBRCxDQUFDLElBQUE7O0FDNUJELGdCQUFlO1FBQ1gsSUFBSSxZQUFDLE9BQVk7WUFDYixPQUFPLElBQUlDLElBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztLQUNKLENBQUM7Ozs7Ozs7OyJ9
