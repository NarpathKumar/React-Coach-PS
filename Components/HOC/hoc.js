import { Image, Center } from '@chakra-ui/react';

const HOC = (props)=>{
    return(
        props.dataToValidate?
        props.children
        :
        <Center mt={"50px"}>
            <div>
                <Image src="https://cdn.impression.co.uk/2021/03/loading1.gif"/>
            </div>
        </Center>
    );
}

export default HOC;