import React from "react";
import { Col, Card, Icon, Divider, Row, Typography } from "antd";
import Rating from "./Rating";
const { Paragraph } = Typography;

const ExperienceCard = ({ experience }) => {
  const { title, from, to, time, suggestions, rating } = experience;
  return (
    <Col span={8}>
      <Card title={title} style={{ height: 310 }}>
        <Row gutter={[0, 80]}>
          <Col span={24} align="center">
            <Rating score={rating} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Icon type="shopping" /> From: {from}
          </Col>
          <Col span={12}>
            <Icon type="shopping" /> To: {to}
          </Col>
          <Col span={12} align="center">
            <Icon type="fire" /> Travel Time: {time} hrs
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24} align="left">
            <Paragraph style={{ fontSize: 12 }}>{suggestions}</Paragraph>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
