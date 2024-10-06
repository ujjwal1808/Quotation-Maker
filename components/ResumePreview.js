"use client"
import { useState } from 'react';
import '../app/globals.css'

const ResumePreview = ({ data }) => {
  const [tableData, setTableData] = useState([data])
  if (!data) return null;


  return (
    <div id="resume-preview">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>

      <h2 className="text-xl font-bold">Address</h2>
      <p>{data.education}</p>

      <h2 className="text-xl font-bold">Contact</h2>
      <p>{data.contact}</p>

      <div>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Item Name</th>
              <th>Item Detail</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remark if any</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.itemName}</td>
                <td>{item.itemDetail}</td>
                <td>{item.unitPrice}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{item.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default ResumePreview;
