# Changelog

All notable changes to this project will be documented in this file.

---

## [0.1.0] — 2025-09-19

### Added
- Initial project structure created
- HTML layout with Bootstrap integration
- Modular JavaScript architecture using ES6 classes
- `MenuBar` and `TextArea` components with encapsulated rendering
- Entry point via `main.js` with component initialization
- `.gitignore` updated for clean repository management

### Додано
- Створено початкову структуру проєкту
- HTML-розмітка з інтеграцією Bootstrap
- Модульна архітектура JavaScript на базі ES6-класів
- Компоненти `MenuBar` і `TextArea` з інкапсульованим рендерингом
- Точка входу через `main.js` з ініціалізацією компонентів
- Оновлено `.gitignore` для чистого керування репозиторієм

---

## [0.1.1] - 2025-09-22

### UI Refactor and Button Implementation
- Renamed menu-bar.js to MenuBar.js and text-area.js to TextArea.js to match class names and improve clarity
- Created MenuBarSelectPanelButton.js to encapsulate logic for panel-switching buttons
- Implemented MenuBarSelectPanelButton class with rendering and styling
- Menu panel buttons now appear correctly in the UI
- Logo and menu buttons position in one line

### Рефакторинг UI та реалізація кнопок
- Перейменовано menu-bar.js на MenuBar.js та text-area.js на TextArea.js для відповідності назвам класів
- Створено MenuBarSelectPanelButton.js для логіки кнопок перемикання панелей
- Реалізовано клас MenuBarSelectPanelButton з рендерингом та стилізацією
- Кнопки панелі меню тепер коректно відображаються в UI
- Лого та кнопки меню тепер на одній лінії

---

## [0.1.2] - 2025-09-23

### Tab System Integration and UI Refactor

- Implemented tab panes for editor instruments by category (home, insert)
- Separated instrument panels per category for modular text editing
- Refactored tab buttons to dynamically select and display corresponding instrument panels
- Moved menuItemsContainer creation into the render() method to ensure DOM availability
- Minor cleanup: removed extra spaces and applied structural fixes

### Інтеграція системи вкладок та рефакторинг UI

- Реалізовано вкладки для інструментів редактора за категоріями (home, insert)
- Розділено панелі інструментів для кожної категорії — модульна логіка редагування тексту
- Переписано кнопки вкладок для динамічного вибору та відображення відповідної панелі
- Створення menuItemsContainer перенесено в метод render() для гарантії наявності DOM
- Проведено дрібне очищення: видалено зайві пробіли, структурні правки