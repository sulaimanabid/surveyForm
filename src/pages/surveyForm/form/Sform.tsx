import React from "react";
import {
  Row,
  Col,
  Input,
  Select,
  Typography,
  Form,
  Space,
  Button,
  Badge,
  FormInstance,
  Divider,
} from "antd";
import NumberedCircle from "../../../components/NumberedCircle";
import { InfoCircleOutlined, SendOutlined } from "@ant-design/icons";

type Props = {
  id: string;
  form: FormInstance;
};

const { Text } = Typography;
const SIZE = "middle";

function Sform({ id, form }: Props) {
  const rating = Form.useWatch("rating", form);
  const workBalance = Form.useWatch("workBalance", form);

  const handleRatings = (item: number) => {
    form.setFieldValue("rating", item);
  };

  const handleWorkBalance = (item: string) => {
    form.setFieldValue("workBalance", item);
  };

  return (
    <>
      <Divider
        orientation="center"
        style={{ fontSize: "24px", marginBottom: 20 }}
      >
        Survey Form
      </Divider>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Row style={rowStyling}>
          <Col span={24}>
            <Form.Item
              name="title"
              label={
                <>
                  <NumberedCircle number={1} />
                  <Text
                    style={{ marginLeft: 8, fontSize: 20, marginBottom: 3 }}
                  >
                    Title
                  </Text>
                </>
              }
              rules={[{ required: true, message: "Select Title" }]}
            >
              <Select
                placeholder="Select Title"
                options={options}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row style={rowStyling}>
          <Col span={24}>
            <Form.Item
              label={
                <>
                  <NumberedCircle number={2} />
                  <Row style={{ marginLeft: 8, fontSize: 20, marginBottom: 3 }}>
                    Date of Birth
                  </Row>
                </>
              }
              tooltip={{
                title:
                  "Your Date of birth is required to accurately calculate your health age.",
                icon: <InfoCircleOutlined />,
              }}
              required
            >
              <Row gutter={12}>
                <Col span={8}>
                  <Form.Item
                    name="day"
                    rules={[
                      { required: true, message: "Enter a day" },
                      {
                        pattern: /^(0?[1-9]|[12][0-9]|3[01])$/,
                        message: "Input a day between 1 to 31",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="DD"
                      style={{ width: "100%" }}
                      min={1}
                      max={31}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="month"
                    rules={[
                      { required: true, message: "Enter a month" },
                      {
                        pattern: /^(0?[1-9]|1[0-2])$/,
                        message: "Input a month between 1 to 12",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="MM"
                      style={{ width: "100%" }}
                      min={1}
                      max={12}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    name="year"
                    rules={[
                      { required: true, message: "Enter a year" },
                      {
                        pattern: /^(?:1920|19[2-9]\d|200[0-6])$/,
                        message: "Input a year between 1920 to 2006",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      min={1920}
                      max={2006}
                      placeholder="YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
        <Row style={rowStyling}>
          <Col xs={24} span={24}>
            <Form.Item
              name="rating"
              label={
                <>
                  <NumberedCircle number={3} />
                  <Row style={{ marginLeft: 8, fontSize: 20 }}>
                    On a scale of 1 - 10, with 10 being the highest, would you
                    rate the following? The usual performance of most other
                    workers in a job similar to yours
                  </Row>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Rating required",
                },
              ]}
            />
            {ratingsArr.map((item) => (
              <Button
                key={item}
                onClick={() => handleRatings(item)}
                style={{ margin: 10, height: 50, width: 50 }}
                shape="circle"
                type={rating == item ? "primary" : "default"}
              >
                {item}
              </Button>
            ))}
          </Col>
        </Row>

        <Row style={rowStyling}>
          <Col span={24}>
            <Form.Item
              name="stress"
              label={
                <>
                  <NumberedCircle number={4} />
                  <Row style={{ marginLeft: 8, fontSize: 20, marginBottom: 3 }}>
                    Are there any other sources of stress not mentioned here
                    that affect you?
                  </Row>
                </>
              }
              rules={[{ required: true, message: "Required" }]}
              tooltip={{
                title:
                  "Knowing other work or non-work drivers of stress may help your organization implement practices to counter these factors.",
                icon: <InfoCircleOutlined />,
              }}
            >
              <>
                <Input.TextArea
                  style={{ marginTop: 5 }}
                  rows={3}
                  maxLength={250}
                  placeholder="Please enter upto 250 characters."
                />
              </>
            </Form.Item>
          </Col>
        </Row>
        <Row style={rowStyling}>
          <Col span={24}>
            <Form.Item
              name="workBalance"
              label={
                <>
                  <NumberedCircle number={5} />
                  <Row style={{ marginLeft: 8, fontSize: 20, marginBottom: 3 }}>
                    How would you describe the balance between your work and
                    non-work activities?
                  </Row>
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Option required",
                },
              ]}
            />
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex", alignItems: "center" }}
            >
              {multichoice.map((item, index) => (
                <Button
                  key={item}
                  onClick={() => handleWorkBalance(item)}
                  style={{ width: 200, textAlign: "left" }}
                  type={workBalance == item ? "primary" : "default"}
                >
                  <Badge
                    className="site-badge-count-109"
                    count={String.fromCharCode(65 + index)}
                    style={{
                      backgroundColor: "rgba(0,0,0,0.18)",
                      marginBottom: 2,
                    }}
                  />
                  <span style={{ marginLeft: 5 }}>{item}</span>
                </Button>
              ))}
            </Space>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button
              block
              size={SIZE}
              htmlType="submit"
              icon={<SendOutlined />}
              type="primary"
              form={id}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Space>
    </>
  );
}

export default Sform;
const ratingsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multichoice = [
  "Ideal",
  "Satisfactory",
  "Challenging",
  "Extremely Challenging",
  "Unimaginable",
];

const rowStyling: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.020)",
  padding: 20,
  paddingTop: 10,
  borderRadius: 5,
  border: "1px solid rgba(0,0,0,0.2)",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
};

const options = [
  { label: "Mr", value: "mr" },
  { label: "Ms", value: "ms" },
  { label: "Mrs", value: "mrs" },
  { label: "Miss", value: "miss" },
  { label: "Dr", value: "dr" },
];
