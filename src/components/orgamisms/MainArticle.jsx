import styled from "styled-components";
import { DesignComponent } from "./DesignComponent";

const Section = styled.section`
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.25rem;
`;

export const MainArticle = () => {
  return (
    <Section className="px-4 sm:px-6 lg:px-8">
      <DesignComponent />
    </Section>
  );
};

export default MainArticle;
