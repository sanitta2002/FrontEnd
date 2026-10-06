import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import { Toaster } from "sonner";

const App = () => (
  <BrowserRouter>
   <Toaster position="top-center" richColors />
    <AppRoutes />
  </BrowserRouter>
);

export default App;