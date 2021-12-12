import { Box, Flex, Image} from "@chakra-ui/react";

const PDPImage = ({src})=>{
    return(
        <Image objectFit="cover" height="100%" width="100%" src={src}/>
    );
}

export default PDPImage