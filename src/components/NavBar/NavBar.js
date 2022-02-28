import { useLocation, useNavigate } from "react-router-dom";
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
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
  z-index: 99;
  p:hover {
    color: #060;
    cursor: pointer;
    font-size: large;
  }
`;

const NavBar = () => {
  const params = useLocation();
  const location = params.pathname;

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
        {location !== "/list" && (
          <li>
            <p onClick={goRegister}>Register</p>
          </li>
        )}
        {location !== "/list" && (
          <li>
            <p onClick={goLogin}>Login</p>
          </li>
        )}

        {location === "/list" && (
          <li>
            <p onClick={logOut}>LogOut</p>
          </li>
        )}
      </NavBarStyled>
    </>
  );
};

export default NavBar;
