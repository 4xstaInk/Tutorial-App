import React, { Component } from "react";

import { CURRENT_YEAR } from "../Config Folder/DateConfig.js";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer id="Footer" class="w3-dark-grey p-5 mt-5">
          <a
            href="#"
            id="Arrow_Up"
            class="w3-button w3-black w3-padding-large w3-margin-bottom"
          >
            <i class="fa fa-arrow-up w3-margin-right"></i>To the top
          </a>
          <p>&copy;{CURRENT_YEAR}</p>
        </footer>
      </div>
    );
  }
}
