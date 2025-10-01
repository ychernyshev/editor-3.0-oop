export class TextCenterCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(textCenter) {
        this.target.style.textAlign = textCenter;
    }
}