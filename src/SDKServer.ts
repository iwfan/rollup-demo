class SDKS {
    private childDomain: string;

    constructor(options: any) {
        this.childDomain = options.childDomain;

        this.init();
    }

    private init() {
        this.receiveMessage();
    }

    private destroy(): void {
        this.rejectMessage();
    }

    private receiveMessage() {
        window.addEventListener('message', this.handleMessage);
    }

    private rejectMessage() {
        window.removeEventListener('message', this.handleMessage);
    }

    private handleMessage({data, origin, source}: any) {
        console.log(data);
        console.log('123');
    }
}

export default SDKS;
