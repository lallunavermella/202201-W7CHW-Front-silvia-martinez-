import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUserThunk } from "../../redux/thunks/thunks";

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

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initalFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initalFields);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("userName", formData.username);
    data.append("password", formData.password);
    data.append("image", formData.image);

    await dispatch(registerUserThunk(data));
    resetForm();
    navigate("/");
  };

  const resetForm = () => {
    setFormData(initalFields);
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyleLineForm>
          <FormBlock className="form-block">
            <label htmlFor="name">Name:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="name"
              placeholder="Your Name"
              onChange={changeData}
              value={formData.name}
            />
          </FormBlock>
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
          <FormBlock className="form-block">
            <label htmlFor="image">Image:</label>
            <StyledInput
              autoComplete="off"
              type="file"
              id="image"
              placeholder="Your image"
              onChange={changeData}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <button type="submit">Register</button>
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
