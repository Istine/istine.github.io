import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { SLIDER_ASSETS } from "../../constants";
import Counter from "./Counter";

const CssBox = styled(Box)({
  "&": {
    width: "100%",
    height: "500px",
    position: "relative",
  },
});

const Slider: React.FC<{}> = () => {
  const [count, setCount] = React.useState<number>(0);
  const Images = SLIDER_ASSETS.map((img: string, idx: number) => (
    <img
      key={idx}
      src={`/assets/pictures/${img}`}
      alt="woman and child"
      className={idx === count ? "slider-asset fade-in" : "slider-asset "}
    />
  ));
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount: number) => {
        if (prevCount == SLIDER_ASSETS.length - 1) return 0;
        return prevCount + 1;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <CssBox>
      <Counter count={count} />
      {Images[count]}
    </CssBox>
  );
};

export default Slider;
