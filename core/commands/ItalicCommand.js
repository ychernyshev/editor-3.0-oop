export class ItalicCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(fontStyleItalic) {
        if(this.target) {
            this.target.style.fontStyle = fontStyleItalic;
        }
    }
}