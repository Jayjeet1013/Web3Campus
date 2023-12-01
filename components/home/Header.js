import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "./Nav";
import { Box, Center } from "@chakra-ui/react";

function Earn() {
  return (
    <div className="w-full">
      <div className="w-full p-5 border-b-2 border-dark">
        <h1 className="h3 pb-3">
          Browse 
          blockchain jobs in web3
         
        </h1>
        <Link href="https://web3.career/">
          <button className="btn">💰 Explore now</button>
        </Link>
      </div>

  
    </div>
  );
}

function Build() {
  return (
    <div className="w-full p-5 border-b-2 border-dark" >
      <div>
        <h3 className="pb-3 h3 leading-[50px]">
          We have prepared a list of
        <b> 100+ </b> Blockchain projects,
       that you can <b>Build </b> right now
        </h3>

        <Link href="/resources/projects">
          {" "}
          <button className="btn">🛠 Build now</button>
        </Link>
      </div>
    </div>
  );
}

function Learn() {
  return (
    <Box>
      
      <div className="w-full p-5 border-b-2 border-dark ">
        <h1 className="h3 pb-3">
          Gain More Knowledge
        
          <b>By Reading</b> Whitepapers <br />
        </h1>
        <Link href="/resources/whitepaper">
          <button className="btn">👨‍💻 Read now</button>
        </Link>
      </div>

      <div className="w-full p-5  border-b-2 border-dark">
        <h1 className="h3 pb-3">
          Learn about Metaverse, NFTs, Blockchain, Web3 and much more...
        </h1>
        <Link href="/resources/documentary">
          {" "}
          <button className="btn">👨‍💻 Learn now</button>
        </Link>
      </div>
    </Box>
  );
}

export default function Header() {
  return (
    <Box className="text-center" bg={'blue.100'}>
      
      
          {/* Learn Section */}
       
            <Learn />
        
          {/* Build Section */}

            <Build />
        
          
          {/* Earn Section */}
         
            <Earn />
       
    

    </Box>
  );
}
