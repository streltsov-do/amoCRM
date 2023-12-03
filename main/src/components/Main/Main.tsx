import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageMain } from "../../pages/PageMain/PageMain";

function Main() {
  type tRoutesArr = Array<{
    path: string;
    element: React.ReactElement;
    // exact: boolean;
  }>;
  const ROUTES_ARR: tRoutesArr = [
    {
      path: "/",
      element: <PageMain />,
      // exact: true,
    },
  ];

  return (
    <Routes>
      {ROUTES_ARR.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          // exact={item.exact}
          element={item.element}
        />
      ))}
    </Routes>
  );
}

export { Main };
