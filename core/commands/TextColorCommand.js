export class TextColorCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(textColor) {
        if(this.target) {
            this.target.style.setProperty("color", textColor, "important");
        }
    }
}