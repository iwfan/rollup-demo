
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.client = factory());
}(this, function () { 'use strict';

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

    return index;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1NES0NsaWVudC50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGluaXQoKSDnq6/lj6Plu7rnq4vov57mjqVcbiAqIHJlYWR5KCkgRE9N5pON5L2c5a6M5oiQXG4gKiBub3RpZmljYXRpb25TdWNjZXNzKCkg6aG16Z2i5Yqg6L295oiQ5YqfXG4gKiBub3RpZmljYXRpb25FcnJvcigpIOmhtemdouWKoOi9veWksei0pVxuICovXG5cbmNsYXNzIFNES0Mge1xuICAgIHByaXZhdGUgY2hhbm5lbDogYW55O1xuICAgIHByaXZhdGUgcG9ydDogYW55O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50RG9tYWluIH0gPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnBhcmVudENoYW5uZWxJbml0KHBhcmVudERvbWFpbik7XG4gICAgfVxuXG4gICAgLyoqIOmAmui/h+err+WPo+i/m+ihjOaVsOaNrumAmuS/oSAqL1xuICAgIHB1YmxpYyBzZW5kTWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKCdpdCBpcyBzZW5kIG1lc3NhZ2UgdXNlIHBvcnQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcmVudENoYW5uZWxJbml0KHBhcmVudERvbWFpbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLnBvcnQgPSB0aGlzLmNoYW5uZWwucG9ydDE7XG5cbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSgncG9ydCBpbml0JywgcGFyZW50RG9tYWluLCBbdGhpcy5jaGFubmVsLnBvcnQyXSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5Qb3J0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5Qb3J0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udGVudEluaXQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmlld0luaXQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub25sb2FkID0gZm4oKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZpZXdFcnJvcihmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5vbmVycm9yID0gZm4oKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNES0M7IiwiaW1wb3J0IFNES0NsaWVudCBmcm9tICcuL1NES0NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0KG9wdGlvbnM6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFNES0NsaWVudChvcHRpb25zKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJTREtDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUE7Ozs7OztJQU9BO1FBSUksY0FBWSxPQUFZO1lBQ1osSUFBQSxtQ0FBWSxDQUFhO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4Qzs7UUFHTSwwQkFBVyxHQUFsQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDeEQ7UUFFTyxnQ0FBaUIsR0FBekIsVUFBMEIsWUFBaUI7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFFL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUUzRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7UUFFTyx5QkFBVSxHQUFsQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQUMsS0FBVTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0IsQ0FBQztTQUNMO1FBRU8sMEJBQVcsR0FBbkIsVUFBb0IsRUFBTztZQUN2QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDckQ7UUFFTyx1QkFBUSxHQUFoQixVQUFpQixFQUFPO1lBQ3BCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtRQUVPLHdCQUFTLEdBQWpCLFVBQWtCLEVBQU87WUFDckIsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUN6QjtRQUNMLFdBQUM7SUFBRCxDQUFDLElBQUE7O0FDOUNELGdCQUFlO1FBQ1gsSUFBSSxZQUFDLE9BQVk7WUFDYixPQUFPLElBQUlBLElBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztLQUNKLENBQUM7Ozs7Ozs7OyJ9
