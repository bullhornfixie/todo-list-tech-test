import { Flex } from 'rebass'
import { colors } from '../styles/variables.js'

const FormBox = ({ children }) => (
  <Flex
    flexDirection='column'
    width='50vh'
    height='50vh'
    padding='10px'
    bg={colors.white}
  >
    {children}
  </Flex>
)

export default FormBox