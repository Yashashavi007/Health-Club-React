import React from "react";
import { NavLink } from "react-router-dom"

function Header()
{
    return(
        <table className="header-columns">
            <tr>
            <th rowspan={2}>Logo</th>
            <td></td>
            <td></td>
            </tr>
            <tr>
                <td><NavLink to='/'>Home</NavLink></td>
                <td><NavLink to='/view-appointment'>View Appointments</NavLink></td>
                <td><NavLink to='/make-appointment'>Place Appointments</NavLink></td>
                <td colSpan={2}><NavLink to='/contact'>Contact Us</NavLink></td>
            </tr>
        </table>
    )
}

export default Header;