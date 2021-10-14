import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import RouterWithPaths from "./components/RouterWithPaths";
import homePage from "./container/index";

const App = (props) => {
  const routers = [
    // {
    //   path: ["/login"],

    //   component: Auth,
    // },
    // {
    //   path: ["/logout"],
    //   component: logout,
    // },
    // {
    //   path: ["/ke-toan/:function1", "/ke-toan/:function1/:function2"],
    //   component: FrameKeToan,
    // },
    // {
    //   path: ["/ke-toan"],

    //   component: KeToan,
    // },
    {
      path: ["/"],
      exact: true,
      component: lazy(() => import("./container/index")),
    },
  ];
  return (
    <div className="App">
      {/* <Switch> */}
      {/* <Suspense fallback={<div>{"loading..."}</div>}> */}
      {routers.map((route, key) => {
        let check = !route.role
          ? true
          : route.role == props.auth.role
          ? true
          : route.isLeader
          ? true
          : false;

        if (route.component && check) return <route.component {...props} />;
        return null;
      })}
      {/* </Suspense> */}
      {/* </Switch> */}
    </div>
  );
};

export default App;
