import type { ReactNode } from "react";
import React from "react";
import { styled, ThemeProvider } from "@mui/material";

import { ApolloProvider } from "@apollo/client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import client from "@/graphql/apollo-client";
import { theme } from "@/theme/theme";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header />
        <MainSC>{children}</MainSC>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
};

const MainSC = styled("main")`
  flex-grow: 1;
`;

export default MainLayout;
