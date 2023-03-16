import MiniLogo from "../../assets/MiniLogo.svg"
import StatusBar from "../../assets/StatusBar.svg"
import Like from "../../assets/Like.svg"
import Dislike from "../../assets/Dislike.svg"
import Comment from "../../assets/Comment.svg"
import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Img,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import { color } from "framer-motion";
import { auto } from "@popperjs/core"

const FeedPage = () => {
  return (
    <Flex
      maxh={'926px'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'428px'} py={6} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          py={2}>
          <Flex
            align={'center'}
            justify={'center'}
            direction={'column'}
            marginBottom={10}
            >
            <Img
              src= {StatusBar}
              h={'44px'}
              alt={'Status Bar'}
              marginTop={-2}
            />
            <Flex
            bg={'#EDEDED'}
            w={382}
            h={58}
            align={'center'}
            justify={'space-around'}
            gap={10}
            >
            <Img
                src= {MiniLogo}
                h={28.6}
                w={28.02}
                alt={'Minilogo'}
                marginLeft={120}
              />
              <Link color={'blue.400'} fontWeight={600}>Logout</Link>
            </Flex>
          </Flex>
          <Stack spacing={2}>
            <FormControl id="post">
              <Textarea
                type="text" 
                placeholder="Escreva seu post..."
                borderRadius={12} 
                border= {'1px solid #EDEDED'}
                bg={'#EDEDED'}
                h={131}
                w={'100%'}  
                />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
                color={'white'}
                _hover={{
                  bg: 'white',
                }}
                borderRadius={27} 
            
                >
                Postar
              </Button>
              <Stack borderBottom={'1px solid  #FE7E02'}></Stack>
            </Stack>
          </Stack>
          <Flex
            bg={'#FBFBFB'}
            align={'start'}
            justify={'center'}
            direction={'column'}
            gap={2}
            marginTop={6}
            border={'1px solid #E0E0E0'}
            borderRadius={12} 
            p={2}>
            <Text fontSize={12} color={'#6F6F6F'}>Enviado por: labaluno83</Text>
            <Text fontSize={18}>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</Text>
            <Flex 
              align={'center'}
              justify={'center'}
              gap={2}
            >
              <Flex
                bg={'#FBFBFB'}
                align={'center'}
                justify={'center'}
                gap={2}
                marginTop={4}
                border={'1px solid #E0E0E0'}
                borderRadius={27} 
              >
                <Button border={'none'} bg={'none'} borderRadius={27} marginLeft={-1}>
                  <Img
                    src= {Like}
                    h={13.94}
                    w={13.94}
                    alt={'Like'}
                  />
                </Button>
                <Text fontSize={9.56}>1.2k</Text>
                <Button border={'none'} bg={'none'} borderRadius={27}>
                  <Img
                    src= {Dislike}
                    h={13.94}
                    w={13.94}
                    alt={'Dislike'}
                  />
                </Button>
              </Flex>
              <Flex
                bg={'#FBFBFB'}
                align={'center'}
                justify={'center'}
                gap={2}
                marginTop={4}
                border={'1px solid #E0E0E0'}
                borderRadius={27}
                w={auto} 
                paddingRight={4}
              >
                <Button border={'none'} bg={'none'} borderRadius={27}>
                  <Img
                    src= {Comment}
                    h={13.94}
                    w={13.94}
                    alt={'Comment'}
                  />
                </Button>
                <Text fontSize={9.56}>132</Text> 
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}

export default FeedPage