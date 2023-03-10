import { Box } from "@mui/material";
import UserMenuBarList from "./UserMenuBarList";

const LIST_OF_ITEMS = {
  languages: ["English", "Afrikaans"],
  currency: ["USD", "Naira"],
};

const LIST_OF_USER_ITEMS = {
  collectionPoints: "Collection Points",
  welcomeUser: "Welcome user",
  myAccount: ["My Account", "Logout", "Profile", "Checkout"],
};

const UserMenuBar: React.FC<{}> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "44px",
        backgroundColor: "secondary.dark",
        px: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <UserMenuBarList list={LIST_OF_ITEMS} />
      <UserMenuBarList list={LIST_OF_USER_ITEMS} />
    </Box>
  );
};

export default UserMenuBar;
