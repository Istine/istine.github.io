import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PRODUCT_IMAGES } from "../../constants";
import StarIcon from "@mui/icons-material/Star";

type ProductInput = {
  image: string;
  title: string;
  price: number;
  desc: string;
  rating: number;
};

const CssCard = styled(Box)({
  "&": {
    display: "flex",
    flexDirection: "column",
    width: "170px",
    height: "auto",
    margin: "0 1rem",
    position: "relative",
  },
});

const SaleMarker = styled(Box)({
  width: "auto",
  height: "auto",
  padding: ".15rem .5rem",
  backgroundColor: "red",
  color: "white",
  position: "absolute",
  top: "10px",
  left: "10px",
  fontSize: "10px",
  fontFamily: "montserrat",
  fontWeight: 600,
});

const RatingCard = styled(Box)({
  width: "auto",
  height: "auto",
  padding: ".2rem .3rem",
  backgroundColor: "#252B42",
  display: "flex",
  fontSize: "12px",
  borderRadius: "7px",
});

const ProductCard: React.FC<ProductInput> = ({
  image,
  title,
  price,
  desc,
  rating,
}) => {
  return (
    <CssCard>
      <SaleMarker component="span">Sale</SaleMarker>
      <img src={`/assets/pictures/${image}`} alt={title} />
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          component="h4"
          sx={{
            fontFamily: "montserrat",
            fontSize: "10px",
            textTransform: "capitalize",
          }}
        >
          {title}
        </Box>
        <RatingCard>
          <StarIcon sx={{ color: "#FFCE31", fontSize: "10px" }} />
          <Box component="div" color="white" fontSize="10px">
            {rating}
          </Box>
        </RatingCard>
      </Box>
      <Box
        component="p"
        sx={{ color: "#737373", fontFamily: "montserrat", fontSize: "13px" }}
      >
        {desc}
      </Box>
      <Box
        sx={{
          color: "#2D9CDB",
          fontFamily: "montserrat",
          fontWeight: "700",
          fontSize: "12px",
        }}
        component="span"
      >
        NGN{price}
      </Box>
    </CssCard>
  );
};

const ProductCards: React.FC<{}> = () => {
  const Cards = PRODUCT_IMAGES.map((item, idx) => (
    <ProductCard key={idx} {...item} />
  ));
  return (
    <Box display="flex" alignItems="center" justifyContent="center" py={2}>
      {Cards}
    </Box>
  );
};

export default ProductCards;
