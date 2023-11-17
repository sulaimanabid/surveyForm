import Sform from "./form/Sform";
import { Form, message } from "antd";
import { useState } from "react";
import { saveAs } from "file-saver";
import { SurveyData } from "../../types/surveyData";

type Props = {};

function Survey({}: Props) {
  const [surveyData, setSurveyData] = useState<SurveyData[]>([]);
  const [form] = Form.useForm();

  const onFinish = (values: SurveyData) => {
    const newData = [...surveyData, values];
    setSurveyData(newData);
    const jsonData = JSON.stringify(newData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    message.success("Successfully created a JSON file");
    saveAs(blob, "surveyData.json"); // using file saver to save data in json file and download it
    form.resetFields();
  };

  const onFinishFailed = () => {
    message.error("Please fill all the fields");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      id="submit"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Sform id={"submit"} form={form} />
    </Form>
  );
}

export default Survey;
