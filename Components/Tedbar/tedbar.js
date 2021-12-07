import { Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import classes from "./tedbar.module.scss";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

const TedBar = (props) => {
  const filterOptions = props.filterArr.map((item) => {
    return (
      <Text id={item.id} className={classes.DropdownItem} fontSize="sm">
        {item.displayName}
      </Text>
    );
  });

  return (
    <Flex className={classes.TedbarContainer}>
      <Text>{props.noOfProducts} Products</Text>
      <Spacer />
      <Box className={classes.FilterDropdown}>
        <Text className={classes.HoverTest} fontSize="sm">
          Sort By:{" "}
          <span className={classes.FilterOption}>Price low to high</span>
          <ChevronDownIcon ml="6px" />
        </Text>

        <Box className={classes.DropdownSection}>{filterOptions}</Box>
      </Box>
    </Flex>
  );
};

export default TedBar;
