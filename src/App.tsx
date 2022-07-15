import React from 'react';
import { Button } from '@chakra-ui/react';
import { BeatLoader } from 'react-spinners';

import { Counter } from './features/counter/Counter';

var a = 'a';

function App() {
  return (
    <div className="App">
      <Button
        isLoading
        colorScheme="blue"
        spinner={<BeatLoader size={8} color="white" />}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
