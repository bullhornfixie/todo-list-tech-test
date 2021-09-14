import { Flex, Text } from 'rebass'
import { colors, font, sizes } from '../styles/variables.js'

const TodoTabs = ({todo, index, completeTodo, removeTodo }) => {

    return (
      <Flex flexDirection='row' justifyContent='space-between' mt='10px'

        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
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