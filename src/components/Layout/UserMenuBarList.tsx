import { Box } from "@mui/material";
import UserMenuBarItem from "./UserMenuBarItem";

type StylesType = {
  [className: string]: string | number;
};

export type ListType = {
  [variable: string]: Array<string> | string;
};

const UserMenuBarList: React.FC<{
  styles?: StylesType;
  list: ListType;
}> = ({ styles, list }) => {
  const { languages, currency, welcomeUser, collectionPoints, myAccount } =
    list;

  return (
    <Box
      component="div"
      sx={{
        minWidth: "100px",
        width: "auto",
        ...styles,
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {languages && currency ? (
        <>
          <UserMenuBarItem withChevron={true} name={languages[0]} />
          <UserMenuBarItem withChevron={true} name={currency[0]} />
        </>
      ) : (
        <>
          <UserMenuBarItem withChevron={false} name={welcomeUser as string} />
          <UserMenuBarItem
            withChevron={false}
            name={collectionPoints as string}
          />
          <UserMenuBarItem withChevron={true} name={myAccount[0]} />
        </>
      )}
    </Box>
  );
};

export default UserMenuBarList;
