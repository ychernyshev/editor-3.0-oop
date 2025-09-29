export class FontSizeCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(fontSize) {
        if(this.target) {
            this.target.style.fontSize = fontSize + "px";
        }
    }
}