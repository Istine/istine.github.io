import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PARTNERS } from "../../constants";

const StyledPartnersContainer = styled(Box)({
  width: "100%",
  height: "130px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  "& img": {
    width: "80px",
    hegiht: "80%",
  },
});

const Partners: React.FC<{}> = () => {
  const OurPartnersList = PARTNERS.map((src, idx) => (
    <img
      key={idx}
      src={"/assets/logos/" + src}
      alt="our partner"
      loading="lazy"
    />
  ));
  return <StyledPartnersContainer>{OurPartnersList}</StyledPartnersContainer>;
};

export default Partners;
