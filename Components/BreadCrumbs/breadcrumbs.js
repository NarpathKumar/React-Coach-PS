import { Box, Text } from "@chakra-ui/layout";
import classes from './breadcrumbs.module.scss';

const BreadCrumb = (props) => {
  let items = [];
  props.itemsArr.map((ele, pos) => {
    if (pos > 0) {
      items.push(
        <Text display="inline-block" className={classes["Breadcrumb-L2-divider"]}>
          /
        </Text>
      );
    }
    items.push(<Text display="inline-block">{ele}</Text>);
  });

  return <Box p="16px 0">{items}</Box>;
};

export default BreadCrumb;
