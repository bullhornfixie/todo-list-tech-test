import { Flex, Text } from 'rebass'
import './styles/App.css';
import { colors, font, sizes } from './styles/variables.js'
import Header from './components/header'

const tasks = ["wash car", "cook dinner", "do test"]

const viewTasks = () => {
  return (
    tasks.map((item) => (
      <Flex 
        width='80%' 
        bg={colors.turquoise}
        mt={sizes.md}
        height={sizes.lg}
        alignItems='center'
      > 
        <Text color={colors.black} pl={sizes.xs}>{item}</Text>
      </Flex>
    ))
  )
}

const App = () => {
  return (
  <>
   <Header />
    <Flex 
      flexDirection='column'
      bg={colors.black}
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        width='50vh'
        height='50vh'
        bg={colors.white}
      >
        {viewTasks()}
      </Flex>
    </Flex>
  </>
  );
}

export default App;
