
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
/**
 * init() 端口建立连接
 * ready() DOM操作完成
 * notificationSuccess() 页面加载成功
 * notificationError() 页面加载失败
 */
var SDKC = /** @class */ (function () {
    function SDKC(options) {
        var parentDomain = options.parentDomain;
        this.parentChannelInit(parentDomain);
    }
    /** 通过端口进行数据通信 */
    SDKC.prototype.sendMessage = function () {
        this.port.postMessage('it is send message use port');
    };
    SDKC.prototype.parentChannelInit = function (parentDomain) {
        this.channel = new MessageChannel();
        this.port = this.channel.port1;
        window.parent.postMessage('port init', parentDomain, [this.channel.port2]);
        this.listenPort();
    };
    SDKC.prototype.listenPort = function () {
        this.port.onmessage = function (event) {
            console.log(event.data);
        };
    };
    SDKC.prototype.contentInit = function (fn) {
        document.addEventListener('DOMContentLoaded', fn);
    };
    SDKC.prototype.viewInit = function (fn) {
        window.onload = fn();
        console.log(window);
    };
    SDKC.prototype.viewError = function (fn) {
        window.onerror = fn();
    };
    return SDKC;
}());

var index = {
    init: function (options) {
        return new SDKC(options);
    },
};

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1NES0NsaWVudC50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGluaXQoKSDnq6/lj6Plu7rnq4vov57mjqVcbiAqIHJlYWR5KCkgRE9N5pON5L2c5a6M5oiQXG4gKiBub3RpZmljYXRpb25TdWNjZXNzKCkg6aG16Z2i5Yqg6L295oiQ5YqfXG4gKiBub3RpZmljYXRpb25FcnJvcigpIOmhtemdouWKoOi9veWksei0pVxuICovXG5cbmNsYXNzIFNES0Mge1xuICAgIHByaXZhdGUgY2hhbm5lbDogYW55O1xuICAgIHByaXZhdGUgcG9ydDogYW55O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50RG9tYWluIH0gPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnBhcmVudENoYW5uZWxJbml0KHBhcmVudERvbWFpbik7XG4gICAgfVxuXG4gICAgLyoqIOmAmui/h+err+WPo+i/m+ihjOaVsOaNrumAmuS/oSAqL1xuICAgIHB1YmxpYyBzZW5kTWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKCdpdCBpcyBzZW5kIG1lc3NhZ2UgdXNlIHBvcnQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcmVudENoYW5uZWxJbml0KHBhcmVudERvbWFpbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLnBvcnQgPSB0aGlzLmNoYW5uZWwucG9ydDE7XG5cbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSgncG9ydCBpbml0JywgcGFyZW50RG9tYWluLCBbdGhpcy5jaGFubmVsLnBvcnQyXSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Qb3J0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5Qb3J0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udGVudEluaXQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmlld0luaXQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub25sb2FkID0gZm4oKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZpZXdFcnJvcihmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gZm4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNES0M7IiwiaW1wb3J0IFNES0NsaWVudCBmcm9tICcuL1NES0NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0KG9wdGlvbnM6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFNES0NsaWVudChvcHRpb25zKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJTREtDbGllbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQU9BO0lBSUksY0FBWSxPQUFZO1FBQ1osSUFBQSxtQ0FBWSxDQUFhO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN4Qzs7SUFHTSwwQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDeEQ7SUFFTyxnQ0FBaUIsR0FBekIsVUFBMEIsWUFBaUI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDckI7SUFFTyx5QkFBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBVTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQixDQUFDO0tBQ0w7SUFFTywwQkFBVyxHQUFuQixVQUFvQixFQUFPO1FBQ3ZCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyRDtJQUVPLHVCQUFRLEdBQWhCLFVBQWlCLEVBQU87UUFDcEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZCO0lBRU8sd0JBQVMsR0FBakIsVUFBa0IsRUFBTztRQUNyQixNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFDO0tBQ3pCO0lBQ0wsV0FBQztDQUFBLElBQUE7O0FDOUNELFlBQWU7SUFDWCxJQUFJLFlBQUMsT0FBWTtRQUNiLE9BQU8sSUFBSUEsSUFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDO0NBQ0osQ0FBQzs7OzsifQ==
