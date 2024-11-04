"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #b3cde0;
  padding: 40px;
`;

const Title = styled.h1`
  color: #011f4b;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: black;
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 18px;
  border: 1px solid #005b96;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
`;

const GetWeatherButton = styled(Link)`
  padding: 12px 24px;
  font-size: 18px;
  color: #fff;
  background-color: #005b96;
  border-radius: 5px;

`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <PageWrapper>
      <Title>Find the Weather in Any City!</Title>
      <Description>Enter a city name below to get the current weather forecast.</Description>
      <Input
        type="text"
        value={city}
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <GetWeatherButton href={`/${city}`}>Get Weather</GetWeatherButton>
    </PageWrapper>
  );
}
