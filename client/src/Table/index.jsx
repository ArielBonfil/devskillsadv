import React, {useContext} from 'react'
import "./Table.css"
import { AppContext } from "../Context";
const Table = () => {
  const { actualData } = useContext(AppContext)
  return (
    <>
    {actualData &&
    <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>SSN</th>
    </tr>
    {actualData.length > 0 && actualData.map(member => (
      <tr key={member.ssn}>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.address}</td>
        <td>{member.ssn}</td>
      </tr>
    ))}
  </table> 
  }
  </>
  )
}

export default Table