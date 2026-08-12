import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Rsvp from "./pages/Rsvp";
import Timelines from "./pages/Timelines";
import Gifts from "./pages/Gifts";
import Invitation from "./pages/Invitation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* One router only. There used to be a second, nested <BrowserRouter>
          here, which quietly broke navigation for the inner tree. */}
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/timelines" element={<Timelines />} />
          <Route path="/gifts" element={<Gifts />} />
          {/* Old URLs kept working for anyone with a saved link or a
              printed QR code pointing at the previous structure. */}
          <Route path="/details" element={<Navigate to="/timelines" replace />} />
          <Route path="/save-the-date" element={<Navigate to="/invitation" replace />} />
          <Route path="/gallery" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;