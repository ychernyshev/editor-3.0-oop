export class AbstractButton {
    constructor(label) {
        this.label = label;
    }

    render() {
        throw new Error("Button must be implemented");
    }
}