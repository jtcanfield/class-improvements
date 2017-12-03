import React, { Component } from 'react';

class Dues extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="Dues component">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="LHL3TDRYT7PWW">
          <table>
          <tr><td><input type="hidden" name="on0" value="Income Per Month Dues">Income Per Month Dues</td></tr><tr><td><select name="os0">
          	<option value="Unemployed">Unemployed $6.00 USD</option>
          	<option value="Under $2,000/mo">Under $2,000/mo $11.00 USD</option>
          	<option value="$2,000 – $3,500/mo">$2,000 – $3,500/mo $22.00 USD</option>
          	<option value="Over $3,500/mo">Over $3,500/mo $33.00 USD</option>
          </select> </td></tr>
          <tr><td><input type="hidden" name="on1" value="Please enter your name">Please enter your name</td></tr><tr><td><input type="text" name="os1" maxlength="200"></td></tr>
          </table>
          <input type="hidden" name="currency_code" value="USD">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
      </div>
    );
  }
}

export default Dues;
