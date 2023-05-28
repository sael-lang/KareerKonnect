import React from 'react'
import './StdNavBar.css'
// import { NavLink } from 'react-router-dom';


const StdNavBar = () => {
    return (
        <div className='StdNavBar'>
            <div className='StdNavBar-Left'>
                <img src="" alt=""/>

                <div className='StdNavBar-SearchBox'>
                    
                    <input type="text"/>
                </div>
            </div>


            <div className='StdNavBar-Right'>

            </div>
        </div>
    )
}

export default StdNavBar





// {/* <nav className='navbar navbar-expand-lg navbar-mainbg'>
// <NavLink className='navbar-brand navbar-logo' to='/' exact>
//     Kareer Konnect
// </NavLink>

// <button className='navbar-toggler'
//     type='button' data-toggle='collapse'
//     data-target='#navbarSupportedContent'
//     aria-controls='navbarSupportedContent'
//     aria-expanded='false'
//     aria-label='Toggle navigation'>
//     <i className='fas fa-bars text-white'></i>
// </button>

// <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//     <ul className='navbar-nav ml-auto'>
//         <div className='hori-selector'>
//             <div className='stdNavBarLeft'></div>
//             <div className='stdNavBarRight'></div>
//         </div>

//         <li className='nav-item active'>
//             <NavLink className='nav-link' to='/' exact>
//                 <i className=''>Home</i>
//             </NavLink>
//         </li>

//         <li className='nav-item active'>
//             <NavLink className='nav-link' to='/Student_DashBoard' exact>
//                 <i className=''>View DashBoard</i>
//             </NavLink>
//         </li>

//         <li className='nav-item active'>
//             <NavLink className='nav-link' to='/StdViewResearcher' exact>
//                 <i className=''>View Researcher</i>
//             </NavLink>
//         </li>
//     </ul>
// </div>
// </nav> */}