
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var ChildPorts = /** @class */ (function () {
    function ChildPorts(port) {
        this.port = port;
        this.listenPort();
        this.sendMessage('parent init');
    }
    ChildPorts.prototype.sendMessage = function (message) {
        this.port.postMessage(message);
    };
    ChildPorts.prototype.listenPort = function () {
        this.port.onmessage = function (event) {
            console.log(event);
        };
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
        console.log(key);
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

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0NoaWxkUG9ydC50cyIsIi4uL3NyYy9TREtTZXJ2ZXIudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hpbGRQb3J0cyB7XG4gICAgcHJpdmF0ZSBwb3J0OiBhbnk7XG4gICAgY29uc3RydWN0b3IocG9ydDogYW55KSB7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMubGlzdGVuUG9ydCgpO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdwYXJlbnQgaW5pdCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZE1lc3NhZ2UobWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlblBvcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9ydC5vbm1lc3NhZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hpbGRQb3J0cztcbiIsImltcG9ydCBDaGlsZFBvcnQgZnJvbSAnLi9DaGlsZFBvcnQnO1xuY2xhc3MgU0RLUyB7XG4gICAgcHJpdmF0ZSBjaGlsZERvbWFpbjogc3RyaW5nO1xuICAgIHByaXZhdGUgY2hpbGRQb3J0czogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGlsZERvbWFpbiA9IG9wdGlvbnMuY2hpbGREb21haW47XG5cbiAgICAgICAgdGhpcy5yZWNlaXZlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTWVzc2FnZShtZXNzYWdlOiBhbnkpOiB2b2lkIHt9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koa2V5OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGlsZFBvcnRzW2tleV0gPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtkYXRhLCBvcmlnaW4sIHNvdXJjZSwgcG9ydHN9ID0gZXZlbnQ7XG4gICAgICAgICAgICBpZiAob3JpZ2luID09PSB0aGlzLmNoaWxkRG9tYWluICYmIHNvdXJjZSAhPT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q2hpbGRQb3J0KGRhdGEsIHBvcnRzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdENoaWxkUG9ydChrZXk6IGFueSwgcG9ydHM6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwb3J0OiBhbnkgPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgcG9ydFtrZXldID0gbmV3IENoaWxkUG9ydChwb3J0cyk7XG4gICAgICAgIHRoaXMuY2hpbGRQb3J0cyA9IE9iamVjdC5hc3NpZ24odGhpcy5jaGlsZFBvcnRzLCBwb3J0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNES1M7XG4iLCJpbXBvcnQgU0RLU2VydmVyIGZyb20gJy4vU0RLU2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQob3B0aW9uczogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgU0RLU2VydmVyKG9wdGlvbnMpO1xuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbIkNoaWxkUG9ydCIsIlNES1NlcnZlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVJLG9CQUFZLElBQVM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDbkM7SUFFTyxnQ0FBVyxHQUFuQixVQUFvQixPQUFZO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFDLEtBQVU7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QixDQUFDO0tBQ0w7SUFDTCxpQkFBQztDQUFBLElBQUE7O0FDaEJEO0lBSUksY0FBWSxPQUFZO1FBRmhCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXZDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN6QjtJQUVNLDBCQUFXLEdBQWxCLFVBQW1CLE9BQVksS0FBVTtJQUVqQyxzQkFBTyxHQUFmLFVBQWdCLEdBQVE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDL0I7SUFFTyw2QkFBYyxHQUF0QjtRQUFBLGlCQU9DO1FBTkcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQVU7WUFDbkMsSUFBQSxpQkFBSSxFQUFFLHFCQUFNLEVBQUUscUJBQU0sRUFBRSxtQkFBSyxDQUFVO1lBQzVDLElBQUksTUFBTSxLQUFLLEtBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDbEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7U0FDSixDQUFDLENBQUM7S0FDTjtJQUNPLDRCQUFhLEdBQXJCLFVBQXNCLEdBQVEsRUFBRSxLQUFVO1FBQ3RDLElBQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJQSxVQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDMUQ7SUFDTCxXQUFDO0NBQUEsSUFBQTs7QUM3QkQsWUFBZTtJQUNYLElBQUksWUFBQyxPQUFZO1FBQ2IsT0FBTyxJQUFJQyxJQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7Q0FDSixDQUFDOzs7OyJ9
