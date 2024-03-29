import MiniLogo from "../../assets/MiniLogo.svg"
import StatusBar from "../../assets/StatusBar.svg"
import { useNavigate } from "react-router-dom";
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
} from '@chakra-ui/react';
import axios from "axios";
import { useState } from "react";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/BASE_URL";

const SignupPage = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", senha: "" });

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signUp = async () => {
    try {
      let body = {
        name: form.name,
        email: form.email,
        password: form.password
      }

      const response = await axios.post(`${BASE_URL}/users/signup`, body)
      console.log("response", response)

      window.localStorage.setItem("Token", response.data.token)
      goToHomePage(navigate)
    } catch (error) {
      console.log(error)
    }
  }

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
              <Link color={'blue.400'} fontWeight={600} onClick={() => {goToLoginPage(navigate)}}>Entrar</Link>
            </Flex>
            <Heading fontSize={33} fontWeight={700} marginTop={8} marginBottom={20}>Olá, boas vindas ao LabEddit ;)</Heading>
          </Flex>
          <Stack spacing={1}>
          <FormControl id="apelido">
              <Input 
                type="apelido"
                name="name" 
                value={form.name}
                onChange={onChange}
                placeholder="Apelido"
                required
                borderRadius={4}
                border= {'1px solid #D5D8DE'}/>
            </FormControl>
            <FormControl id="email">
              <Input 
                type="email" 
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="E-mail"
                required
                borderRadius={4}
                border= {'1px solid #D5D8DE'}/>
            </FormControl>
            <FormControl id="password">
              <Input 
                type="password"
                name="password"
                value={form.password}
                onChange={onChange} 
                placeholder="Senha"
                required
                borderRadius={4} 
                border= {'1px solid #D5D8DE'}/>
            </FormControl>
            <Stack spacing={6} py={10}>
              <Text fontSize={14} fontWeight={400}>
              Ao continuar você concorda com o nosso <Link color={'blue.400'}>Contrato de usuário</Link> e nossa <Link color={'blue.400'}>Politica de privacidade</Link>
              </Text>
              
              <Checkbox><Text fontSize={14} fontWeight={400}>Eu concordo em receber emails sobre coisa legais no Labeddit</Text></Checkbox>
              
              <Button
                bg={'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)'}
                color={'white'}
                _hover={{
                  bg: 'white',
                }}
                borderRadius={27} 
                onClick={() => {signUp()}}
                >
                Cadastrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignupPage