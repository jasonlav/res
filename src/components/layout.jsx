import React, {useEffect, useRef, useState} from "react";
import Header from "./header";
import Footer from "./footer";
import {graphql, useStaticQuery} from "gatsby";
import Feed from "./feed";
import { useLocation } from '@reach/router';
import ContentModal from "./content-modal";
import { useScrollYPosition } from "react-use-scroll-position";
import "../site.scss";

function Layout({ children }) {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [pageY, setPageY] = useState(0);
  const scrollY = useScrollYPosition();
  const feedElement = useRef();

  const { posts } = useStaticQuery(graphql`
    query {
      posts: allContentfulPost {
        nodes {
          title
          slug
          internal {
            type
          }
        }
      }
    }
  `);

  useEffect(() => {
    if(location.pathname === '/') {
      setModal(false);
      document.documentElement.setAttribute('data-scroll', true);
      document.documentElement.scrollTop = `${pageY}`;
    } else {
      setPageY(scrollY);
      setModal(true);
      document.documentElement.setAttribute('data-scroll', false);
    }
  }, [location]);

  return (
      <div id="site">
        <Header></Header>
        <main>
          {modal && (<ContentModal>{ children }</ContentModal>)}
          <div style={{transform: modal ? `translate(0, ${-pageY}px)` : ''}}>
            <Feed posts={posts}></Feed>
          </div>
        </main>
        <Footer></Footer>
      </div>
  )
}

export default Layout;