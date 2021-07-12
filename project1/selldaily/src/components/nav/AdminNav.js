import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;



// const AdminNav = () => (
//   <nav className="bg-dark" style = {{ height : 1000}} >
//     <ul className="nav flex-column">
//       <li className="nav-item">
//         <Link to="/admin/dashboard" className="nav-link">
//           Dashboard
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/admin/product" className="nav-link">
//           Product
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/admin/products" className="nav-link">
//           Products
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/admin/category" className="nav-link">
//           Category
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/admin/sub" className="nav-link">
//           Sub Category
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/admin/coupon" className="nav-link">
//           Coupon
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/user/password" className="nav-link">
//           Password
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

// export default AdminNav;




class AdminNav extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 200 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/admin/dashboard">
            Dashboard
          </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/user/password">
         Password change
         </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
          <Link to="/admin/coupon">
           Coupon
          </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Products">
            <Menu.Item key="5">
            <Link to="/admin/product" >
              Create  Product </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="/admin/products">
           All Products update
           delete
             </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Categories">
            <Menu.Item key="9">
            <Link to="/admin/category">
          Create Category
         </Link>
            </Menu.Item>
            <Menu.Item key="10">
            <Link to="/admin/sub" >
            Create Sub Category
         </Link>
            </Menu.Item>
            
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default AdminNav