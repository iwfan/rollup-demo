import ChildPort from './ChildPort';
class SDKS {
    private childDomain: string;
    private childPorts: any = {};

    constructor(options: any) {
        this.childDomain = options.childDomain;

        this.receiveMessage();
    }

    public sendMessage(message: any): void {}

    private destroy(key: any): void {
        this.childPorts[key] = null;
    }

    private receiveMessage(): void {
        window.addEventListener('message', (event: any): void => {
            const {data, origin, source, ports} = event;
            if (origin === this.childDomain && source !== window) {
                this.initChildPort(data, ports[0]);
            }
        });
    }
    private initChildPort(key: any, ports: any): void {
        const port: any = {};
        console.log(key);
        port[key] = new ChildPort(ports);
        this.childPorts = Object.assign(this.childPorts, port);
    }
}

export default SDKS;
