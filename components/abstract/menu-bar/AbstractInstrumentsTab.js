export class AbstractInstrumentsTab {
    constructor() {
        this.container = null;
    }

    setContainer(container) {
        this.container = container;
    }

    render() {
        throw new Error("Render method must be implemented by subclass");
    }
}