import React from 'react'
import FaCog from 'react-icons/lib/fa/cog'
import {Col, Row} from "react-bootstrap"
import Button from "../Button"
import FieldGroup from '../FormControl'
import Dropzone from 'react-dropzone'
import axios, { post } from 'axios'

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: null,
      imageUrl: null
    };
    // this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.fileUpload = this.fileUpload.bind(this);
  }

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   this.fileUpload(this.state.file);
  // }
  //
  // onChange(e) {
  //   this.setState({ file: e.target.files[0] });
  // }



  onDrop = (files) => {
    // prepare form data, use data key!
    let data = new FormData()
    data.append('data', files[0])

    // use the file endpoint
    fetch('https://api.graph.cool/simple/v1/cjhfdhnwc1gyg0196jr0feqnf', {
      method: 'POST',
      body: data,
      headers: {
        'Access-Control-Allow-Origin': 'https://api.graph.cool',
        'content-type': 'multipart/form-data'
      },
      mode: 'cors',
    }).then(response => {
      console.log('response', response);
      return response;
    }).then(image => {
      console.log('image', image);
      // this.setState({
      //   imageId: image.id,
      //   imageUrl: image.url,
      // })
    })
  }

  render() {
    console.log('this.state.files', this.state.imageId)
    console.log('this.state.files', this.state.imageUrl)
    return (
      <div className="container admin-container">
        <div className="admin-box animated bounceInUp">
          <Row>
            <Col sm={12}>
            <h3><FaCog/> Profile Settings</h3>
            <Col sm={12}>
              <form>
                <h4>Header</h4>
                <Row>
                  <Col sm={6}>
                    <FieldGroup
                      id="name"
                      type="text"
                      label="Name"
                      placeholder="Enter name..."
                    />
                  </Col>
                  <Col sm={6}>
                    <FieldGroup
                      id="activity"
                      type="text"
                      label="Activity"
                      placeholder="Enter activity..."
                    />
                  </Col>
                  <Col sm={12}>
                  <h4>About</h4>
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="profile"
                      type="textarea"
                      label="Profile text"
                      componentClass="textarea"
                      placeholder="Enter profile text..."
                    />
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="skills"
                      label="Skills"
                      componentClass="textarea"
                      placeholder="Enter skills paragraph..."
                    />
                  </Col>
                  <Col sm={12}>
                    <FieldGroup
                      id="contact"
                      label="Contact"
                      componentClass="textarea"
                      placeholder="Enter contact text..."
                    />
                  </Col>
                  <Col sm={12}>
                    <Button
                      type={'button'}
                      label={'Save Changes'}
                    />
                  </Col>
                  {/*<Col sm={12}>*/}
                    {/*<Button*/}
                      {/*type={'button'}*/}
                      {/*label={'Upload'}*/}
                      {/*handleClick={this.uploadFile}*/}
                    {/*/>*/}
                    {/*<Dropzone onDrop={this.onDrop.bind(this)}>*/}
                      {/*<p>Try dropping some files here, or click to select files to upload.</p>*/}
                    {/*</Dropzone>*/}
                  {/*</Col>*/}
                </Row>
              </form>
              <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" onChange={this.onChange} />
                <button type="submit">Upload</button>
                <h2>new form</h2>
                {!this.state.imageId &&
                <Dropzone
                  onDrop={this.onDrop}
                  accept='image/*'
                  multiple={false}
                >
                  <div>Drop an image or click to choose</div>
                </Dropzone>}
                {this.state.imageUrl &&
                <img src={this.state.imageUrl} role='presentation' className='w-100 mv3' />
                }
              </form>
            </Col>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Settings