import { createBrowserRouter } from 'react-router-dom';
import { Home, Contact } from '../pages';

export const Router = () => {
    const router = createBrowserRouter([
        {
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/contato',
                    element: <Contact />,
                },
            ]
        }
    ]);

    return { router };
};