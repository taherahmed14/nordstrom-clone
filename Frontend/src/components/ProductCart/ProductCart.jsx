import "./ProductCart.css"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../Home/Footer";
import { Header } from "../Home/Header";

export const ProductCart = ()=>{
  const navigate = useNavigate()

   const [products, setProducts] = useState([]);
  var [pricetotal, setPrice] =useState(0)
   useEffect(() => {
     getData();
     
   }, []);

   const getData = () => {
     
     fetch("http://localhost:4500/cart ")
       .then((response) => response.json())
       .then((data) => {
         setProducts(data)
           let totalprice = 0;
        data.map(e => totalprice = e.price + totalprice)
        setPrice(totalprice)
       })
       .catch((err) => {
         console.log(err);
       });
   }

 const handleDelete = (id) => {
   fetch(`http://localhost:4500/cart/${id}`, {
     method: "DELETE",
   })
     .then((r) => {
       return r.json();
     })
     .then((res) => {
       getData();
     });
 };

  let [state, setState] = useState({})

function change(r, id) {
  
  let k= r.target.value

let todoItem = products.find((e) => {
  return e._id === id;
});

if (k == 1) {
  todoItem.price = 0
  todoItem.price = 1 * todoItem.price;
} else if (k == 2) {
  todoItem.price = 2 * todoItem.price;
} else if (k == 3) {
  todoItem.price = 3 * todoItem.price;
} else if (k == 4) {
  todoItem.price = 4 * todoItem.price;
} else {
  todoItem.price = 5 * todoItem.price;
}

fetch(`http://localhost:4500/cart/${id}`, {
  method: "PATCH",
  body: JSON.stringify(todoItem),
  headers: {
    "content-type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((r) => {
    

    getData();
  })
  .catch(() => {
   
  });

}
   console.log(state)
    return (
      <div>
        <Header/>
        <div id="main">
          <div id="para">
            <div>Shopping Bag</div>
            <div className="giftCardBox">
              <CardGiftcardIcon sx={{fontSize: '18px'}} /> 
              <div>
                Choose gift options when you check out.
              </div>
            </div>
            <div className="giftCardBox">Items in your bag are not on hold</div>
          </div>

         
          <div id="borderbox">
            
            <div className="boxes">
              {products.map((e, i) => (
                <div className="box" key={i}>
                  <img className="productimages" src={e.images[0]} alt="" />

                  <div className="proddtl">
                    <div className="prodtitle">
                      <p>{e.brand}</p>
                      <p>{e.name}</p>
                    </div>
                    <div className="proddes">
                      <p>{e.description}</p>
                    </div>
                    <div className="deldetail">
                      <div>
                          <LocalShippingOutlinedIcon />
                          <div>
                            Delivery
                          </div>  
                      </div>
                      <div>  
                          International orders usually arrive within 5–13 business
                          days. We'll give you delivery dates in checkout.
                      </div>
                    </div>
                    <p
                      onClick={() => {
                        handleDelete(e._id);
                      }}
                      className="remove"
                    >
                      Remove
                    </p>
                  </div>
                  <div className="quantbox">
                    <div>Qty</div>
                    <select name="" onChange={(r)=>{
                           change(r, e._id)
                    }} className="quantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <h3 className="price">₹{e.price}</h3>
                </div>
              ))}
            </div>
            <div id="payment">
              <div id="carddtl">
                <p>Accepted Payment Methods</p>
                <div class="paymenticon">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    class="_1b8Xo"
                    role="img"
                    title="Nordstrom Credit Card Icon"
                    viewBox="0 0 40 40"
                  >
                    <path
                      d="M39.5 31.87A1.14 1.14 0 0138.35 33H1.65A1.14 1.14 0 01.5 31.87V8.13A1.14 1.14 0 011.65 7h36.7a1.14 1.14 0 011.15 1.13z"
                      fill="#e9e9e9"
                      stroke="#e9e9e9"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M29.75 27.91a2.28 2.28 0 01-2.29 2.26H12.54a2.28 2.28 0 01-2.29-2.26V12.09a2.28 2.28 0 012.29-2.26h14.92a2.28 2.28 0 012.29 2.26z"
                      fill="#272122"
                    ></path>
                    <path
                      d="M25.385 27.5V12.8H23.2v9.13l-8.585-9.43v14.636h2.179v-8.993l.079.083z"
                      fill="#fff"
                    ></path>
                  </svg>

                  <svg
                    width="24"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    class="_1b8Xo"
                    viewBox="0 0 40 38"
                    role="img"
                    title="Visa Card Icon"
                  >
                    <path
                      d="M40 30.128c0 .82-.664 1.484-1.484 1.484H1.484A1.485 1.485 0 010 30.128V7.872c0-.819.664-1.484 1.484-1.484h37.033c.82 0 1.484.664 1.484 1.484v22.256z"
                      fill="#1a1f71"
                    ></path>
                    <path
                      d="M15.203 13.692l-4.451 10.62H7.848l-2.189-8.475c-.135-.523-.25-.713-.654-.935-.662-.357-1.75-.693-2.712-.902l.067-.308h4.674c.596 0 1.132.398 1.267 1.083l1.157 6.147 2.858-7.23zm11.379 7.151c.013-2.801-3.876-2.954-3.848-4.207.008-.383.37-.787 1.164-.89.394-.052 1.479-.091 2.709.474l.482-2.251a7.39 7.39 0 00-2.57-.47c-2.715 0-4.627 1.444-4.643 3.511-.018 1.528 1.364 2.381 2.406 2.89 1.07.521 1.428.853 1.424 1.32-.007.713-.854 1.024-1.644 1.038-1.382.022-2.183-.373-2.823-.671l-.497 2.328c.641.294 1.828.55 3.056.565 2.887 0 4.775-1.429 4.784-3.637m7.17 3.469h2.542l-2.218-10.62H31.73c-.527 0-.972.307-1.17.778l-4.12 9.842h2.884l.572-1.586h3.525zm-3.065-3.763l1.447-3.988.832 3.988zm-11.558-6.857l-2.273 10.62h-2.748l2.274-10.62z"
                      fill="#fff"
                    ></path>
                  </svg>

                  <svg
                    width="24"
                    height="23"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    class="_1b8Xo WTysX"
                    viewBox="0 0 40 38"
                    role="img"
                    title="Mastercard Card Icon"
                  >
                    <g fill-rule="nonzero" fill="none">
                      <path
                        d="M7.645 34.22v-2.04c.023-.348-.1-.688-.34-.936a1.17 1.17 0 00-.91-.357 1.222 1.222 0 00-1.118.578 1.161 1.161 0 00-1.051-.578 1.044 1.044 0 00-.931.483v-.401h-.692v3.25H3.3v-1.788a.773.773 0 01.19-.62.737.737 0 01.589-.244c.458 0 .691.306.691.857v1.81h.699V32.43a.776.776 0 01.191-.618.74.74 0 01.587-.246c.472 0 .698.306.698.857v1.81l.699-.015zm10.333-3.251H16.84v-.986h-.699v.986h-.632v.646h.645v1.496c0 .755.286 1.204 1.105 1.204.305 0 .605-.087.864-.252l-.2-.605a1.257 1.257 0 01-.611.183c-.333 0-.46-.217-.46-.544v-1.482h1.132l-.007-.646zm5.9-.082a.934.934 0 00-.838.476v-.394h-.685v3.25h.691v-1.822c0-.537.227-.837.666-.837.148-.002.294.026.432.082l.213-.68a1.45 1.45 0 00-.492-.088l.013.013zm-8.92.34a2.337 2.337 0 00-1.297-.34c-.805 0-1.33.395-1.33 1.04 0 .531.386.858 1.097.96l.333.047c.379.055.559.157.559.34 0 .252-.253.395-.725.395a1.668 1.668 0 01-1.058-.34l-.333.55a2.26 2.26 0 001.377.422c.918 0 1.45-.442 1.45-1.06 0-.62-.419-.871-1.11-.973l-.333-.048c-.3-.04-.539-.102-.539-.32 0-.217.226-.38.605-.38.35.004.694.1.998.278l.306-.57zm18.528-.34a.934.934 0 00-.838.476v-.394h-.685v3.25h.692v-1.822c0-.537.226-.837.665-.837.148-.002.295.026.432.082l.213-.68a1.45 1.45 0 00-.492-.088l.013.013zm-8.913 1.7c-.017.462.158.91.48 1.234.323.323.765.493 1.216.466a1.64 1.64 0 001.144-.387l-.332-.571c-.24.186-.531.289-.832.292a1.035 1.035 0 01-.939-1.04c0-.544.409-.997.94-1.04.3.002.591.105.83.291l.333-.57a1.64 1.64 0 00-1.144-.388 1.587 1.587 0 00-1.215.467 1.662 1.662 0 00-.481 1.233v.013zm6.479 0V30.97h-.692v.394a1.197 1.197 0 00-.998-.476c-.918 0-1.663.761-1.663 1.7 0 .94.745 1.7 1.663 1.7.388.015.76-.162.998-.476v.395h.692v-1.619zm-2.575 0a.97.97 0 01.996-.924c.522.02.933.464.925.998a.972.972 0 01-.956.967.944.944 0 01-.705-.305.989.989 0 01-.26-.736zm-8.347-1.7c-.919.013-1.653.785-1.64 1.724.013.94.768 1.69 1.686 1.676.479.026.95-.132 1.32-.442l-.332-.523a1.493 1.493 0 01-.925.34.887.887 0 01-.95-.796h2.36v-.272c0-1.02-.618-1.7-1.51-1.7l-.01-.007zm0 .633a.779.779 0 01.562.224c.15.148.238.35.243.565h-1.663a.825.825 0 01.844-.79h.014zm17.33 1.074v-2.93h-.665v1.7a1.197 1.197 0 00-.998-.477c-.918 0-1.662.761-1.662 1.7 0 .94.744 1.7 1.662 1.7.389.015.76-.162.998-.476v.395h.665v-1.612zm1.154 1.153a.326.326 0 01.23.092.323.323 0 010 .456.332.332 0 01-.23.094.332.332 0 01-.299-.197.326.326 0 010-.251.332.332 0 01.173-.17.326.326 0 01.136-.024h-.01zm0 .574a.232.232 0 00.173-.074.256.256 0 000-.34.235.235 0 00-.27-.054.242.242 0 00-.079.054.256.256 0 000 .34.246.246 0 00.186.074h-.01zm.02-.404a.131.131 0 01.087.027c.02.018.032.044.03.071a.083.083 0 01-.024.062.115.115 0 01-.07.03l.097.112h-.076l-.09-.112h-.03v.112h-.063v-.299l.14-.003zm-.073.058v.081h.073a.068.068 0 00.04 0 .035.035 0 000-.03.035.035 0 000-.031.068.068 0 00-.04 0l-.073-.02zm-3.658-1.38a.97.97 0 01.995-.925c.523.02.934.463.925.998a.972.972 0 01-.956.967.944.944 0 01-.705-.305.989.989 0 01-.26-.736zm-23.357 0v-1.626h-.692v.394a1.197 1.197 0 00-.998-.476c-.918 0-1.663.761-1.663 1.7 0 .94.745 1.7 1.663 1.7.388.015.76-.162.998-.476v.395h.692v-1.612zm-2.574 0a.97.97 0 01.995-.925c.523.02.934.463.925.998a.972.972 0 01-.956.967.944.944 0 01-.71-.302.989.989 0 01-.26-.739h.006z"
                        fill="#231F20"
                      ></path>
                      <path
                        fill="#FF5F00"
                        d="M14.729 6.198h10.476v19.249H14.729z"
                      ></path>
                      <path
                        d="M15.394 15.824c-.004-3.757 1.682-7.306 4.573-9.626-4.91-3.944-11.959-3.37-16.194 1.32-4.236 4.69-4.236 11.92 0 16.61 4.235 4.689 11.285 5.263 16.194 1.319-2.89-2.319-4.576-5.867-4.573-9.623z"
                        fill="#EB001B"
                      ></path>
                      <path
                        d="M39.34 15.824c0 4.687-2.618 8.962-6.741 11.01-4.124 2.048-9.029 1.51-12.632-1.387 2.888-2.32 4.574-5.869 4.574-9.625 0-3.755-1.686-7.303-4.574-9.624 3.603-2.897 8.508-3.435 12.632-1.387 4.123 2.048 6.74 6.323 6.74 11.01v.003zM38.194 23.398v-.387h.155v-.08h-.393v.08h.168v.387h.07zm.764 0v-.467h-.12l-.138.334-.14-.334h-.105v.467h.086v-.35l.129.303h.09l.128-.303v.353l.07-.003z"
                        fill="#F79E1B"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p>Need help? Call 1.888.282.6060</p>
              </div>
              <div id="subtotal">
                <p>
                  Subtotal &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; ₹{pricetotal}
                </p>
                <button
                  onClick={() => {
                    navigate("/checkout");
                  }}
                  id="submitbtn4"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}