import React from "react";

export default function ExpenseFilter(props) {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="yearFilter">Filter By year</label>
      <select id="yearFilter" value={props.selected} onChange={dropDownHandler}>
        {props.availableYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
