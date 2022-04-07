import React, { Component } from "react";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "http://via.placeholder.com/400x300"
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }
  render() {
    // let { imagePreviewUrl } = this.state;
    // let $imagePreview = null;
    // if (imagePreviewUrl) {
    //   $imagePreview = <span url={imagePreviewUrl} onChange={this.props.url}></span>;
    // }
    return (
      <div className="row">
        <form>
          <div className="col-8">
            <input type="file" onChange={this._handleImageChange} />
          </div>
          <div className="col-4">
            <button
              type="btn"
              url={this.state.imagePreviewUrl}
              onClick={this.props.uri}
              className="btn btn-info rounded my-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
