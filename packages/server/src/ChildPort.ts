class ChildPorts {
    private port: any;
    constructor(port: any) {
        this.port = port;
        this.listenPort();
        this.sendMessage('parent init');
    }

    private sendMessage(message: any): void {
        this.port.postMessage(message);
    }

    private listenPort(): void {
        this.port.onmessage = (event: any) => {
            console.log(event);
        };
    }
}

export default ChildPorts;
