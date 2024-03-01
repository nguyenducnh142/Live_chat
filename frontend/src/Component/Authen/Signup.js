//create page for signup
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, Input, Text } from "@chakra-ui/react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios.post("/api/signup", {
        username,
        password,
      });
      history.push("/login");
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
          Sign Up
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
          isRequired
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          m="0 0 15px 0"
          isRequired
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          m="0 0 15px 0"
          isRequired
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          m="0 0 15px 0"
          isRequired
        />
        <Input
          type="file"
          placeholder="Profile Picture"
          accept="image/*"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          m="0 0 15px 0"
        />
        <Button onClick={handleSubmit} colorScheme="blue">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};
export default Signup;
