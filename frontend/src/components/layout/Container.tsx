import { Container as MuiContainer } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Container({ children }: Props) {
  return (
    <MuiContainer
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >
      {children}
    </MuiContainer>
  );
}

export default Container;