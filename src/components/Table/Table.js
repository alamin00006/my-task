import React, { useEffect, useState } from 'react';
import DeleteInvoice from '../Home/DeleteInvoice';

const Table = () => {

  const [invoices, setInvoices] = useState([]);
    
  useEffect(() =>{
      fetch('https://multicultural-moose-56331.herokuapp.com/billing-list')
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
              <td> <DeleteInvoice invoices={invoices} invoice={invoice} setInvoices={setInvoices}></DeleteInvoice></td>
            </tr>)
          }
    
            </tbody>

        </table>

   
      </div>
    );
};

export default Table;