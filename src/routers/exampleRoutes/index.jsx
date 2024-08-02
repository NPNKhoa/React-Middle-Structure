import { v4 as uuidv4 } from 'uuid';
import { ExamplePage } from '@pages';

const exampleRoutes = [
  {
    id: `auth-${uuidv4()}`,
    path: '/',
    element: <ExamplePage />,
  },
];

export default exampleRoutes;
