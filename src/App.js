import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./pages/login";
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';
import UpdateProducts from "./pages/admin_products/update_products";
import CustomerOrders from "./pages/admin_view_orders/customer_orders";
import Dashboard from "./pages/admin_dashboard/dashboard";

function App() {
  return (
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="" element={<Login/>}/>
            <Route path="/home" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<UpdateProducts/>}/>
            <Route path="/customer-orders" element={<CustomerOrders/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
  );
}

export default App;
