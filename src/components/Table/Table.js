import React from 'react';

const Table = () => {
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
          
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>500</td>
              <td>Edit</td>
            </tr>
    
            </tbody>

        </table>

   
      </div>
    );
};

export default Table;