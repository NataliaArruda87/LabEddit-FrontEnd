import MiniLogo from "../../assets/MiniLogo.svg"
import StatusBar from "../../assets/StatusBar.svg"
import Like from "../../assets/Like.svg"
import Dislike from "../../assets/Dislike.svg"
import Comment from "../../assets/Comment.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
  Flex,
  Box,
  FormControl,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Img,
  Textarea,
} from '@chakra-ui/react';
import { auto } from "@popperjs/core"
import { goToLoginPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/BASE_URL"


const FeedPage = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  const [content, setContent] = useState('')

  const onChangeContent = (event) => {
    setContent(event.target.value );
};

  useEffect(() => {
    renderPosts()
  }, [])

  const renderPosts = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/comments`, {
        headers: {
          Authorization: window.localStorage.getItem("Token")
        }
      })
      setPost(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createPost = async () =>{
    try {  

        let body = {
            content,
        }

        await axios.post(`${BASE_URL}/posts`, body, {
          headers:{
              Authorization:window.localStorage.getItem("Token")
          }})  
        renderPosts() 
        setContent('')        
    } catch (error) {
        console.log(error)
    }
}

const likePost = async (postId) => {
  try {
      let body = {
          like: true,
      }
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers:{
            Authorization: window.localStorage.getItem("Token")
        }})
      renderPosts()
  } catch (error) {
      console.log(error)
  }
}

const dislikePost = async (postId)=>{
  try {
      let body = {
          like: false,
      }
      await axios.put(`${BASE_URL}/posts/${postId}/like`,body ,{
          headers:{
              Authorization: window.localStorage.getItem("Token")
          }})
        renderPosts()
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
              <Link color={'blue.400'} fontWeight={600} onClick={() => {goToLoginPage(navigate)}}>Logout</Link>
            </Flex>
          </Flex>
          <Stack spacing={2} marginBottom={6}>
            <FormControl id="post">
              <Textarea
                type="text" 
                value={content}
                onChange={onChangeContent}
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
                onClick={() => createPost()}
                >
                Postar
              </Button>
              <Stack borderBottom={'1px solid  #FE7E02'}></Stack>
            </Stack>
          </Stack>
          {
          post.map((post) => {return (
          <Flex
            bg={'#FBFBFB'}
            align={'start'}
            justify={'center'}
            direction={'column'}
            gap={2}
            marginTop={3}
            border={'1px solid #E0E0E0'}
            borderRadius={12} 
            p={2}>
            <Text fontSize={12} color={'#6F6F6F'}>Enviado por: {post.creator.name}</Text>
            <Text fontSize={18}>{post.content}</Text>
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
                <Button border={'none'} bg={'none'} borderRadius={27} marginLeft={-1} onClick={() => {likePost(post.id)}}>
                  <Img
                    src= {Like}
                    h={13.94}
                    w={13.94}
                    alt={'Like'}
                  />
                </Button>
                <Text fontSize={9.56}>{post.likes}</Text>
                <Button border={'none'} bg={'none'} borderRadius={27} onClick={() => {dislikePost(post.id)}}>
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
                <Text fontSize={9.56}>{post.qte_comments}</Text> 
              </Flex>
            </Flex>
          </Flex>
          )})}
        </Box>
      </Stack>
    </Flex>
  );
}

export default FeedPage