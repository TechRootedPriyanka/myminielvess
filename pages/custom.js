// import Dashboard from '../cuscomponents/dashboard/Dashboard'
// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import dynamic from 'next/dynamic'
import axios from 'axios'
import React, { Component } from 'react'
// import Display from '../cuscomponents/design/Display'
const Display = dynamic(() => import('../cuscomponents/design/Display'),
{
    ssr: false
})
const Setting = dynamic(() => import( '../cuscomponents/design/Setting') ,{
    ssr: false
})


 class Dashboard extends React.Component {

    state = {
        tshirtImage : 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mintbluetfront_ld4aqi.jpg',
        upperText : "This is upper text",
        lowerText : 'This is lower text',
        uploadImage : "http://via.placeholder.com/150x150",
        textSize : '30',
        textColor : "black",
        price: 750,
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
    handleUploadImage = async (e)=>{
        e.preventDefault()
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            // form data

            const formData = new FormData();
            formData.append('image',image);
    const resp = await           axios.post('http://localhost:5000/upload',formData,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                }
            })

            this.setState({
                uploadImage : resp.data
            });
        }
    }
    render() {
        return (
            <div className='container py-5'>
                <div style={{ display: "flex",paddingLeft:'10%' }}>
                   <div >
                        <Display display={this.state}  />
                   </div>
                   <div style={{ width:'50%',paddingLeft:'10%' }}>
                        <Setting 
                     
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