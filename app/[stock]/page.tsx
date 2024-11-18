"use client";

import { Stock } from "@/app/interfaces/stock";
import { useParams } from "next/navigation";
import useSWR from "swr";
import StockCard from "@/components/stockCard";
import styled from "@emotion/styled";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  margin-top: 20px;
`;

const LoadingMessage = styled.div`
  color: #006064;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e0f7fa;
  padding: 20px;
`;

export default function StockPage() {
  const params = useParams();
  const { data, error } = useSWR<Stock>(
    `/api/getStockData?symbol=${params.stock}`,
    fetcher
  );

  if (error) {
    return (
      <PageContainer>
        <ErrorMessage>Failed to load data: {error.message}</ErrorMessage>
      </PageContainer>
    );
  }

  if (!data) {
    return (
      <PageContainer>
        <LoadingMessage>Loading...</LoadingMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <StockCard
        ticker={data.ticker}
        name={data.name}
        price={data.price}
        exchange={data.exchange}
        currency={data.currency}
        updated={data.updated}
      />
    </PageContainer>
  );
}
