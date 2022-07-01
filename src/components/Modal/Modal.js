import React from 'react';

const Modal = () => {

const invoiceSubmit = (event) =>{
event.preventDefault()

     const fullName = event.target.name.value;
 
     const email = event.target.email.value;
      const phone = event.target.phone.value;
     const paidAmount = event.target.paidAmount.value;
    

     const newInvoice = {fullName,email,phone, paidAmount};
    const url = 'https://multicultural-moose-56331.herokuapp.com/add-billing';
     fetch(url , {
        method: "POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newInvoice)
      }).then(res => res.json())
        .then(data => {
           
            console.log(data)
            
            event.target.reset()
        })
    





}

    return (
       <div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Invoice Form</h3>
    {/* invoice part start */}
    <div>

    <form onSubmit={invoiceSubmit}>
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
   
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Full Name</span>
          </label>
          <input type="text" name='name' placeholder="Full Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name='email' class="input input-bordered" />
        
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder="Phone Number" name='phone' class="input input-bordered" />
        
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Paid Amount</span>
          </label>
          <input type="text" placeholder="Paid Amount" name='paidAmount' class="input input-bordered" />
        
        </div>
        <div class="form-control mt-6">
         <input className='btn btn-primary' type='submit' value='Submit'/>
        </div>
      </div>
    </div>
  </div>
</div>
    </form>

    </div>


    <div class="modal-action">
      <label for="my-modal" class="btn">Close</label>
    </div>
  </div>
</div>
       </div>
    );
};

export default Modal;


