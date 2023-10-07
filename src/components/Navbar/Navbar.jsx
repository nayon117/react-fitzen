import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
     <li> <NavLink to='/'>Home</NavLink>  </li>
     <li> <NavLink to='/event'>Event</NavLink>  </li>
     <li> <NavLink to='/blogs'>Blogs</NavLink>  </li>
     <li> <NavLink to='/contact'>Contact</NavLink>  </li>
    </>
    const user = ''
    return (
        <div className="navbar py-3 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             
               {navLinks}
               
            </ul>
          </div>
     <a className="btn btn-ghost normal-case text-xl">FitZen</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}  
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
              <button className="btn btn-sm whitespace-nowrap  btn-ghost">
                {user.displayName}
             </button>
              </li>         
              <li><button className="text-xl" >Logout</button></li>
            </ul>
            </div>  
              :
              <Link to='/login'><button className="btn btn-sm bg-black text-gray-400">Login</button></Link>
          } 
  
        </div>
      </div>
    );
};

export default Navbar;