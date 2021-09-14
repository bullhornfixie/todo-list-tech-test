import { Flex } from 'rebass'
import { colors } from '../styles/variables.js'

const Layout = ({ children }) => (
  <Flex 
    flexDirection='column'
    bg={colors.blue}
    height='100vh'
    alignItems='center'
    justifyContent='center'
  >
   {children}
  </Flex>
)

export default Layout