import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./styles.css";

const Spreadsheet = () => {
  const rows = 10;
  const cols = 10;
  const [cells, setCells] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );
  const [chartData, setChartData] = useState([]);

  const getCellValue = (cellRef) => {
    const match = cellRef.match(/([A-Z]+)([0-9]+)/);
    if (!match) return NaN;
    const col = match[1].charCodeAt(0) - 65;
    const row = parseInt(match[2], 10) - 1;
    return parseFloat(cells[row]?.[col]) || 0;
  };

  const evaluateFormula = (formula) => {
    try {
      if (formula.startsWith("=")) {
        const expression = formula.substring(1).replace(/([A-Z]+[0-9]+)/g, (match) => getCellValue(match));
        return new Function("return " + expression)();
      }
      return formula;
    } catch (error) {
      return "ERROR";
    }
  };

  const handleChange = (row, col, value) => {
    const newCells = [...cells];
    newCells[row][col] = value;
    setCells(newCells);
  };

  const updateSpreadsheet = () => {
    const newCells = cells.map((row) => row.map((cell) => (cell.startsWith("=") ? evaluateFormula(cell) : cell)));
    setCells(newCells);
  };

  const getColumnData = (colIndex) => {
    return cells.map((row) => parseFloat(row[colIndex]) || 0);
  };

  const updateChart = () => {
    setChartData(getColumnData(0));
  };

  return (
    <div>
      <h2>Google Sheets Clone</h2>
      <button onClick={updateSpreadsheet}>Evaluate Formulas</button>
      <button onClick={updateChart}>Update Chart</button>
      <table>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Data Visualization</h3>
      <Bar
        data={{
          labels: Array(rows).fill().map((_, i) => `Row ${i + 1}`),
          datasets: [
            {
              label: "Column 1 Values",
              data: chartData,
              backgroundColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
};

export default Spreadsheet;
