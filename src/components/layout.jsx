import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
      <div id="site">
        <Header></Header>
        <main>
          { children }
        </main>
        <Footer></Footer>
      </div>
  )
}

export default Layout;