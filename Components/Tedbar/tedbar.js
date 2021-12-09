//Chakra UI
import { Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

//Classes
import classes from "./tedbar.module.scss";

//Utils
import { SORTING_IDS } from '../../utils/constants'

//React
import { useState } from 'react';

const TedBar = (props) => {
  const KEYIDS = Object.keys(SORTING_IDS);
  const filterOptions = [];
  const [dropDownText, setDropDownText] = useState("Price low to high");

  //Local Functions
  const udpateSortType = (id, text)=>{
    props.updateSortingType(id);
    setDropDownText(text);
  }

  props.filterArr.map((item) => {
    if(KEYIDS.includes(item.id)){
      filterOptions.push(
        <Text onClick={()=>udpateSortType(SORTING_IDS[item.id], item.displayName)} key={item.id} className={classes.DropdownItem} fontSize="sm">
          {item.displayName}
        </Text>
      );
    }
  });

  return (
    <Flex className={classes.TedbarContainer}>
      <Text>{props.noOfProducts} Products</Text>
      <Spacer />
      <Box className={classes.FilterDropdown}>
        <Text className={classes.HoverTest} fontSize="sm">
          Sort By:{" "}
          <span className={classes.FilterOption}>{dropDownText}</span>
          <ChevronDownIcon ml="6px" />
        </Text>

        <Box className={classes.DropdownSection}>{filterOptions}</Box>
      </Box>
    </Flex>
  );
};

export default TedBar;
