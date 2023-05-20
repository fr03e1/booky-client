import React from 'react';
import {Route, Routes} from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import Layout from "../pages/Layout";
import {authRoutes} from "../routes/auth";
import {publicRoutes} from "../routes/public";
import ErrorPage from "../pages/ErrorPage";


const AppRouter:React.FC = () => {
   const isAuth = false; //TODO

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {isAuth &&
                    authRoutes.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                    ))}

                {publicRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))}
                <Route path="*" element={<ErrorPage/>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
