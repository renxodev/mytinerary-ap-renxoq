import NavLayout from "./layouts/NavLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home />},
        { path: "/signin", element: <SignIn />},
        { path: "/signup", element: <SignUp />},
        { path: "/cities", element: <Cities /> },
       
    ],
  },
  {
    path: "/",
    element: <NavLayout />,
  },
]);

export default router;