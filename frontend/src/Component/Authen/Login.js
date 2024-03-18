//create page for login
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { setUser } = ChatState();

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chat");
    } catch (error) {
      toast({
        title: "Invalid Input",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
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
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          m="0 0 15px 0"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          m="0 0 15px 0"
        />
        <Button onClick={handleSubmit} isLoading={loading}>
          Login
        </Button>
      </Box>
    </Container>
  );
};
export default Login;
