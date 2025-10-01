export class BoldCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(fontWeight) {
        if(this.target) {
            this.target.style.fontWeight = fontWeight;
        }
    }
}