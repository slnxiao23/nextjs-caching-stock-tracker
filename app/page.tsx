"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import AnimatedButton from "@/components/animatedButton";
import { useRouter } from "next/navigation";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0f7fa;
  padding: 40px;
`;

const Title = styled.h1`
  color: #004d40;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 18px;
  border: 1px solid #004d40;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
`;

export default function Home() {
  const [symbol, setSymbol] = useState("");
  const router = useRouter();

  return (
    <PageWrapper>
      <Title>Stock Price Tracker</Title>
      <Input
        type="text"
        value={symbol}
        placeholder="Enter Stock Symbol"
        onChange={(e) => setSymbol(e.target.value)}
      />
      <AnimatedButton
        onClick={() => {
          if (symbol) {
            router.push(`/${symbol.toUpperCase()}`);
          }
        }}
      />
    </PageWrapper>
  );
}
