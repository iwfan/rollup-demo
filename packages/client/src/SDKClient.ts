/**
 * init() 端口建立连接
 * ready() DOM操作完成
 * notificationSuccess() 页面加载成功
 * notificationError() 页面加载失败
 */

class SDKC {
    private channel: any;
    private port: any;

    constructor(options: any) {
        const { parentDomain } = options;
        this.parentChannelInit(parentDomain);
    }

    /** 通过端口进行数据通信 */
    public sendMessage(): void {
        this.port.postMessage('it is send message use port');
    }

    private parentChannelInit(parentDomain: any): void {
        this.channel = new MessageChannel();
        this.port = this.channel.port1;

        window.parent.postMessage('port init', parentDomain, [this.channel.port2]);

        this.listenPort();
    }

    private listenPort(): void {
        this.port.onmessage = (event: any) => {
            console.log(event.data);
        };
    }

    private contentInit(fn: any): void {
        document.addEventListener('DOMContentLoaded', fn);
    }

    private viewInit(fn: any): void {
        window.onload = fn();
        console.log(window);
    }

    private viewError(fn: any): void {
        window.onerror = fn();
    }
}

export default SDKC;