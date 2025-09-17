import { Box, Container, Stack, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import SubHeader from "../features/sub_header/SubHeader";
import Header from "./Header";
import Footer from "./Footer";

const MainWrapper = styled(Stack)({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  overflowY: "scroll",
  overflowX: "hidden",
});

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.highlight?.main,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const FooterWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.highlight?.main,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ContentContainer = styled(Container)({
  flex: "1",
  width: "100%",
  minHeight: "100vh",
});

export default function Main() {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <Container>
          <SubHeader />
          <Header />
        </Container>
      </HeaderWrapper>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <FooterWrapper>
        <Container>
          <Footer />
        </Container>
      </FooterWrapper>
    </MainWrapper>
  );
}
