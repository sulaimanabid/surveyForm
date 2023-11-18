import { Spin } from "antd";

const Spinner = () => {
  return <Spin size="large" style={spinStyle} />;
};

export default Spinner;

const spinStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
