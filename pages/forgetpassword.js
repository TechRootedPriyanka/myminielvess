import React from 'react'
import Link from "next/link";

function forgetpassword() {
  return (
    <>
    <div>
      <span>
        <div>
          <h2>FORGET PASSWORD</h2>
        </div>
        <br />
        <form >
          <input
            name="email"
            id="name"
            type="email"
            autoComplete="name"
            placeholder="Email"
            required
           
          />
        
          <br />
          <Link href="./" passHref>
            <div >Continue</div>
          </Link>
       
        </form>
      </span>
    </div>
  </>
  )
}

export default forgetpassword