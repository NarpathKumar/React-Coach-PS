import { Grid, GridItem, Box } from "@chakra-ui/layout";

const lazyTemplate = () => {
  const lazyItemTemplates = [];
  for (let i = 0; i < 8; i++) {
    lazyItemTemplates.push(
      <GridItem height="315px" width="100%" background="#fff">
        <Box width="100%" height="250px" background="#F0F0F0"></Box>
        <Box width="100%" height={"22px"} mt={"12px"} background="#F0F0F0"></Box>
        <Box width="100%" height={"22px"} mt={"8px"} background="#F0F0F0"></Box>
      </GridItem>
    );
  }

  return (
    <Grid
      templateColumns={["repeat(2, 49%)", "repeat(3, 32%)", "repeat(4, 24%)"]}
      gap={["2%", "1%"]}
      mt="12px"
    >
      {lazyItemTemplates}
    </Grid>
  );
};

export default lazyTemplate;
