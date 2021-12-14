//NextJS
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PDPActions from "../../redux/actions/pdpActions";

//Chakra UI
import { Box, Flex, Image} from "@chakra-ui/react";

//Components
import HOC from "../../Components/HOC/hoc";
import PDPImage from "../../Components/PDPImage/pdpImage";
import PDPDesc from "../../Components/PDPDescription/pdpDesc";

const PDP = (props) => {
  //Router props
  const { query } = useRouter();

  //Variables
  const ID = query.categoryID || "";
  const pdpData = props.pdpData.data;

  useEffect(async () => {
    let decodedID = ID.replace("_", "/");
    let req = await fetch(`http://localhost:3000/api/pdpApi/${ID}`);
    let data = await req.json();
    if (!(props.pdpData.id == decodedID)) {
      await props.addPdpData(decodedID, data);
    }
  }, [ID]);

  return (
    <HOC dataToValidate={pdpData}>
      <div>
        <Flex mt="24px">
          <Box width="65%" height="530px" background="#F1F1F1">
            <PDPImage src="https://img1.cohimg.net/is/image/Coach/73995_b4eb1_a0?$desktopProduct$"/>
          </Box>
          <Box width="35%" height="530px" pl="24px">
            <PDPDesc />
          </Box>
        </Flex>
      </div>
    </HOC>
  );
};

function mapStateToProps(store) {
  return {
    pdpData: store.pdpReducer.pdpData,
  };
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(PDPActions, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(PDP);
