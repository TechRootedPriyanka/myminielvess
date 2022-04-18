import React, { useRef } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import html2canvas from 'html2canvas';
import { useDispatch } from "react-redux";
import { addCustomProduct } from "../../redux/cart.slice";
import Image from 'next/image'
import { useRouter } from "next/router";
function Display(props) {
  const componentRef = useRef();
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div>
      <div ref={componentRef}>
        <div style={{ display: "flex" }}>
          <div>
            <div
              style={{
                backgroundImage: "url(/tshirt.png)",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "80vh",
              }}
            >
              <div style={{ paddingTop:'170px' }}>
                <div>
                  <p
                    style={{
                     
                      textAlign: "center",
                      color: props.display.textColor,
                      fontSize: props.display.textSize + "px",
                    }}
                  >
                    {props.display.upperText}
                  </p>
                </div>
                <div style={{ paddingLeft:'150px', paddingRight:'150px'}}>
                  <Image  src={props.display.uploadImage} alt="uploadImage"
                   width={300}
                    height={300}
                  />
                </div>
                <div>
                  <p
                    style={{
            
                      textAlign: "center",
                      color: props.display.textColor,
                      fontSize: props.display.textSize + "px",
                    }}
                  >
                    {props.display.lowerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={async () =>{
        
      
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      html2canvas(componentRef.current,
        
        {
          useCORS: true,
          allowTaint: true,
          imageTimeout: 100,
       
          }
        ).then(function (canvas) {
          // console.log("canvas");
          canvas.toBlob(function(blob) {
            dispatch(addCustomProduct({
             quantity: 1, 
             "price": 350,
             "image": blob, 
             "category": "T-shirt", 
             "product": "Custom T-shirt",
             "id": randomString,
            }))
           }, "image/jpeg");
           alert("Custom T-shirt added to cart")
            router.push('/cart')
        }
        )
      }}>save</button>
    </div>
  );
}

export default Display;
