import React from "react";
import { useState } from "react";
import Airtable from "airtable";
import { useToast,Stack,Input,Button,Box,Text, Center } from "@chakra-ui/react";

const apiId = process.env.NEXT_PUBLIC_API_BASE_ID;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const base = new Airtable({ apiKey }).base(
  apiId 
);

export default function JoinUs() {
  const [linkExpend, setLinkExpend] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      await base("Subscribers").create([{ fields: { Email: email } }]);
      toast({
        position:'top',
        
        render: () => (
          <Box
            p={3}
            bg="yellow"
            border="2px solid green"
            borderRadius="md"
            color="Black"
            fontWeight={600}
            textAlign="center"
          >
            <Text fontSize="lg">Success!</Text>
            <Text>You have successfully subscribed.</Text>
          </Box>
        ),
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast({
        position: 'top',
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  };


  return (
    <div className="text-center bg-[#FECF21] border-dark border-t-2">
      <div className="section">
        <h3 className="mb-5 h1"> Subscribe to our Newsletter!</h3>
       
      <Box   >
<Center>
      
        <form
                style={{ background: "transparent" }}
                onSubmit={handleSubmit}
              >
                <Stack
                  direction={{ base: "row", md: "row" }}
                  mb={{ base: "30px", md: "30px" }}
                  bg={"transparent"}
                  border="2px solid black"
                  rounded={"10px"}
                  justify="center"
                  gap={5}
                  p={2}
                  align={{ base: "dow", md: "initial" }}
                >
                  <Input
                    placeholder="Enter your email"
                    bg={"transparent"}
                    font-weight="400"
                    fontSize={{ base: "16px", md: "20px" }}
                    px={{ base: "8px", md: "10px" }}
                    py={{ base: "8px", md: "12px" }}
                    type="email"
                    value={email}
                    outline="black"
                    border="black"
                    _placeholder={{ color: "black" }}
                    boxShadow="none !important"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn"
                  
                  >
                    {loading ? "Submitting..." : "Subscribe"}
                  </button>
                </Stack>
              </form>
              </Center>
              </Box>
      </div>
    </div>
  );
}
