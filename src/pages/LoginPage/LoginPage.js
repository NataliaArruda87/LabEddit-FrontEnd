import LabedditLogo from "../../assets/LabedditLogo.svg"
import StatusBar from "../../assets/StatusBar.svg"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Img,
} from '@chakra-ui/react';

const LoginPage = () => {
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
            marginBottom={20}
            >
          <Img
            src= {StatusBar}
            h={'44px'}
            alt={'Status Bar'}
            marginTop={-2}
          />
          <Img
            src= {LabedditLogo}
            h={'142px'}
            w={'152px'}
            alt={'LabEddit Logo'}
            marginTop={20}
          />
           <Text fontSize={'md'} fontWeight={300}>
            O projeto de rede social da Labenu
          </Text>
          </Flex>
          <Stack spacing={1}>
            <FormControl id="email">
              <Input 
                type="email" 
                placeholder="E-mail"
                borderRadius={4}
                border= {'1px solid #D5D8DE'}/>
            </FormControl>
            <FormControl id="password">
              <Input 
                type="password" 
                placeholder="Senha"
                borderRadius={4} 
                border= {'1px solid #D5D8DE'}/>
            </FormControl>
            <Stack spacing={6} py={10}>
              <Button
                bg={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
                color={'white'}
                _hover={{
                  bg: 'white',
                }}
                borderRadius={27} 
                >
                Continuar
              </Button>
              <Stack borderBottom={'1px solid  #FE7E02'}></Stack>
              <Button
                bg={'white'}
                color={'#FE7E02'}
                _hover={{
                  bg: 'lightgray',
                }}
                borderRadius={27} 
                border= {'1px solid  #FE7E02'}
                >
                Crie uma conta!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginPage