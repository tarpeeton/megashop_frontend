// eslint-disable-next-line no-unused-vars
import React, { useEffect, lazy } from "react";
import Header from "./ui/navbar/navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { memo, Suspense } from "react";
import { useDispatch } from "react-redux";
import { AuthMe } from "./actions/auth.js";
import Categories from "./ui/cotegories/categories.jsx";
import Product_list from "./ui/product/product_list.jsx";
import Product_detail from "./ui/product/product_detail.jsx";
import PageNotFound from "./ui/pageNotFound.jsx";
import Loader from "./ui/loader.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
const AboutUS = lazy(() => import("./ui/banner/about.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const FaqForm = lazy(() => import("./ui/faq/faq.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const RegisterForm = lazy(() => import("./ui/auth/register.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const LoginForm = lazy(() => import("./ui/auth/login.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const ShopingForm = lazy(() => import("./ui/product/shopingForm.jsx"));
// eslint-disable-next-line react-refresh/only-export-components
const ShopinCard = lazy(() => import("./ui/product/shopinCard.jsx"));
const ShopingBag = lazy(() => import("./ui/product/shopingBag.jsx"));
const SeachProduct = lazy(() => import("./ui/search/conatiner.jsx"));

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("__token");

  useEffect(() => {
    if (!token) return;
    dispatch(AuthMe(token));
  }, [dispatch, token]);

  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Categories />} />

        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <RegisterForm />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <LoginForm />
            </Suspense>
          }
        ></Route>
        {/* KBS page */}
        <Route
          path="/faq"
          element={
            <Suspense fallback={<Loader />}>
              <FaqForm />
            </Suspense>
          }
        ></Route>
        {/*aboutus*/}
        <Route path="/product_list" element={<Product_list />} />
        <Route path="/product_detail/:id" element={<Product_detail />} />
        <Route
          path="/shoping/order/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ShopingForm />
            </Suspense>
          }
        ></Route>

        <Route
          path="/search/product"
          element={
            <Suspense fallback={<Loader />}>
              <SeachProduct />
            </Suspense>
          }
        ></Route>
        <Route
          path="/shopingCard"
          element={
            <Suspense fallback={<Loader />}>
              <ShopinCard />
            </Suspense>
          }
        ></Route>

        <Route
          path="/shopingBug"
          element={
            <Suspense fallback={<Loader />}>
              <ShopingBag />
            </Suspense>
          }
        ></Route>

        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<Loader />}>
              <AboutUS />
            </Suspense>
          }
        ></Route>
        {/*PAGE IS NOT DEFINED*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(App);
