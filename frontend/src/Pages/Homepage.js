import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Signup from "../Component/Authen/Signup";
import Login from "../Component/Authen/Login";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      history.push("/chat");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        bg="white"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" color="black" textAlign={"center"}>
          Welcome to the homepage
        </Text>
      </Box>
      <Box
        d="flex"
        bg="white"
        justifyContent="center"
        p={4}
        w="100%"
        m="0 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color={"black"}
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab color={"black"}>Login</Tab>
            <Tab color={"black"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default Homepage;
