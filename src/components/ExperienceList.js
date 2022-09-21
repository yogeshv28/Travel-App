import React, { useState, useEffect } from "react";
import { Layout, Col, Typography } from "antd";
import { useParams, Link } from "react-router-dom";
import { getExperiences } from "../api";
import ExperienceCard from "./ExperienceCard";
import ExperienceDetail from "./ExperienceDetail";

const { Title } = Typography;
const ExperienceList = () => {
  const { category, experienceId } = useParams();
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    getExperiences(category).then(data => setExperiences(data));
  }, [category]);
  return (
    <Layout>
      <Title level={3}>{category.toUpperCase()} Experiences</Title>
      <Col span={24} align="center">
        {experiences &&
          !experienceId &&
          experiences.map(experience => (
            <Link to={`${category}/${experience.id}`} key={experience.id}>
              <ExperienceCard experience={experience} />
            </Link>
          ))}
        {experienceId && <ExperienceDetail id={experienceId} />}
      </Col>
    </Layout>
  );
};

export default ExperienceList;
