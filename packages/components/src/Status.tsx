import React from "react";
import styled from "styled-components";

const Circle = styled.div<{ color: string }>`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(p) => p.color};
  border: 1px solid black;
  margin-right: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  background-color: #146def;
  border: 1px solid #ffffff50;
  width: fit-content;
`;

interface Props {
  state: string;
}

const getColor = (prop: string): string => {
  if (prop.includes("inalz")) return "#f41d1d";
  if (prop.includes("ublic")) return "#24b61f";
  if (prop.includes("ausa")) return "#0891d1";
  return "red";
};

export const Status: React.FC<Props> = (props) => {
  return (
    <Container>
      <Circle color={getColor(props.state)} />
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