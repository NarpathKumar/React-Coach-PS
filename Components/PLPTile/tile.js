import Link from "next/link";
import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import classes from './tile.module.scss';

const ProductTile = ({data}) => {
  return (
      <GridItem>
        <Box>
          <Image
            maxWidth="100%"
            src="https://images.coach.com/is/image/Coach/c5288_mwszo_a0?$mobileProductTile$"
            alt="Dan Abramov"
            width="100%"
            height="250px"
            objectFit="cover"
          />
        </Box>
          <Text className={classes.Title}>{data.name}</Text>
          <Text className={classes.Price}>${data.minPrices}</Text>
      </GridItem>
  );
};

export default ProductTile;
