import { Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const pulse = keyframes`
  0% {
    transform: scale(1);
    background-color: #1976d2;
  }
  50% {
    transform: scale(1.1);
    background-color: #1565c0;
  }
  100% {
    transform: scale(1);
    background-color: #1976d2;
  }
`;

const AnimatedButton = styled(Button)`
  animation: ${pulse} 1.5s infinite;
  margin-top: 20px;
`;

export default function MyAnimatedButton({ onClick }: { onClick: () => void }) {
  return (
    <AnimatedButton
      variant="contained"
      sx={{
        bgcolor: 'yellow',
        color: 'black',
        '&:hover': {
          bgcolor: 'red',
        },
      }}
      onClick={onClick}
    >
      Check Stock
    </AnimatedButton>
  );
}
