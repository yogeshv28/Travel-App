import React from "react";
import {
  Col,
  Row,
  Typography,
  Layout,
  Divider,
  Form,
  Input,
  Button
} from "antd";
const { Title } = Typography;
const { TextArea } = Input;

const AddExperience = () => {
  const formItemLayout = {
    labelCol: {
      md: { span: 4 }
    },
    wrapperCol: {
      md: { span: 20 }
    }
  };
  return (
    <div className="add-recipe">
      <Layout>
        <Row>
          <Col span={24}>
            <Title level={2}>Add an Experience</Title>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <Form {...formItemLayout}>
              <Form.Item label="Title">
                <Input />
              </Form.Item>
              <Form.Item label="Author">
                <Input />
              </Form.Item>
              <Form.Item label="from">
                <Input />
              </Form.Item>
              <Form.Item label="to">
                <Input />
              </Form.Item>
              <Form.Item label="Travel options">
              <Input />
              </Form.Item>
              <Form.Item label="Travel Time in hrs">
                <Input type="number" />
              </Form.Item>
              <Form.Item label="Any Suggestions">
                <TextArea rows={8} />
              </Form.Item>
              <Form.Item label="Narrate it like a story">
                <TextArea rows={12} />
              </Form.Item>
              <Form.Item label="Map Link">
                <Input />
              </Form.Item>
              <Form.Item label="Overall Rating for 5">
                <Input type="number" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Add Experience</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default AddExperience;
