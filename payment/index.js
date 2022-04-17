import axios from "axios";
import useRazorpay from "react-razorpay";
import { useRouter } from 'next/router'

export const makePayment  = async ( price = "1000", Razorpay, profile,
auth, router  ) => {


  const options = {
    key: "rzp_test_DoFJd8wtSqz0tt", 
    amount: (price * 100).toString(), 
    currency: "INR",
    name: "Custom Tshirt",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    handler: async (response) => {
      if(response.razorpay_payment_id){
        await axios.post("http://localhost:5000/order",{payment_id:response.razorpay_payment_id},{
          headers : {
            Authorization : `Bearer ${auth}`
          }
        })
      }
      alert("Payment Successful");
      router.push('/');
    },
    prefill: {
      name: profile.name,
      email: profile.email,
      contact: "+91" + profile.number,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed",  (response) => {
   alert("Payment Failed");
   console.log(response);
  });

  rzp1.open();
}


// const instance = new Razorpay({ key_id: 'rzp_test_dCc7zFPTy5AGCv', key_secret: 'yW0YMhG0nbcNJ3s4dba47FeQ' })

// await instance.orders.create({
//       name: "Manu Arora Pvt Ltd",
//       currency: "INR",
//       amount: price,
//       // order_id: ,
//       description: "Thankyou for your test donation",
//       handler:  (response) => {
//         console.log(response);
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Manu Arora",
//         email: "manuarorawork@gmail.com",
//         contact: "9999999999",
//       },
//     })

// }

// instance.orders.create({
//   amount: price,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })
// const makePayment = async () => {
//     const res = await initializeRazorpay();

//     if (!res) {
//       alert("Razorpay SDK Failed to load");
//       return;
//     }

//     // Make API call to the serverless API
//     const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
//       t.json()
//     );
//     console.log(data);
//     var options = {
//       key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
//       name: "Manu Arora Pvt Ltd",
//       currency: data.currency,
//       amount: data.amount,
//       order_id: data.id,
//       description: "Thankyou for your test donation",
//       handler: function (response) {
//         image: "https://manuarora.in/logo.png",
//         // Validate payment at server - using webhooks is a better idea.
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Manu Arora",
//         email: "manuarorawork@gmail.com",
//         contact: "9999999999",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };