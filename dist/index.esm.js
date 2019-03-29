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

export { SDKS as SDKServer };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXNtLmpzIiwic291cmNlcyI6WyIuLi9zcmMvU0RLU2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNES1Mge1xuICAgIHByaXZhdGUgY2hpbGREb21haW46IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgICAgICB0aGlzLmNoaWxkRG9tYWluID0gb3B0aW9ucy5jaGlsZERvbWFpbjtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIHRoaXMucmVjZWl2ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVqZWN0TWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjZWl2ZU1lc3NhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlamVjdE1lc3NhZ2UoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZU1lc3NhZ2Uoe2RhdGEsIG9yaWdpbiwgc291cmNlfTogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZygnMTIzJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTREtTO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBR0ksY0FBWSxPQUFZO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV2QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZjtJQUVPLG1CQUFJLEdBQVo7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDekI7SUFFTyxzQkFBTyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3hCO0lBRU8sNkJBQWMsR0FBdEI7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMxRDtJQUVPLDRCQUFhLEdBQXJCO1FBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDN0Q7SUFFTyw0QkFBYSxHQUFyQixVQUFzQixFQUEyQjtZQUExQixjQUFJLEVBQUUsa0JBQU0sRUFBRSxrQkFBTTtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFDTCxXQUFDO0NBQUEsSUFBQTs7OzsifQ==
