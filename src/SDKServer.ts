class SDKS {
    private childDomain: string;
    constructor(options: any) {
        this.childDomain = options.childDomain;

        this.receiveMessage();
    }

    public sendMessage(message: any): void {}

    private destroy(): void {
        this.rejectMessage();
    }

    private receiveMessage(): void {
        window.addEventListener('message', this.handleMessage);
    }

    private rejectMessage(): void {
        window.removeEventListener('message', this.handleMessage);
    }

    private handleMessage({data, origin, source}: any): void {
        console.log(data);
    }
}

export default SDKS;
