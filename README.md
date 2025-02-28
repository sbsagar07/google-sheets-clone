# Google Sheets Clone

## 📌 Project Overview
This project is a **Google Sheets Clone** that replicates key functionalities of Google Sheets, including spreadsheet operations, mathematical functions, data validation, and visualization. It allows users to perform calculations, apply formulas, and visualize data using charts.

## 🚀 Features

### 🖥 Spreadsheet Interface
- Mimics the Google Sheets UI (grid layout, toolbar, formula bar).
- Drag functionality for cell content and selections.
- Cell dependencies: Formulas update when referenced cells change.
- Basic cell formatting (bold, italics, font size, color).
- Add, delete, and resize rows and columns.

### 🔢 Mathematical Functions
- **SUM**: Adds values in a selected range.
- **AVERAGE**: Computes the average of a selected range.
- **MAX**: Returns the maximum value in a range.
- **MIN**: Returns the minimum value in a range.
- **COUNT**: Counts numerical values in a selected range.

### ✅ Data Quality Functions
- **TRIM**: Removes extra spaces from text.
- **UPPER**: Converts text to uppercase.
- **LOWER**: Converts text to lowercase.
- **REMOVE_DUPLICATES**: Deletes duplicate rows.
- **FIND_AND_REPLACE**: Replaces specific text in selected cells.

### ✍️ Data Entry and Validation
- Supports multiple data types (numbers, text, dates).
- Basic validation ensures numeric fields only contain numbers.

### 📊 Data Visualization
- Users can generate bar charts from column data.
- Select a column to visualize its numerical data dynamically.

### 🏆 Bonus Features
- Support for complex formulas and cell referencing.
- Save and load spreadsheet data.
- Additional data quality and mathematical functions.

## 🛠 Tech Stack
- **Frontend**: React.js
- **UI Components**: HTML, CSS
- **Charting Library**: Chart.js (react-chartjs-2)
- **State Management**: React Hooks (useState, useEffect)

## 🔧 Installation and Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/google-sheets-clone.git
   cd google-sheets-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open **http://localhost:3000/** in your browser.

## 🧪 Testing
- Enter values in cells and test formula calculations (`=SUM(A1:A5)`).
- Apply data validation and formatting.
- Generate a chart by selecting a column and clicking **Update Chart**.

## 📜 Folder Structure
```
📂 google-sheets-clone
├── 📂 src
│   ├── 📄 App.js          # Main application component
│   ├── 📄 Spreadsheet.js  # Spreadsheet functionality
│   ├── 📄 styles.css      # CSS styles
│   ├── 📄 index.js        # Entry point
├── 📄 package.json       # Dependencies and scripts
├── 📄 README.md          # Project documentation
```

## 🤝 Contributing
- Feel free to submit issues and pull requests.
- Ensure your code is well-structured and properly documented.

## 📜 License
This project is licensed under the **MIT License**.

---

📌 **Author**: S B SAGARA
📌 **GitHub**: https://github.com/sbsagar07/google-sheets-clone.git

