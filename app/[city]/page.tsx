"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled, { createGlobalStyle } from "styled-components";
import { Weather } from "@/app/interfaces/weather";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #b3cde0;
    font-family: Arial, sans-serif;
    color: black;
  }
`;

const WeatherContentWrapper = styled.main`
  width: 80vw;
  margin: 32px auto;
  padding: 32px;
  background-color: #6497b1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CityName = styled.h1`
  color: #011f4b;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

const WeatherCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  background-color: #cde2ee;
  border-radius: 10px;
  width: 100%;
  max-width: 1200px;
`;

export default function CityPage() {
  const params = useParams();

  // Fetch weather data with SWR
  const { data, error } = useSWR(
    `/api/getWeatherData?city=${params.city}`,
    (url: string) => fetch(url).then((res) => res.json())
  );

  // Handle error and loading states
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // If there is data, get the days otherwise an empty array.
  const days = data?.days || [];

  return (
    <>
      <GlobalStyle />
      <WeatherContentWrapper>
        <CityName>{params.city}</CityName>
        <WeatherCardsContainer>
          {days.map((weather: Weather, i: number) => (
            <WeatherCard
              key={i}
              datetime={weather.datetime}
              conditions={weather.conditions}
              description={weather.description}
              tempmin={weather.tempmin}
              tempmax={weather.tempmax}
            />
          ))}
        </WeatherCardsContainer>
      </WeatherContentWrapper>
    </>
  );
}
