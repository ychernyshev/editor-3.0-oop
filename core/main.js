import  { MenuBar } from '../components/MenuBar.js';
import { TextArea } from '../components/TextArea.js';
import { MenuBarPanelButton } from '../components/buttons/MenuBarPanelButton.js';

const menuBar = new MenuBar();
const textArea = new TextArea();
// const MenuButton = new MenuBarPanelButton;

menuBar.renderMenuBarContainer();
textArea.renderTextAreaContainer();

// Menu Bar Panels name
// const buttonLabels = ["home", "insert"];
//
// buttonLabels.forEach(label => {
//     const button = new MenuBarPanelButton(label);
//     button.render();
// })

const buttonManager = new MenuBarPanelButton("menuBarContainer", ["home", "insert"], MenuBarPanelButton)
buttonManager.render();