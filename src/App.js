import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import { uiActions } from './store/uiSlice';
// import { useRef } from 'react';


let isInitial = true;

function App() {
  const show = useSelector(state => state.toggle.showCart)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.toggle.notification)
  const dispatch = useDispatch()
  
//  const isInitial = useRef(true)
//   useEffect( () => {
    

//    const sendCartData = async () => {

//       dispatch(uiActions.showNotification({
//         title: "Sending...",
//         message: "Sending Request",
//         status: "pending"
//       }))

//         const sendRequest = async () => {
//           const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json", {
//             method: "PUT",
//             body: JSON.stringify(cart),
//             headers: {
//               "Content-Type": "application/json"
//             }
//           })
//           if (!response.ok) {
//             throw new Error ("Something went wrong try again later")
//           }
//       }

//       try {
//         await sendRequest()
//         dispatch(uiActions.showNotification({
//           status: "success",
//           title: "Success",
//           message: "Successfully send Request"
//         }))
//       } catch(error) {
//         dispatch(uiActions.showNotification({
//           status: "error",
//           title: "Failed",
//           message: error.message
//         }))
//       }
  
//     }
//     if ( isInitial.current ) {
//       isInitial.current = false;
//       return;
//     } else {
//       sendCartData() 
//     }
    
//   }, [cart, dispatch])


// useEffect(() => {
  
//   const sendRequest = async () => {
//     dispatch(uiActions.showNotification({
//       status: "pending",
//       title: "Sending...",
//       message: "Sending Request"
//     }))
//     const response = await fetch("https://redux-b81f4-default-rtdb.firebaseio.com/cart.json", {
//       method: "PUT",
//       body: JSON.stringify(cart),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     if(!response.ok) {
//       throw new Error ("Something went wrong")
//     }
//     dispatch(uiActions.showNotification({
//       status: "success",
//       title: "Success",
//       message: "Request sent"
//     }))
//   }

//   if (isInitial) {
//     isInitial = false;
//     return;
//   }
//   sendRequest().catch(error => {
//     dispatch(uiActions.showNotification({
//       status: "error",
//       title: "Failed!",
//       message: error.message
//     }))
//   })
// }, [cart, dispatch])
  return (
      <Fragment>
        {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
        <Layout>
          {show && <Cart />}
          <Products />
        </Layout>
      </Fragment>
  );
}

export default App;
