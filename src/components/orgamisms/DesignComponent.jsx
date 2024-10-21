import styled from "styled-components";
import { Customiser } from "../../pages/Customiser";
import { CanvasModel } from "../3dModelComponent";
import { HomePageCustom } from "../../pages/HomePageCustom";

const DesignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const DesignComponent = () => {
  return (
    <DesignWrapper>
      <HomePageCustom />
      <CanvasModel />
      <Customiser />
    </DesignWrapper>
  );
};

export default DesignComponent;
