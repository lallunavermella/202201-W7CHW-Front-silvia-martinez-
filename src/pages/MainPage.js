import styled from "styled-components";

const Title = styled.h1`
  color: #8e7dbe;
  font-size: 26px;
  width: 100%;
  top: 100px;
  position: relative;
`;

const MainPage = () => {
  return (
    <>
      <div className="container">
        <Title>Social Network</Title>
      </div>
    </>
  );
};

export default MainPage;
