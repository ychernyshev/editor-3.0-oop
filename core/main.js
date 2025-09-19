import  { MenuBar } from '../components/menu-bar.js';
import { TextArea } from '../components/text-area.js';

const menuBar = new MenuBar();
const textArea = new TextArea();

menuBar.renderMenuBarContainer();
textArea.renderTextAreaContainer();