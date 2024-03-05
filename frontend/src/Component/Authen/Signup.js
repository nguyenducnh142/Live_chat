//create page for signup
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "live-chat");
      data.append("cloud_name", "de22izcfb");
      fetch("https://api.cloudinary.com/v1_1/de22izcfb/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid file type",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Invalid Input",
        description: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Invalid Input",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
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
      setLoading(false);
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
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>
        <Button onClick={handleSubmit} colorScheme="blue" isLoading={loading}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};
export default Signup;
