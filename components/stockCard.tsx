import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { Stock } from "@/app/interfaces/stock";
import { useState } from "react";

const flip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const flipBack = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 400px;
  height: 300px;
  cursor: pointer;
`;

const Card = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  ${(props) =>
    props.flipped
      ? css`
          animation: ${flip} 0.6s forwards;
        `
      : css`
          animation: ${flipBack} 0.6s forwards;
        `}
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1.5rem;
  font-size: 1.2rem;
`;

const CardFront = styled(CardFace)`
  background-color: #004d40;
  color: #ffffff;
`;

const CardBack = styled(CardFace)`
  background-color: #006064;
  color: #ffcc00;
  transform: rotateY(180deg);
`;

export default function StockCard(props: Stock) {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setFlipped(!flipped)}>
      <Card flipped={flipped}>
        <CardFront>
          <h2>{props.ticker}</h2>
          <p>{props.name}</p>
        </CardFront>
        <CardBack>
          <div>
            <p>Current Price: ${props.price}</p>
            <p>Exchange: {props.exchange}</p>
            <p>Currency: {props.currency}</p>
            <p>Last Updated: {props.updated}</p>
          </div>
        </CardBack>
      </Card>
    </CardContainer>
  );
}
