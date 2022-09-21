import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider, Col, Row, Card, Icon } from "antd";
import Rating from "./Rating";
import { getExperience } from "../api";

const { Title } = Typography;

const ExperienceDetail = ({ id }) => {
  const [experience, setExperience] = useState({});
  useEffect(() => {
    id && getExperience(id).then(data => setExperience(data[0]));
  }, [id]);

  return (
    <div className="recipe-detail">
      <Divider />
      <Layout>
        <Row>
          <Col span={8} align="left">
            <Title level={2} style={{ color: "#871400" }}>
              {experience.title}
            </Title>
          </Col>
          <Col span={8} align="left">
            <Rating score={experience.rating} />
          </Col>
          <Col span={4}>
            <Icon type="shopping" /> From: {experience.from}
          </Col>
          <Col span={4}>
            <Icon type="shopping" /> To: {experience.to}
          </Col>
          <Col span={4}>
            <Icon type="fire" /> Time: {experience.time} hrs
          </Col>
          <Col span={4}>
          Travel Options: {experience.options}
          </Col>
        </Row>

        <Row>
        {/* <Col span={16} align="left">
            <Card title="Travel Options" style={{ height: 500, fontSize: 18 }}>
              <ol>
                {experience.options &&
                  experience.options.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))} 
                  {experience.options}
              </ol>
            </Card>
          </Col> */}
          <Col span={8} align="left">
            <Card title="Ingredients" style={{ height: 500 }}>
              <ul>
                {/* {experience.suggestions &&
                  experience.suggestions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))} */}
                  {experience.suggestions}
              </ul>
            </Card>
          </Col>
          <Col span={16} align="left">
            <Card title="Instructions" style={{ height: 500, fontSize: 18 }}>
              <ol>
                {experience.story &&
                  experience.story.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
              </ol>
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default ExperienceDetail;
