

function Footer(){
  return(
    <table>
      <tr>
        <th colspan={4}>Useful Links</th>
        <th>Contact</th>
      </tr>
      <tr>
        <td colSpan={4}>Home</td>
        <td colSpan={4}>Company Address</td>
      </tr>
      <tr>
        <td colSpan={4}>View Appointments</td>
        <td colSpan={4}>Company Email</td>
      </tr>
      <tr>
        <td colSpan={4}>Place Appointments</td>
        <td colSpan={4}>Company Phone</td>
      </tr>
      <tr>
        <td colSpan={4}>Contact us</td>
        <td colSpan={4}>Company Fax</td>
      </tr>
      <tr colSpan={100}>
        &#169; 2021 Copyright
      </tr>
    </table>
  );
}

export default Footer;