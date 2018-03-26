import React from "react";
import { connect } from "react-redux";
import { postLog } from "../actions";
import { Button } from "react-bootstrap";
class MoodContainer extends React.Component {
  cryingClick = event => {
    console.log("crying");
    event.preventDefault();
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };

  sadClick = event => {
    console.log("sad");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  neutralClick = event => {
    console.log("neutral");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  happyClick = event => {
    console.log("happy");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };
  ecstaticClick = event => {
    console.log("ecstatic");
    this.setState({
      mood_id: parseInt(event.target.id)
    });
  };

  render() {
    return (
      <div>
        <h2 className="welcome-header">How are you feeling today? </h2>
        <div>
          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/loudly-crying-face_1f62d.png"
              onClick={this.cryingClick}
              alt="image1"
              id="1"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/disappointed-face_1f61e.png"
              onClick={this.sadClick}
              alt="image2"
              id="2"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/neutral-face_1f610.png"
              onClick={this.neutralClick}
              alt="image3"
              id="3"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/grinning-face_1f600.png"
              onClick={this.happyClick}
              alt="image4"
              id="4"
            />
          </Button>

          <Button className="clickable-images" bsStyle="sucess">
            <img
              height="50"
              width="50"
              src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/upside-down-face_1f643.png"
              onClick={this.ecstaticClick}
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
