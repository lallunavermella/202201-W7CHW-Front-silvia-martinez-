import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBarStyled = styled.ul`
  position: fixed;
  top: -17px;
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
  z-index: 99;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register");
  };

  const goLogin = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.removeItem("UserToken");
    navigate("/");
  };

  return (
    <>
      <NavBarStyled>
        <li>
          <button onClick={goRegister}>Register</button>
        </li>
        <li>
          <button onClick={goLogin}>Login</button>
        </li>
        <li>
          <button onClick={logOut}>LogOut</button>
        </li>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
