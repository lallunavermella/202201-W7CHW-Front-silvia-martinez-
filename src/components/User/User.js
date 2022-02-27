import styled from "styled-components";

const UserCard = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #99c1b9;
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 25px;
  border: 3px solid grey;
  width: 380px;
  img {
    height: 120px;
  }
`;

const Nombre = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #8e7dbe;
`;

const Username = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #d88c9a;
`;

const Connect = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #d88c9a;
`;

const User = ({ user: { name, userName, image, friend, enemie } }) => {
  return (
    <>
      <UserCard>
        <Nombre>{name}</Nombre>
        <Username>{userName}</Username>
        <img src={image} alt="imagen robot" />
        <Connect>
          Amigos:{" "}
          {friend.map((f) => {
            return <div>{f.name}</div>;
          })}
        </Connect>

        <Connect>Enemigos: {enemie}</Connect>
      </UserCard>
    </>
  );
};

export default User;
