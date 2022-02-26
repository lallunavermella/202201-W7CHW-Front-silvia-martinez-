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
    userName: "",
    password: "",
    image: "",
  };

  const [formData, setFormData] = useState(initalFields);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUserThunk(formData));
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
      <StyledForm>
        <StyleLineForm onSubmit={onSubmit}>
          <FormBlock className="form-block">
            <label htmlFor="display_name">Name:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_name"
              placeholder="Your Name"
              onChange={changeData}
              value={formData.name}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="display_username">Username:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_username"
              placeholder="Your Username"
              onChange={changeData}
              value={formData.userName}
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
            <label htmlFor="profile_image_url">Image:</label>
            <StyledInput
              autoComplete="off"
              type="imageInput"
              id="profile_image_url"
              placeholder="Your image"
              onChange={changeData}
              value={formData.image}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <button type="submit" text={"Create User"} actionOnClick={onSubmit} />
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
