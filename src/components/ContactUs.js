function Query(){
    return (
      <table>
        <tr></tr>
        <tr>
          <td></td>
          <th colSpan={4}>Drop Us a message</th>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text" placeholder="Your Name *" required/></td>
          <td colSpan={3} rowSpan={6}><input type="text" placeholder="Your Name *" required/></td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td></td>
          <td><input type="email" placeholder="Your email *" required/></td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td></td>
          <td><input type="number" placeholder="Your Phone *" required/></td>
        </tr>
        <tr><td></td></tr>
        <tr>
          <td></td>
          <td colSpan={2}></td>
          <td colSpan={2} rowSpan={2}>Send</td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}></td>
        </tr>
      </table>
    );
  }
  
  export default Query;