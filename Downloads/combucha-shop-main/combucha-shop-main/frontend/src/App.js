import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

export default function App() {
  return <RouterProvider router={router} />;
}

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import ProfilePage from './pages/ProfilePage'

// function App () {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<LoginPage />} />
//         <Route path='/register' element={<RegisterPage />} />
//         <Route path='/profile' element={<ProfilePage />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
