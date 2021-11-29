import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationPage from './ApplicationPage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
         <div className="logo" />
          <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ApplicationPage/>}>
            </Route>
          </Routes>
          </BrowserRouter>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
