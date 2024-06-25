import styled from "styled-components";

import Spinner from "./Spinner";

const ViewportCenterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullScreenLoader = () => {
  return (
    <ViewportCenterWrapper>
      <Spinner width={60} height={60} />
    </ViewportCenterWrapper>
  );
};

export default FullScreenLoader;
