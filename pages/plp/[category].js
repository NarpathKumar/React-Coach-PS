//NextJS
import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect, useState } from 'react';

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PLPActions from "../../redux/actions/plpActions";

//Chakra UI
import { Heading, Box, Flex, Grid} from "@chakra-ui/react";

//Components
import BreadCrumbs from "../../Components/BreadCrumbs/breadcrumbs";
import Tedbar from "../../Components/Tedbar/tedbar";
import ProductTile from "../../Components/PLPTile/tile";
import ErrorTile from "../../Components/ErrorMessage/error"
import LazyTemplate from '../../Components/LazyPlpTemplate/lazyTemplate';

//Module Classes
import classes from "./plp.module.scss";

//Utils
import { plpSorting } from '../../utils/commonMethods'
import { ERROR_TYPE } from  '../../utils/constants'

const Category = (props) => {
  //Router props
  const { query } = useRouter();

  //Local state
  let [sortingType, setSort] = useState("ascending");

  //Variables 
  let data;
  let Tiles;
  let hits;
  let currentCategory = query.category;
  let storeDataKeys = Object.keys(props.plpData)

  //Variable which will say if the store is updated or not
  let isStoreUpdated = storeDataKeys.length && storeDataKeys.includes(currentCategory);

  //Checking if the store is updated with the current Category
  isStoreUpdated && props.plpData[query.category]? (
    data = props.plpData[query.category],
    hits = plpSorting(data.hits, sortingType),
    hits.length ?
    Tiles = hits.map((tileData, index, arr) => {
      return <ProductTile key={index+1} data={tileData} isRef={index == (arr.length-1)? true: false}/>;
    })
    : Tiles = <ErrorTile mt={"100px"} message="OOPS There are no such products" type={ERROR_TYPE.INFO}/>
  ): null

  //Component functions
  const updateSortingType = (type)=>{
    setSort(type);
  }

  //Adding serverData to redux store
  useEffect( async () => {
    if (!props.plpData[query.category]) {
      await props.addPlpData(query.category, props.serverData);
    }
  }, [currentCategory]);

  return (
    isStoreUpdated?
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
              updateSortingType={updateSortingType.bind(this)}
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
    : <div></div>
  );
};

// Component Initial Props
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
