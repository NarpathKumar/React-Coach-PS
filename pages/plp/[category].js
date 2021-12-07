//NextJS
import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useRef } from 'react';

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PLPActions from "../../redux/actions/plpActions";

//Chakra UI
import { Heading, Box, Flex, Grid, GridItem } from "@chakra-ui/react";

//Components
import BreadCrumbs from "../../Components/BreadCrumbs/breadcrumbs";
import Tedbar from "../../Components/Tedbar/tedbar";
import ProductTile from "../../Components/PLPTile/tile";

//Module Classes
import classes from "./plp.module.scss";

const Category = (props) => {
  let hiddenRef = useRef();

  const { query } = useRouter();
  const data = props.serverData;
  const Tiles = data.hits.map((tileData, index, arr) => {
    return <ProductTile key={tileData.name} data={tileData} ref={index == (arr.length-1)? hiddenRef: null}/>;
  });

  const scrollHandler = () => {
    console.log(hiddenRef)
    if (hiddenRef.current && ((window.pageYOffset + window.innerHeight) >= hiddenRef.current.offsetTop))
      console.log(`Hidden element is now visible`);
  };

  useEffect(() => {
    if (!props.plpData[query.category]) {
      props.addPlpData(props.serverData);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div>
      <Head>
        <title>{data.CurrentPageMetaData.title}</title>
        <meta
          name="description"
          content={data.CurrentPageMetaData.description}
        />
        <link rel="icon" href="/favicon copy.ico" />
      </Head>
      <BreadCrumbs itemsArr={["new-arrivals", "new"]} />
      <Heading className={classes.PlpCategoryTitle} as="h2" size={["lg"]}>
        {data.alternateH1Tag}
      </Heading>
      <Box>
        <Flex className={classes.PLPTilesSection}>
          <Box
            width="25%"
            h="500px"
            className={classes.FiltersContainer}
            display={["none", "none", "block"]}
          ></Box>

          <Box
            w={["100%", "100%", "75%"]}
            h="500px"
            className={classes.TilesContainer}
          >
            <Tedbar
              noOfProducts={data.productSearch.realPageSize}
              filterArr={data.productSearch.productSort.options}
            />
            <Grid
              templateColumns={[
                "repeat(2, 49%)",
                "repeat(3, 32%)",
                "repeat(4, 24%)",
              ]}
              gap={["2%", "1%"]}
              mt="12px"
            >
              {Tiles}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

//Component Initial Props
Category.getInitialProps = async ({ query }) => {
  let req = await fetch(`http://localhost:3000/api/plp/${query.category}/0`);
  let data = await req.json();
  return { serverData: data };
};

function mapStateToProps(store) {
  return {
    plpData: store.plpReducer,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(PLPActions, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
