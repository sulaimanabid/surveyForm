import { Badge } from "antd";
type Props = {
  number: number;
};

function NumberedCircle({ number }: Props) {
  return (
    <Badge
      count={number}
      style={{
        backgroundColor: "#1677ff",
        fontSize: "18px",
        padding: "2px 10px",
        borderRadius: "50%",
        height: 27,
        width: 30,
      }}
    />
  );
}

export default NumberedCircle;
