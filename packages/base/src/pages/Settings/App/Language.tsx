import React, { useState, useEffect } from "react";
import { useLang, useTheme } from "context-providers";
import { Container } from "components/src/Elements";

const { api } = window.bridge;

export const Language: React.FC = () => {
  const [current, setCurrent] = useState("");
  const [langs, setLangs] = useState<{ name: string; id: string }[]>([]);
  const { colors } = useTheme();
  const { lang } = useLang();

  useEffect(() => {
    api.on("res:lang:id", (_e, res) => {
      setCurrent(res);
    });
    api.on("res:all:lang", (_e, res) => {
      setLangs(res);
    });
    api.send("get:lang");
    api.send("get:all:lang");
    return () => {
      api.removeAllListeners("res:lang:id");
      api.removeAllListeners("res:all:lang");
    };
  }, []);

  return (
    <Container bg={colors.background2} scrollColor={colors.primary}>
      <p style={{ color: colors.fontSecondary, fontSize: 18 }}>
        {lang.settings.options_1.language.content.head_text}
      </p>
      <p style={{ color: colors.fontSecondary }}>{current}</p>
      <select
        value={current}
        onChange={(e) => {
          setCurrent(e.target.value);
          api.send("change:lang", { id: e.target.value });
        }}
      >
        {langs.map((lg, i) => (
          <option key={i} value={lg.id}>
            {lg.name}
          </option>
        ))}
      </select>
    </Container>
  );
};