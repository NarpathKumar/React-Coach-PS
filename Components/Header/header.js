import { Box, Center, Heading, Grid, Flex } from "@chakra-ui/react";
import { BRAND, MENUITEMS } from "../../utils/constants";
import MenuItem from "../MenuItem/menuItem";

export default function Header() {
  let navItems = MENUITEMS.map((item, pos) => {
    return <MenuItem key={item} category={item} />;
  });

  const gridItems = (length, device) => {
    if (device == "mobile") {
      return length <= 4 ? length : 4;
    }
    if (device == "tablet") {
      return length <= 5 ? length : 5;
    }
    if (device == "desktop") {
      return length <= 8 ? length : 8;
    }

    return 11;
  };

  return (
    <Box
      className="nav-container"
      background="white"
      p={["0 12px 16px", "0 12px 24px", "0 87.6px 32px"]}
      boxShadow="0 1px 4px 0 rgb(0 0 0 / 10%)"
    >
      <Center mb={["16px", "24px"]}>
        <Heading as="h6" size="lg">
          {BRAND}
        </Heading>
      </Center>
      <Center>
        <Grid
          templateColumns={[
            `repeat(${gridItems(MENUITEMS.length, "mobile")}, 0fr)`,
            `repeat(${gridItems(MENUITEMS.length, "tablet")}, 0fr)`,
            `repeat(${gridItems(MENUITEMS.length, "desktop")}, 0fr)`,
          ]}
          gap={[6, null, 8]}
          rowGap={[2, 4, 6]}
        >
          {navItems}
        </Grid>
      </Center>
    </Box>
  );
}
