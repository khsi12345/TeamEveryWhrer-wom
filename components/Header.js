import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        />
      </div>
    );
  }
}
export default Header;
