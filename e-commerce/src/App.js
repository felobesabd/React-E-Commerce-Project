import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Utilities/NavBarLogin";
import Footer from "./Components/Utilities/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategory from "./Pages/Category/AllCategory";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import ChoosePaymenthoudsPage from "./Pages/Checkout/ChoosePaymenthoudsPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminSubcategoryPage from "./Pages/Admin/AdminSubcategoryPage";
import AdminAddProductsPage from "./Pages/Admin/AdminAddProductsPage";
import UserAllOrderPage from "./Pages/User/UserAllOrderPage";
import UserFavouriteProductPage from "./Pages/User/UserFavouriteProductPage";
import UserAllAddressesPage from "./Pages/User/UserAllAddressesPage";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import AdminEditProductsPage from "./Pages/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import RestPasswordPage from "./Pages/Auth/RestPasswordPage";
import AdminAddCouponPage from "./Pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Pages/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./Components/Utilities/ProtectedRoute";
import ProductsByCategory from "./Pages/Products/ProductsByCategory";
import ProductByBrand from "./Pages/Products/ProductByBrand";

function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook();
  // console.log(userData);
  // console.log(isUser);
  // console.log(isAdmin);

  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/allcategory" element={<AllCategory />}></Route>
          <Route path="/allbrand" element={<AllBrandsPage />}></Route>
          <Route path="/products" element={<ShopProductsPage />}></Route>
          <Route path="/products/:id" element={<ProductDetailsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route
            path="/products/category/:id"
            element={<ProductsByCategory />}
          ></Route>
          <Route
            path="/products/brand/:id"
            element={<ProductByBrand />}
          ></Route>

          {/* All Admin Routes */}
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allorders"
              element={<AdminAllOrdersPage />}
            ></Route>

            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            ></Route>
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            ></Route>
            <Route
              path="/admin/addbrand"
              element={<AdminAddBrandPage />}
            ></Route>
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            ></Route>
            <Route
              path="/admin/addsubcategory"
              element={<AdminSubcategoryPage />}
            ></Route>
            <Route
              path="/admin/addproducts"
              element={<AdminAddProductsPage />}
            ></Route>
            <Route
              path="/admin/addcoupon"
              element={<AdminAddCouponPage />}
            ></Route>
            <Route
              path="/admin/edit-coupon/:id"
              element={<AdminEditCouponPage />}
            ></Route>
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductsPage />}
            />
          </Route>

          {/* All User Routes */}
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route
              path="/user/allorders"
              element={<UserAllOrderPage />}
            ></Route>
            <Route
              path="/user/favouriteproducts"
              element={<UserFavouriteProductPage />}
            ></Route>
            <Route
              path="/user/addresses"
              element={<UserAllAddressesPage />}
            ></Route>
            <Route
              path="/user/add-address"
              element={<UserAddAddressPage />}
            ></Route>
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            ></Route>
            <Route path="/user/profile" element={<UserProfilePage />}></Route>
            <Route
              path="/order/paymenthoud"
              element={<ChoosePaymenthoudsPage />}
            />
          </Route>
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<RestPasswordPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
