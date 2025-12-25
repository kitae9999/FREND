import { router } from '@/1_apps/providers/router/router';
import { RouterProvider } from 'react-router-dom';

export const RouterProviderApp = () => {
    return <RouterProvider router={router}/>
}