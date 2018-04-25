import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { withSiteData, Link } from "react-static";
import { ThemeProvider } from "styled-components";
import { maxWidth } from "styled-system";
import theme from "../theme";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Copyright from "../components/Copyright";
import Text from "../components/Text";
import TextLink from "../components/TextLink";
import ExternalLink from "../components/ExternalLink";
import Button from "../components/Button";
import Image from "../components/Image";
import titleImage from "../images/img-intro.jpg";

const MaxWidthContainer = styled(Flex)`
  ${maxWidth};
`;

const Container = props => (
  <MaxWidthContainer
    {...props}
    flexWrap="wrap"
    maxWidth={[null, "32.5rem", "44.5rem", "58rem", "70rem"]}
  />
);

const Section = props => <Flex flexWrap="wrap" px={[2, 0]} {...props} />;

const Area = props => (
  <Flex
    flexWrap="wrap"
    justifyContent={["flex-start"]}
    alignItems={"flex-start"}
    px={3}
    {...props}
  />
);

export default withSiteData(() => (
  <ThemeProvider theme={theme}>
    <Flex justifyContent={"center"}>
      <Container w={1} pt={"5rem"}>
        <Section w={1} style={{ background: "white" }}>
          <Area w={[1]}>
            <Subtitle textAlign={["left"]}>Lennart Brandt</Subtitle>
            <Title
              textAlign={["left"]}
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              Digital Product Design meets Entrepreneurship
            </Title>
            <Text textAlign={["left"]} style={{ marginBottom: "2rem" }}>
              Hi! I'm Lennart, an enthusiastic product designer with a huge
              passion for entrepreneurship. Currently, I'm working with{" "}
              <TextLink to="https://elbstack.com">elbstack</TextLink> on
              exploring new business models within the space of{" "}
              <TextLink to="https://joinweburn.com">Fitness</TextLink> and
              Blockchain. You can find my design work on{" "}
              <TextLink to="https://dribbble.com/brandtnew">Dribbble</TextLink>,
              follow me behind the scenes via{" "}
              <TextLink to="https://instagram.com/brandtnew">
                Instagram
              </TextLink>{" "}
              and explore my daily thoughts on{" "}
              <TextLink to="https://twitter.com/brandtnewww">Twitter</TextLink>.
            </Text>
            <a href="mailto:hellolennart@icloud.com">
              <Button>Get In Touch</Button>
            </a>
          </Area>
          <Area mt={"4rem"}>
            <Image src={titleImage} />
          </Area>
        </Section>
        <Section w={1} pt={[80, 120]} pb={[40]}>
          <Area
            w={[1, 6 / 12, 8 / 12]}
            justifyContent={["center", "flex-start"]}
            order={[3, 1]}
          >
            <Copyright>© 2018 Lennart Brandt</Copyright>
          </Area>
          <Area
            w={[1, 3 / 12, 2 / 12]}
            justifyContent={["center", "flex-end"]}
            pb={[24, 0]}
            order={[1, 2]}
          >
            <ExternalLink to="https://twitter.com/brandtnewww">
              Twitter
            </ExternalLink>
          </Area>
          <Area
            w={[1, 3 / 12, 2 / 12]}
            justifyContent={["center", "flex-end"]}
            pb={[24, 0]}
            order={[2, 3]}
          >
            <ExternalLink to="https://instagram.com/brandtnew">
              Instagram
            </ExternalLink>
          </Area>
        </Section>
      </Container>
    </Flex>
  </ThemeProvider>
));
