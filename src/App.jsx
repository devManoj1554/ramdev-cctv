import React from "react";

import AppRouter from "./router/AppRouter";
import FloatingWhatsapp from "./components/common/FloatingWhatsapp";
import ScrollTop from "./components/common/ScrollTop";
import BusinessSchema from "./components/common/BusinessSchema";

function App() {
  return (
    <>
      <ScrollTop />
      <BusinessSchema />
      <AppRouter />
      <FloatingWhatsapp />
    </>
  );
}

export default App;
