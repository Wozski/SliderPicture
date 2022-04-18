import styled from "styled-components";
export const PictureContainer = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size.width};
  img {
    width: 30rem;
    height: auto;
    border-radius: 10px;
  }
`;

PictureContainer.defaultProps = {
  size: {
    width: "100%",
  },
};
