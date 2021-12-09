import Link from "next/link";
import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import classes from './tile.module.scss';
import { useEffect, useRef } from 'react';


const ProductTile = ({data , isRef}) => {
  let hiddenRef = useRef();

  const scrollHandler = () => {
    if (hiddenRef.current && ((window.pageYOffset + window.innerHeight) >= hiddenRef.current.offsetTop))
      console.log(`Hidden element is now visible`);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

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
          <Text ref={isRef? hiddenRef: null} className={classes.Title}>{data.name}</Text>
          <Text className={classes.Price}>${data.minPrices}</Text>
      </GridItem>
  );
};

export default ProductTile;
