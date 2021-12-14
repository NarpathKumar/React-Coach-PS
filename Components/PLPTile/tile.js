import Link from "next/link";
import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import classes from "./tile.module.scss";
import { useEffect, useRef } from "react";

const ProductTile = ({ data, isRef, setLazy }) => {
  let hiddenRef = useRef();
  const pdpID = "C4823 B4/BK".replace("/", "_");

  const scrollHandler = () => {
    if (
      hiddenRef.current &&
      window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop
    ){
      console.log(`Hidden element is now visible`);
      setLazy(true);  
      window.removeEventListener("scroll", scrollHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
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
      <Link as={`/pdp/${pdpID}`} href="/pdp/[categoryID]">
        <a>
          <Text ref={isRef ? hiddenRef : null} className={classes.Title}>
            {data.name}
          </Text>
        </a>
      </Link>
      <Text className={classes.Price}>${data.minPrices}</Text>
    </GridItem>
  );
};

export default ProductTile;
