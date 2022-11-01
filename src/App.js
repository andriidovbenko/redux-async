import { Button, Flex, Input, Box } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { setMessage, getJokes } from './actions/action'

function App() {
  const dispatch = useDispatch();

  const { message, joke, loading, hasError } = useSelector((state) => state)

  const onChangeHandler = (e) => {
    const value = e.target.value
    dispatch(setMessage(value))
  }

  const onClickHandler = () => {
    dispatch(getJokes())
  }

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      p={'15px'}
    >
      <Box w={'700px'}>{joke ? joke : 'Loading...'}</Box>
      {hasError && (
        <Box color={'red'}>Something went wrong</Box>
      )}
      <Input w={'300px'} type={'text'} onChange={onChangeHandler}/>
      <Button
        onClick={onClickHandler}
        disabled={loading}
      >
        This is button
      </Button>
    </Flex>
  );
}

export default App;
