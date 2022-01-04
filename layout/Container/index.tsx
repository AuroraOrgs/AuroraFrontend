import { NextPage } from "next";
import React from "react";
import ContainerFromBootstrap from "react-bootstrap/Container";

const Container = ({ children }: { children: React.ReactNode | NextPage }) => {
  return <ContainerFromBootstrap>{children}</ContainerFromBootstrap>;
};

export default Container;
