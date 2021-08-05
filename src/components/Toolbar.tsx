import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(135deg, #6b73ff 10%, #000dff 100%);
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`;

const Nav = styled.nav`
  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;

    li {
      margin-left: 20px;
      font-size: 1.2rem;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Toolbar: React.FC = () => {
  const history = useHistory();
   const goTo = (slug: string) => history.push(slug);
  return (
    <Header>
      <Brand>Toolbar</Brand>
      <Nav>
        <ul>
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => goTo("/counter")}>Counter</li>
          <li onClick={() => goTo("/document")}>Document</li>
          <li onClick={() => goTo("/todo")}>Todo</li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Toolbar;
