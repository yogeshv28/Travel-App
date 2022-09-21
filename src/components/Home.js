import React from "react";
import { Typography, Col, Divider, Card } from "antd";
const { Title } = Typography;

const Home = () => {
  return (
    <Col span={24} align="center">
      <Title level={1}>Your Personal Travel Experience Organizer!</Title>
      <Divider />
      <div className="home-image" />
      <Divider />
      <Col span={8}>
        <Card title="Super Fun">
        MyTravelExp! is a super easy way to organize your Travel Experiences. You can view
          your Travel Experience cards by logging in to the system!
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Travel is fun!">
        Life is all about experiences. And unlike material things, 
        experiences stay with us no matter where we go. Finding ways to make the most of our 
        life experiences is a challenge that we face every day. As human beings, we like to put a 
        value on the things we pursue. We like to feel that what we are doing has a meaning. 
        This purpose is important to our well-being, as it’s from those experiences in life that we learn and grow. 
        Pursuing what we love brings us invaluable life lessons about ourselves and the world around us!
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Always Free!">
        MyTravelExp! is always free! We feel Travel is for everyone and to that
          end, we will always keep this service free!
        </Card>
      </Col>
    </Col>
  );
};

export default Home;
