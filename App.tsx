import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import MainScene from './src/screens/Main';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainScene />
    </QueryClientProvider>
  );
}
export default App;
