
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var ChildPorts = /** @class */ (function () {
    function ChildPorts(port) {
        this.port = port;
        this.sendMessage('parent init');
    }
    ChildPorts.prototype.sendMessage = function (message) {
        this.port.postMessage(message);
    };
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
//# sourceMappingURL=SDKServer.js.map

var index = {
    init: function (options) {
        return new SDKS(options);
    },
};
//# sourceMappingURL=index.js.map

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0NoaWxkUG9ydC50cyIsIi4uL3NyYy9TREtTZXJ2ZXIudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hpbGRQb3J0cyB7XG4gICAgcHJpdmF0ZSBwb3J0OiBhbnk7XG4gICAgY29uc3RydWN0b3IocG9ydDogYW55KSB7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgncGFyZW50IGluaXQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcnQucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGlsZFBvcnRzO1xuIiwiaW1wb3J0IENoaWxkUG9ydCBmcm9tICcuL0NoaWxkUG9ydCc7XG5jbGFzcyBTREtTIHtcbiAgICBwcml2YXRlIGNoaWxkRG9tYWluOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjaGlsZFBvcnRzOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLmNoaWxkRG9tYWluID0gb3B0aW9ucy5jaGlsZERvbWFpbjtcblxuICAgICAgICB0aGlzLnJlY2VpdmVNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IGFueSk6IHZvaWQge31cblxuICAgIHByaXZhdGUgZGVzdHJveShrZXk6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoaWxkUG9ydHNba2V5XSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWNlaXZlTWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQ6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2RhdGEsIG9yaWdpbiwgc291cmNlLCBwb3J0c30gPSBldmVudDtcbiAgICAgICAgICAgIGlmIChvcmlnaW4gPT09IHRoaXMuY2hpbGREb21haW4gJiYgc291cmNlICE9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGlsZFBvcnQoZGF0YSwgcG9ydHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0Q2hpbGRQb3J0KGtleTogYW55LCBwb3J0czogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcnQ6IGFueSA9IHt9O1xuICAgICAgICBwb3J0W2tleV0gPSBuZXcgQ2hpbGRQb3J0KHBvcnRzKTtcbiAgICAgICAgdGhpcy5jaGlsZFBvcnRzID0gT2JqZWN0LmFzc2lnbih0aGlzLmNoaWxkUG9ydHMsIHBvcnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU0RLUztcbiIsImltcG9ydCBTREtTZXJ2ZXIgZnJvbSAnLi9TREtTZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdChvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTREtTZXJ2ZXIob3B0aW9ucyk7XG4gICAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ2hpbGRQb3J0IiwiU0RLU2VydmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0lBRUksb0JBQVksSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ25DO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsT0FBWTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQztJQUNMLGlCQUFDO0NBQUEsSUFBQTs7QUNWRDtJQUlJLGNBQVksT0FBWTtRQUZoQixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDekI7SUFFTSwwQkFBVyxHQUFsQixVQUFtQixPQUFZLEtBQVU7SUFFakMsc0JBQU8sR0FBZixVQUFnQixHQUFRO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQy9CO0lBRU8sNkJBQWMsR0FBdEI7UUFBQSxpQkFPQztRQU5HLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFVO1lBQ25DLElBQUEsaUJBQUksRUFBRSxxQkFBTSxFQUFFLHFCQUFNLEVBQUUsbUJBQUssQ0FBVTtZQUM1QyxJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0osQ0FBQyxDQUFDO0tBQ047SUFDTyw0QkFBYSxHQUFyQixVQUFzQixHQUFRLEVBQUUsS0FBVTtRQUN0QyxJQUFNLElBQUksR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUlBLFVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMxRDtJQUNMLFdBQUM7Q0FBQSxJQUFBO0FBRUQ7O0FDOUJBLFlBQWU7SUFDWCxJQUFJLFlBQUMsT0FBWTtRQUNiLE9BQU8sSUFBSUMsSUFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDO0NBQ0osQ0FBQzs7Ozs7In0=
