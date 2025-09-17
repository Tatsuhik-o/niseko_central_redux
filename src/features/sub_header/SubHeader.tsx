import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

const SubHeaderContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "scrollHeight",
})<{ scrollHeight: number }>(({ scrollHeight }) => ({
  maxHeight: scrollHeight < 5 ? "150px" : "0px",
  transition: "max-height 0.5s ease-in-out",
  overflow: "hidden",
  minHeight: scrollHeight < 2 ? "50px" : "0px",
}));

export default function SubHeader() {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    const setScrollPostions = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", setScrollPostions);
    return () => {
      window.removeEventListener("scroll", setScrollPostions);
    };
  }, []);

  return (
    <SubHeaderContainer scrollHeight={scrollHeight}>
      SubHeader
    </SubHeaderContainer>
  );
}
