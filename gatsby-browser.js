import React from "react";
import Layout from "./src/components/layout";
import { SiteProvider } from "./src/contexts/SiteContext";

export const wrapPageElement = ({ element }) => <SiteProvider><Layout>{element}</Layout></SiteProvider>;