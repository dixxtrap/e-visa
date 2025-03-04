import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux';
import store from './core/api/index.ts';
import { RouterProvider } from 'react-router';
import { router } from './interface/router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}  >
      <MantineProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </MantineProvider>
    </Provider>
  </StrictMode>,
)
