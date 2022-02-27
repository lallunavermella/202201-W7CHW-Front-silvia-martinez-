import styled from "styled-components";
import { listUserThunks } from "../../redux/thunks/thunks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import User from "../User/User";

const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const List = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUserThunks);
  }, [dispatch]);

  return (
    <ListStyled>
      {users.map((user) => (
        <User key={user.userName} user={user} />
      ))}
    </ListStyled>
  );
};

export default List;
