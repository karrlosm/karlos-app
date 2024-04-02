import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';

export const Router = () => {
    const router = createBrowserRouter([
        {
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ]
        }
    ]);

    return { router };
};