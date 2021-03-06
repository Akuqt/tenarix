import React from "react";
import styled from "styled-components";
import { BaseTheme } from "types";

const Circle = styled.div<{ color: string }>`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(p) => p.color};
  border: 1px solid black;
  margin-right: 8px;
`;

const Container = styled.div<{ bg: string; border: string }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  background-color: ${(p) => p.bg};
  border: 1px solid ${(p) => p.border};
  width: fit-content;
`;

interface Props {
  state: string;
  colors: BaseTheme;
}
export const Status: React.FC<Props> = (props) => {
  return (
    <Container bg={props.colors.primary} border={props.colors.buttons.border}>
      <Circle color={props.colors.secondary} />
      <p
        style={{
          fontSize: 15,
          color: "#000",
        }}
      >
        {props.state}
      </p>
    </Container>
  );
};
