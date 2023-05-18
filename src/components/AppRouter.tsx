import React from 'react';
import {Route, Routes} from "react-router-dom";
import Shop from "../pages/Shop";
import Layout from "../pages/Layout";
import {authRoutes} from "../routes/auth";
import {publicRoutes} from "../routes/public";


const AppRouter = () => {
   const isAuth = true; //TODO

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
                <Route path="*" element={<Shop/>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
