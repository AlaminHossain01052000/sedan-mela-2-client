
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AuthProvider from './Pages/Shared/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import ExploreNow from './Pages/Explore/ExploreNow/ExploreNow';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddAProduct from './Pages/Dashboard/AddAProduct/AddAProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import useAuth from './Pages/hooks/useAuth';
import MakePayment from './Pages/Dashboard/MakePayment/MakePayment';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  const { admin } = useAuth()||{};
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/home" element={<Home></Home>}/>
            <Route path="/explore" element={<ExploreNow></ExploreNow>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/register" element={<Register></Register>}/>
            {
              admin?
              
              <Route
              path="/dashboard"
              element={
                <AdminRoute>
                        <Dashboard/>
                </AdminRoute>
                  
              }
            />
              :
              <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard/>
                </PrivateRoute>
                  
              }
              />
            }
                    <Route
              path="/dashboard/payment"
              element={
                <PrivateRoute>
                  <MakePayment/>
                </PrivateRoute>
                  
              }
            />
                    <Route
              path="/dashboard/myOrders"
              element={
                <PrivateRoute>
                 <MyOrders/>
                </PrivateRoute>
                  
              }
            />
            <Route
              path="/dashboard/makeAdmin"
              element={
                <PrivateRoute>
                        <MakeAdmin/>
                    </PrivateRoute>
                  
              }
            />
            <Route
              path="/dashboard/review"
              element={
                <PrivateRoute>
                        <AddReview></AddReview>
                    </PrivateRoute>
                  
              }
            />
            <Route
              path="/dashboard/manageOrders"
              element={
                <AdminRoute>
                        <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                  
              }
            />
            
            <Route
              path="/dashboard/addProduct"
              element={
                <AdminRoute>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                  
              }
            />
            <Route
              path="/dashboard/manageProducts"
              element={
                <AdminRoute>
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                  
              }
            />
                
            <Route
              path="/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
                  
                
              }
            />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
