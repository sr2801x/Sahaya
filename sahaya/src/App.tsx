
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Alerts from "./pages/Alerts";
import Volunteer from "./pages/Volunteer";
import Education from "./pages/Education";
import Donate from "./pages/Donate";
import Prediction from "./pages/Prediction";
import Admin from "./pages/Admin";
import GetStarted from "./pages/GetStarted";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/education" element={<Education />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/get-started" element={<GetStarted />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
