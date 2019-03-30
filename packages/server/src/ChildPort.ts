class ChildPorts {
    private port: any;
    constructor(port: any) {
        this.port = port;

        this.sendMessage('parent init');
    }

    sendMessage(message: any): void {
        this.port.message(message);
    }
}

export default ChildPorts;
