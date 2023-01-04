import React from "react";
import "./employee.css";
const Employee = props => {
  console.log(props);
  let data = props.empDetails;
  return (
    <div>
      <table cellPadding={10} cellSpacing={10} border={5}>
        <tr>
          <th>empName</th>
          <th>empId</th>
          <th>empSal</th>
          <th>empDesignation</th>
          <th>empGender</th>
          <th>empEdu</th>
          <th>empExp</th>
          <th>empImg</th>
          <th>empSkills</th>
          <th>empCity</th>
        </tr>

        {data.map(x => {
          return (
            <tr>
              <td>{x.empName}</td>
              <td>{x.empId}</td>
              <td>{x.empSal}</td>
              <td>{x.empDesignation}</td>
              <td>{x.empGender}</td>
              <td>{x.empEdu}</td>
              <td>{x.empExp}</td>
              <td>
                <img src={x.empImg} alt="" />
              </td>
              <td>
                <ol>
                  {x.empSkills.map(x => {
                    return <li>{x}</li>;
                  })}
                </ol>
              </td>
              <td>{x.empCity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Employee;
