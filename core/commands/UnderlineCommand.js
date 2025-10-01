export class UnderlineCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(fontStyleUnderline) {
        this.target.style.textDecoration = fontStyleUnderline;
    }
}