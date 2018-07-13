import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";

class MoodContainer extends React.Component {
  render() {
    if (this.props.current_container !== "mood") {
      return <div />;
    }
    return (
      <div>
        <h2 className="welcome-header">How are you feeling today? </h2>
        <div>
          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/loudly-crying-face_1f62d.png"
              onClick={this.props.setMood}
              alt="image1"
              id="1"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/disappointed-face_1f61e.png"
              onClick={this.props.setMood}
              alt="image2"
              id="2"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/neutral-face_1f610.png"
              onClick={this.props.setMood}
              alt="image3"
              id="3"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/grinning-face_1f600.png"
              onClick={this.props.setMood}
              alt="image4"
              id="4"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/upside-down-face_1f643.png"
              onClick={this.props.setMood}
              alt="image5"
              id="5"
            />
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, { postLog })(MoodContainer);
