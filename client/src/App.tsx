import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import { ThemeProvider } from "@/contexts/theme-context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import PWAInstallPrompt from "@/components/common/PWAInstallPrompt";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Routes from "@/pages/Routes";

const Partners = lazy(() => import("@/pages/Partners"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Install = lazy(() => import("@/pages/Install"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/routes" component={Routes} />
        <Route path="/install" component={Install} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="system">
          <LanguageProvider>
            <ErrorBoundary>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main id="main-content" className="flex-1" role="main">
                  <Router />
                </main>
                <Footer />
              </div>
              <Toaster />
              <CookieConsent />
              <PWAInstallPrompt />
            </ErrorBoundary>
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
