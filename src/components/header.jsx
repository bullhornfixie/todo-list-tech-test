import { Flex, Text } from 'rebass'
import { colors, font, sizes } from '../styles/variables.js'

const Header = () => (
  <Flex 
    alignItems='center' 
    height='10vh' 
    justifyContent='left' 
    bg={colors.white}
    pl={sizes.sm}
  >
    <Text>TODO</Text>
  </Flex>
)

export default Header