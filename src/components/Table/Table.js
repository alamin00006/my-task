import React, { useEffect, useState } from 'react';

const Table = () => {

  const [invoices, setInvoices] = useState([]);
    
  useEffect(() =>{
      fetch('http://localhost:5000/billing-list')
      .then(res => res.json())
      .then(data =>setInvoices(data))
  }, [])
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
 
          <thead>
            <tr>
              <th>Billig Id</th>
              <th> Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
          {
             invoices.map(invoice => <tr>
              <th>1</th>
              <td>{invoice.fullName}</td>
              <td>{invoice.email}</td>
              <td>{invoice.phone}</td>
              <td>{invoice.paidAmount}</td>
              <td>Edit</td>
            </tr>)
          }
    
            </tbody>

        </table>

   
      </div>
    );
};

export default Table;