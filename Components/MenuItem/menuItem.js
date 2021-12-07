import Link from "next/link";
import { Text } from "@chakra-ui/react";
import classes from './menuItem.module.scss';

export default function MenuItem(prop) {
  return (
    <Link as={`/plp/${prop.category.toLowerCase()}`} href="/plp/[category]">
      <a>
        <Text className={classes.Menu} fontSize="xs">{prop.category.toUpperCase()}</Text>
      </a>
    </Link>
  );
}
