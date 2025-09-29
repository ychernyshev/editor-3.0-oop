export class FontFamilyCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(fontFamily) {
        if(this.target) {
            this.target.style.fontFamily = fontFamily;
        }
    }
}