export class AbstractButton {
    constructor() {
        this.button = null;
    }

    setButton(button) {
        this.button = button;
    }

    render() {
        throw new Error("The button must be implemented");
    }
}