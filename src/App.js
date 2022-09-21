import React, { useContext } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experience";
import AddExperience from "./components/AddExperience";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Menu, Col, Icon } from "antd";
import useAuthentication from "./useAuthentication";
const { Text } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  const { AuthCtx } = useAuthentication();
  const { user, logOut } = useContext(AuthCtx);
  return (
    <Layout>
      <Router>
        <Header className="header">
          <Col span={6}>
            <h1 className="app-title">MyTravelExp!</h1>
          </Col>
          <Col span={10}>
            <Menu mode="horizontal" theme="dark" className="header-menu">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Icon type="team" />
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/experiences">
                  <Icon type="fire" />
                  Experiences
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/addexperience">
                  <Icon type="edit" />
                  Add an Experience
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} align="end">
            {!user ? (
              <Menu mode="horizontal" theme="dark" className="header-menu">
                <Menu.Item key="1">
                  <Link to="/login">
                    <Icon type="login" />
                    Login
                  </Link>
                </Menu.Item>
              </Menu>
            ) : (
              <Menu mode="horizontal" theme="dark" className="header-menu">
                <Menu.Item key="1" disabled={true}>
                  {user.name}
                </Menu.Item>
                <Menu.Item key="2" onClick={() => logOut()}>
                  <Icon type="logout" />
                  Logout
                </Menu.Item>
              </Menu>
            )}
          </Col>
        </Header>
        <Layout className="content-box">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/experiences">
              <Experiences />
            </Route>
            <Protected user={user} path="/addexperience">
              <AddExperience />
            </Protected>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
        <Footer>
          <Text type="secondary">
            © The Good Travel Partner. All Rights Reserved
          </Text>
        </Footer>
      </Router>
    </Layout>
  );
};

export default App;
