export class TextRightCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(textRightCommand) {
        this.target.style.textAlign = textRightCommand;
    }
}