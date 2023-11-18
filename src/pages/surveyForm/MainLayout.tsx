import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Survey from "./Survey";
import useMediaQuery from "../../hooks/useMediaQuery";
import Spinner from "../../components/Spinner";

type Props = {};
const { Content } = Layout;

function MainLayout({}: Props) {
  const [loading, setLoading] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 710px)");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const contentStyles: React.CSSProperties = {
    paddingBlock: "40px",
    paddingInline: isSmallScreen ? "0%" : "22%",
  };

  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      {loading ? (
        <Spinner />
      ) : (
        <Content style={contentStyles}>
          <Survey />
        </Content>
      )}
    </Layout>
  );
}

export default MainLayout;
