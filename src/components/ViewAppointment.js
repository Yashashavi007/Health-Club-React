import React from 'react';
import Footer from "./footer"
import Header from "./header"
import './style.css'

const ViewAppointment = () => {
    return(
        <div>
            <table className="appointments">
                <tr className='headings'>
                    <td>Serial No.</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Complete Address</td>
                    <td>Trainer Preference</td>
                    <td>Physio Required</td>
                    <td>Package</td>
                    <td>Total Amount</td>
                </tr>
                <tr>
                    <td>001</td>
                    <td>Shubh Gupta</td>
                    <td>93584624923</td>
                    <td>xyz@gmail.com</td>
                    <td>22</td>
                    <td>qsqwrqevwvqw</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>5 months</td>
                    <td>50000</td>
                </tr>
            </table>
        </div>
    )
}

export default ViewAppointment;