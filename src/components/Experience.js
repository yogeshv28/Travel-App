import React, { useState, useEffect } from "react";
import { Row, Layout, Menu, Divider } from "antd";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import ExperienceList from "./ExperienceList";
import { getCategories } from "../api";

const Experiences = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(cats => setCategories(cats));
  }, []);
  const { path, url } = useRouteMatch();
  return (
    <Layout>
      <Row span={12}>
        <Menu mode="horizontal" theme="dark">
          {categories &&
            categories.map((c, i) => (
              <Menu.Item key={i}>
                <Link to={`${url}/${c}`}>{c.toUpperCase()}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Row>
      <Divider />
      <Row>
        <Switch>
          <Route exact path={path}>
            <h1>Select a category</h1>
          </Route>
          <Route path={`${path}/:category/:experienceId?`}>
            <ExperienceList />
          </Route>
        </Switch>
      </Row>
    </Layout>
  );
};

export default Experiences;
