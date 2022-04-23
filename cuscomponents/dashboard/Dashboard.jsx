import React, { Component } from 'react'
import Display from '../design/Display'
import Setting from '../design/Setting'
// import {storage} from '../config/firebaseConfig'

 class Dashboard extends Component {
    state = {
        tshirtImage : 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mintbluetfront_ld4aqi.jpg',
        upperText : "This is upper text",
        lowerText : 'This is lower text',
        uploadImage : "http://via.placeholder.com/400x300",
        textSize : '30',
        textColor : "black"
    }
    handleTshirtColor = (e)=>{
        this.setState({ 
            tshirtImage : e.target.src
        })
    }
    handleUpperText = (e)=>{
        this.setState({
            upperText : e.target.value
        })
    }
    handleLowerText = (e)=>{
        this.setState({
            lowerText : e.target.value
        })
    }
    handleTextColor = (e)=>{
        this.setState({
            textColor : e.target.value
        })
    }
    handleTextSize = (e)=>{
        this.setState({
            textSize : e.target.value
        })
    }
    handleUploadImage = (e)=>{
        e.preventDefault()
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            

            const formData = new FormData();
            formData.append('image',image);
    const resp = await           axios.post('https://nestjs-e-back.herokuapp.com/upload',formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            this.setState({
                uploadImage : resp.data
            })
            console.log(this.state.uploadImage);
        }
    }
    render() {
        return (
            <div className='container py-5'>
                <div className="row">
                   <div className="col-lg-8">
                        <Display display={this.state}/>
                   </div>
                   <div className="col-lg-4">
                        <Setting 
                        color={this.handleTshirtColor}
                        upperText={this.handleUpperText}
                        lowerText={this.handleLowerText}
                        textColor={this.handleTextColor}
                        textSize={this.handleTextSize}
                        uploadImage = {this.handleUploadImage}
                        />
                    </div>
                </div>  
            </div>
        )
    }
}



export default Dashboard