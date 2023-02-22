import * as React from "react";
import { Box, styled } from "@mui/material";

type MediaType = { url: string; alt: string; value: number };

const CssBox = styled(Box)({
  "&": {
    display: "flex",
    minWidth: "80px",
  },
});

const MEDIA_LIST = [
  { url: "/assets/icons/shop.png", alt: "shop logo", value: 2 },
  { url: "/assets/icons/likes.png", alt: "likes logo", value: 3 },
];

const PageMenuIconWrapper: React.FC<{}> = () => {
  const IconsList = MEDIA_LIST.map((media: MediaType, idx: number) =>
    idx === 1 ? (
      <>
        <div className="user-initials">IO</div>
        <PageMenuIcon
          key={idx}
          Icon={
            <img
              className="md-icon"
              key={idx}
              src={media.url}
              alt={media.alt}
            />
          }
          value={media.value}
        />
      </>
    ) : (
      <PageMenuIcon
        key={idx}
        Icon={
          <img className="md-icon" key={idx} src={media.url} alt={media.alt} />
        }
        value={media.value}
      />
    )
  );

  return <CssBox>{IconsList}</CssBox>;
};

const PageMenuIcon: React.FC<{
  Icon: JSX.Element;
  value?: number;
}> = ({ Icon, value }) => {
  return (
    <Box display="flex" alignItems="center" mx={1}>
      {Icon}
      {value && (
        <Box component="span" fontSize="14px" mx={0.5}>
          {value}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(PageMenuIconWrapper);
