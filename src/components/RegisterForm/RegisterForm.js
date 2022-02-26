import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #f1e3d3;
  width: 100%;
  padding-bottom: 15px;
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
  return (
    <>
      <StyledForm>
        <StyleLineForm onSubmit={() => {}}>
          <FormBlock className="form-block">
            <label htmlFor="display_name">Name:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_name"
              placeholder="Your Name"
              onChange={""}
              value={""}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="display_username">Username:</label>
            <StyledInput
              autoComplete="off"
              type="text"
              id="display_username"
              placeholder="Your Username"
              onChange={""}
              value={""}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="password">Password:</label>
            <StyledInput
              autoComplete="off"
              type="password"
              id="password"
              placeholder="Password"
              onChange={""}
              value={""}
            />
          </FormBlock>
          <FormBlock className="form-block">
            <label htmlFor="profile_image_url">Image:</label>
            <StyledInput
              autoComplete="off"
              type="imageInput"
              id="profile_image_url"
              placeholder="Your image"
              onChange={""}
              value={""}
            />
          </FormBlock>
        </StyleLineForm>
        <StyleButtons>
          <button type="submit" text={"Create User"} actionOnClick={() => {}} />
        </StyleButtons>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
