import React from "react";

function Display(props) {
  return (
    <div>
      <div>
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
                  <img src={props.display.uploadImage} alt="uploadImage" />
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
    </div>
  );
}

export default Display;
