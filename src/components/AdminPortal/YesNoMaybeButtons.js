import React, { Component } from "react";

class YesNoMaybeButtons extends Component {
  render() {
    return (
      <section className="YNM-buttons">
      <button type="button" value="yes">[yes]</button>
      <button type="button" value="maybe">[maybe]</button>
      <button type="button" value="no">[no]</button>
    </section>
    );
  }
}

export default YesNoMaybeButtons;