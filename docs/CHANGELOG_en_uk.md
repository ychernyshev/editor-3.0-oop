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

---

## [0.1.3] - 26.09.2025

### ✨ Added

- **Font Styling Buttons**:
  - `Bold`, `Italic`, `Underline`, `Line-through` — implemented via `InstrumentButton` abstraction
- **Text Alignment Buttons**:
  - `Left`, `Center`, `Right`, `Justify` — rendered with SVG icons using the `code` property
- **Color Picker Select Menu**:
  - Dropdown menu with visual color options via `ColorPickerSelect`
- **Font Family & Size Appearance**:
  - Font family and size selectors now display actual styles
  - Added new font sizes: `8px`, `10px`
    

### Improved

- **Main Menu Buttons**:
  - Introduced `code` property — buttons now render either text or SVG icon depending on `sample`/`code` length
- **UI Stylization**:
  - Unified styling for all buttons and selectors (`btn`, `form-control`, `text-secondary`)
- **Font Selectors**:
  - Enhanced visual feedback for font family and size dropdowns

### Architecture

- **AbstractButton**:
  - Centralized button creation (`createElement("button")`) in base class
  - Added `setAttributes()` method for DRY attribute management
- **DRY Principle**:
  - All buttons now inherit from `AbstractButton` — no duplicated logic

### ✨ Додано

- **Кнопки стилізації шрифтів**:
  - `Bold`, `Italic`, `Underline`, `Line-through` — реалізовані через абстракцію `InstrumentButton`
- **Кнопки вирівнювання тексту**:
  - `Left`, `Center`, `Right`, `Justify` — з SVG-іконками через властивість `code`
- **Меню вибору кольору**:
  - Випадаючий список кольорів з візуалізацією через `ColorPickerSelect`
- **Відображення шрифтів і розмірів**:
  - Селектори `fontFamily` та `fontSize` тепер показують реальний стиль
  - Додано нові розміри шрифтів: `8px`, `10px`

### Покращено

- **Кнопки головного меню**:
  - Додано підтримку властивості `code` — кнопки можуть показувати текст або SVG-іконку залежно від `sample`/`code`
- **Стилізація інтерфейсу**:
  - Уніфіковано стилі для всіх кнопок і селекторів (`btn`, `form-control`, `text-secondary`)
- **Селектори шрифтів**:
  - Покращено візуальне відображення шрифтів і розмірів у меню

### Архітектура

- **AbstractButton**:
  - Створення кнопки (`createElement("button")`) винесено в базовий клас
  - Додано метод `setAttributes()` для централізованого управління атрибутами
- **Принцип DRY**:
  - Усі кнопки тепер наслідують `AbstractButton` — без дублювання логіки

---

## [v0.1.4] - 2025-09-29

### Added
- Create table form integrated into `TableCreate.js`
- `InstrumentSelect` components for font family and font size selection
- `FontFamilyCommand` and `FontSizeCommand` classes to apply styles to editable content
- Event listeners connecting select inputs to command execution logic

### Changed
- Replaced `textarea` with `div` container using `contenteditable` attribute for richer text editing

---

### Додано
- Форма створення таблиці інтегрована в `TableCreate.js`
- Компоненти `InstrumentSelect` для вибору шрифту та розміру тексту
- Класи `FontFamilyCommand` і `FontSizeCommand` для застосування стилів до редагованого контенту
- Обробники подій, що зв’язують селекти з логікою виконання команд

### Змінено
- Замість `textarea` використано контейнер `div` з атрибутом `contenteditable` для розширеного редагування тексту
