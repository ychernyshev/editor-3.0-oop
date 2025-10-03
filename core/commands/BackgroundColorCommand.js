export class BackgroundColorCommand{
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(backgroundColor) {
        if(this.target) {
            this.target.style.setProperty("background-color", backgroundColor, "important");
        }
    }
}