import React from 'react';

const Navbar = () => {
  // const [invoices, setInvoices] = useState([]);
    
  // useEffect(() =>{
  //     fetch('http://localhost:5000/billing-list')
  //     .then(res => res.json())
  //     .then(data =>setInvoices(data))
  // }, [])

    return (

        <div class="navbar bg-blue-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Logo</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-ghost">
     <h4>Paid Total</h4>
    </button>
  </div>
</div>
    );
};

export default Navbar;