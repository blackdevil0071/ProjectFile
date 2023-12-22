import React from "react";
export default function ExpenseFilter(props) {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <div>
        <label>Filter By year</label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    </>
  );
}
