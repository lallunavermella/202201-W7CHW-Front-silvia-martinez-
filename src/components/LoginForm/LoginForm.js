import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUserThunk } from "../../redux/thunks/thunks";

const StyledForm = styled.form`
  background-color: #f1e3d3;
  width: 100%;
  padding-bottom: 15px;
  position: relative;
  top: 120px;
`;
const StyleLineForm = styled.div`
  color: #99c1b9;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const StyleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 10px;
`;
const StyledInput = styled.input`
  height: 50px;
  border-style: none;
  padding-left: 10px;
  margin-top: 10px;
  border-radius: 5px;

  &[id="description"] {
    height: 200px;
  }

  &:focus {
    outline: 1px solid #6200ee;
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const initalFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initalFields);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      userName: formData.username,
      password: formData.password,
    };

    await dispatch(loginUserThunk(newUser));
    resetForm();
    navigate("/");
  };

  const resetForm = () => {
    setFormData(initalFields);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyleLineForm>
          <FormBlock className="form-block">
            <label htmlFor="username">Username:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="username"
              placeholder="Your Username"
              onChange={changeData}
              value={formData.username}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="password">Password:</label>
            <StyledInput
              autoComplete="off"
              type="password"
              id="password"
              placeholder="Password"
              onChange={changeData}
              value={formData.password}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <button type="submit">Login</button>
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default LoginForm;
