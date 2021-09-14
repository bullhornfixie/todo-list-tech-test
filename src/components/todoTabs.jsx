import { Flex } from 'rebass'
import { colors, sizes } from '../styles/variables.js'

const TodoTabs = ({todo, index, completeTodo, removeTodo }) => {

    return (
      <Flex 
        flexDirection='row' 
        justifyContent='space-between' 
        mt={sizes.sm}
        p={sizes.xs}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        bg={colors.turquoise}
      >
        {todo.text}
         <Flex> 
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
         </Flex>
      </Flex>
    );
  }

export default TodoTabs