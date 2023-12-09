import { Route, Routes } from "react-router-dom";
import "./css/Default.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Video from "./pages/Video";
import PrivacyStatement from "./pages/PrivacyStatement";
import TermsAndConditions from "./pages/TermsAndConditions";
import Faq from "./pages/Faq";
import Fanzone from "./pages/Fanzone";
import ContactUs from "./pages/ContactUs";
import { ErrorBoundary } from "react-error-boundary";

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={MyFallbackComponent}
        onError={(error, errorInfo) => console.log({ error, errorInfo })}
        onReset={() => {
          // reset the state of your app
          window.location.reload();
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/News" element={<News />} />
          <Route path="/Fanzone" element={<Fanzone />} />
          <Route path="/NewsArticle" element={<NewsArticle />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/PrivacyStatement" element={<PrivacyStatement />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>

        <Footer />
      </ErrorBoundary>
    </>
  );
}
