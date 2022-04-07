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
        // if(e.target.files[0]){
        //     console.log(window)
        //     this.setState({
                               
        //         uploadImage : e.target.files[0].getAsDataURL()
        //      });
            
        // }
        // if(e.target.files[0]){
        //     const image = (e.target.files[0]);
        //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //     uploadTask.on(`state_changed`,
        //     (snapshot)=>{
        //         console.log(snapshot);
        //     },
        //     (err) =>{
        //         console.log('this is err line')
        //         console.log(err);
        //     },
        //     ()=>{
        //         storage.ref('image').child(image.name).getDownloadURL().then(url=>{
        //             console.log(url);
        //             this.setState({
        //                 uploadImage : url
        //             });
        //         })
        //     }
        //     )
        // }
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