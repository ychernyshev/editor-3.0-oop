export class AbstractInstrumentSelect {
    constructor() {
        this.select = null;
    }

    setSelect(select) {
        this.select = select;
    }

    render() {
        throw new Error("The input must be implemented");
    }
}