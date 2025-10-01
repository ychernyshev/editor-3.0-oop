export class TextLeftCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(textLeft) {
        this.target.style.textAlign = textLeft;
    }
}