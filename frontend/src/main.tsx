import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Auth from './Auth.tsx'
import { Provider } from 'react-redux'
import store from './component/Redux/store.ts'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from './component/Redux/store.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth/>,
  },
  {
    path:"/home",
    element: <div>hello world</div>,
   
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={router} />
    {/* </PersistGate> */}
  </Provider>
)
