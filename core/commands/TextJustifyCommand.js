export class TextJustifyCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(textJustifyCommand) {
        this.target.style.textAlign = textJustifyCommand;
    }
}