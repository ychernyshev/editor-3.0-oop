export class UIPaneComponent {
    constructor(containerID) {
        this.container = document.getElementById(containerID);
        if(!this.container) {
            throw new Error(`Container with ID "${containerId}" not found`);
        }
    }

    render() {
        throw new Error("Render method must be implemented by subclass");
    }
}