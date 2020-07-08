import React from "react";

import "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
