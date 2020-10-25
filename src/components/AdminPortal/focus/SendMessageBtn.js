import React, { Component } from "react";
import Button from "../../general/Button";


class SendMessageBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    const { responseType } = this.props;
    var cname = "text-white button "
    if(responseType === "yes") {
      cname = cname + "green-bg";
    } else if(responseType === "maybe") {
      cname = cname + "yellow-bg";
    } else {
      cname = cname + "primary-btn";
    }

    return (
      <Button
        label="SEND"
        className={cname}
        style={{ position: "absolute", bottom: 60, width: "90%" }}
      />
    );
  }
};

export default SendMessageBtn;
