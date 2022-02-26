import styled from "styled-components";

const NavBarStyled = styled.ul`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;

  margin: 20px;
`;

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <li>
          <button onClick={() => {}}>Register</button>
        </li>
        <li>
          <button onClick={() => {}}>Login</button>
        </li>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
