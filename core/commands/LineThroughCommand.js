export class LineThroughCommand {
    constructor(targetElement) {
        this.target = targetElement;
    }

    execute(lineThoughtCommand) {
        this.target.style.textDecoration = lineThoughtCommand;
    }
}