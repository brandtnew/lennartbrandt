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
    justifyContent={["center", "flex-start"]}
    alignItems={"flex-start"}
    px={3}
    {...props}
  />
);

const onHandleClick = () => {
  window.location.href = "mailto:hellolennart@icloud.com";
};

export default withSiteData(() => (
  <ThemeProvider theme={theme}>
    <Flex justifyContent={"center"}>
      <Container w={1} pt={"5rem"}>
        <Section w={1} style={{ background: "white" }}>
          <Area w={[1, 7 / 12]}>
            <Subtitle textAlign={["center", "left"]}>Subtitle</Subtitle>
            <Title
              textAlign={["center", "left"]}
              style={{ marginBottom: "2rem" }}
            >
              Learn To Love Growth And Change And You Will Be A Success
            </Title>
            <Button onClick={onHandleClick}>Get In Touch</Button>
          </Area>
          <Area w={[1, 5 / 12]} pt={["1.5rem", "3.5rem", "6rem"]}>
            <Text textAlign={["center", "right"]}>
              As we{" "}
              <TextLink to="https://dribbble.com/brandtnew">grow</TextLink>, we
              do so in fits and starts, lurching forward then back, sometimes
              looking more like clowns than seekers. When things start shifting
              in our world, we get uncomfortable; uncertain; unsure what to do
              next.
            </Text>
          </Area>
          <Area mt={["3.5rem", "5rem"]}>
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
