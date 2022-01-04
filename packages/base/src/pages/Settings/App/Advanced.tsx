import React from "react";
import { useTheme } from "utils";

export const Advanced: React.FC = () => {
  const { colors } = useTheme();
  return (
    <div>
      <p style={{ color: colors.fontSecondary }}>Avanzado</p>
    </div>
  );
};