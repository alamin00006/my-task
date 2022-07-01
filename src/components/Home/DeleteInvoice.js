import React from 'react';

const DeleteInvoice = ({invoice, invoices, setInvoices}) => {
    const {_id} = invoice;

    const handleDelete = () =>{
       
        const url = `https://multicultural-moose-56331.herokuapp.com/delete-billing/${_id}`;
        fetch(url , {
            method: "DELETE",
          }).then(res => res.json())
            .then(data => {
               
            })
         
    }

    return (
        <div>
            <button className='btn btn-primary'>Update</button> / 
            <button onClick={handleDelete} className='btn btn-primary'>Delete</button>
        </div>
    );
};

export default DeleteInvoice;