import React from "react";
import { Layout } from "antd";
import Survey from "./Survey";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {};
const { Content } = Layout;

function MainLayout({}: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 710px)");

  const contentStyles: React.CSSProperties = {
    paddingBlock: "40px",
    paddingInline: isSmallScreen ? "0%" : "22%",
  };

  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <Content style={contentStyles}>
        <Survey />
      </Content>
    </Layout>
  );
}

export default MainLayout;
