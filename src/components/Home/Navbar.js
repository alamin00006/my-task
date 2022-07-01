import React from 'react';

const Navbar = () => {
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