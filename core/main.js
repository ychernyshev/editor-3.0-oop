import  { MenuBar } from '../components/MenuBar.js';
import { TextArea } from '../components/TextArea.js';
import { MenuBarPanelButton } from '../components/buttons/MenuBarPanelButton.js';

const menuBar = new MenuBar();
const textArea = new TextArea();

menuBar.renderMenuBarContainer();
textArea.renderTextAreaContainer();

// Menu Bar Panels name
const buttonLabels = ["home", "insert"];

buttonLabels.forEach(label => {
    const button = new MenuBarPanelButton(label);
    button.render();
})