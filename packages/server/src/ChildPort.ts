class ChildPorts {
    private port: any;
    constructor(port: any) {
        this.port = port;

        this.sendMessage('parent init');
    }

    private sendMessage(message: any): void {
        this.port.postMessage(message);
    }
}

export default ChildPorts;
