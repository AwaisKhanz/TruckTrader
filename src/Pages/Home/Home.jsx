import { useEffect, useState } from "react";
import HomeBanner from "./components/HomeBanner";
import AboutUsSection from "./components/AboutUsSection";
import HomeTrucks from "./components/HomeTrucks";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// const localeMap = {
//   en: "en_GB",
//   nl: "nl_NL",
// };

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const fetchSearchResults = async (query) => {
    setIsLoading(true);
    setIsError(false);
    try {
      // const currentLocale = localeMap[i18n.language] || "en_GB";
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_KEY
        }searchresults?_fieldset=searchresults&keyword=audi&_limit=12&general.category=car`
      );

      setCarData(response.data.results);
    } catch (err) {
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [i18n.language]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/resultpage?searchTerm=${searchQuery}`);
    }
  };
  2;

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery) {
      navigate(`/resultpage?searchTerm=${searchQuery}`);
    }
  };

  return (
    <div className="home-page">
      <HomeBanner
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
      />
      {isLoading ? (
        <div className="container">Loading</div>
      ) : (
        <HomeTrucks carData={carData} />
      )}

      <AboutUsSection />
    </div>
  );
};

export default HomePage;
