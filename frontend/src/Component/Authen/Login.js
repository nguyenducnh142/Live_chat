//create page for login
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, Input, Text } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios.post("/api/login", {
        username,
        password,
      });
      history.push("/chat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxW="sm" centerContent>
      <Box
        d="flex"
        bg="white"
        justifyContent="center"
        p={4}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        color="black"
      >
        <Text fontSize="4xl" color="black" textAlign={"center"}>
          Login
        </Text>
      </Box>
      <Box
        d="flex"
        bg="white"
        justifyContent="center"
        p={4}
        w="100%"
        m="0 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        color="black"
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          m="0 0 15px 0"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          m="0 0 15px 0"
        />
        <Button onClick={handleSubmit}>Login</Button>
      </Box>
    </Container>
  );
};
export default Login;
