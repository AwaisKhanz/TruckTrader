import axios from "axios";
import { useEffect, useState } from "react";
import TruckCard from "../../components/TruckCard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"; // useNavigate instead of useHistory
import { useTranslation } from "react-i18next";

// const localeMap = {
//   en: "en_GB",
//   nl: "nl_NL",
// };

const ResultsPage = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [trucksData, setTrucksData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFeatures, setSelectedFeatures] = useState({
    air_conditioning: false,
    gps: false,
    sunroof: false,
    leather_seats: false,
    backup_camera: false,
    climate_control: false,
    cruise_control: false,
    intarder: false,
    pto: false,
    retarder: false,
    tow_bar: false,
    warranty: false,
  });

  const [minOdometer, setMinOdometer] = useState("");
  const [maxOdometer, setMaxOdometer] = useState("");
  const [minLease, setMinLease] = useState("");
  const [maxLease, setMaxLease] = useState("");
  const [category, setCategory] = useState("");
  const [engineType, setEngineType] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [limit, setLimit] = useState(25);

  const [selectedColor, setSelectedColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const searchFromUrl = searchParams.get("searchTerm");
    const modelFromUrl = searchParams.get("selectedModel");

    const minOdometerFromUrl = searchParams.get("minOdometer");
    const maxOdometerFromUrl = searchParams.get("maxOdometer");
    const minLeaseFromUrl = searchParams.get("minLease");
    const maxLeaseFromUrl = searchParams.get("maxLease");
    const categoryFromUrl = searchParams.get("category");
    const engineTypeFromUrl = searchParams.get("engineType");
    const sortType = searchParams.get("sort");

    // Set the search query and debounced search text
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setDebouncedSearchText(searchFromUrl);
    }

    if (modelFromUrl) setSelectedModel(modelFromUrl);
    if (modelFromUrl) setSelectedModel(modelFromUrl);
    if (minOdometerFromUrl) setMinOdometer(minOdometerFromUrl);
    if (maxOdometerFromUrl) setMaxOdometer(maxOdometerFromUrl);
    if (minLeaseFromUrl) setMinLease(minLeaseFromUrl);
    if (maxLeaseFromUrl) setMaxLease(maxLeaseFromUrl);
    if (categoryFromUrl) setCategory(categoryFromUrl);
    if (engineTypeFromUrl) setEngineType(engineTypeFromUrl);
    if (sortType) setSortOrder(sortType);

    const featureParams = [
      "air_conditioning",
      "climate_control",
      "cruise_control",
      "intarder",
      "pto",
      "retarder",
      "tow_bar",
      "warranty",
    ];

    let featuresFromUrl = { ...selectedFeatures };

    featureParams.forEach((feature) => {
      const featureValue = searchParams.get(`features.${feature}`);
      if (featureValue === "true") {
        featuresFromUrl[feature] = true;
      }
    });

    setSelectedFeatures(featuresFromUrl);
  }, [searchParams]);

  useEffect(() => {
    const limitFromUrl = searchParams.get("limit") || 24;
    const offsetFromUrl = searchParams.get("offset") || 0;

    const calculatedPage = Math.floor(offsetFromUrl / limitFromUrl) + 1;
    console.log(calculatedPage, "calculatedPage");
    console.log(offsetFromUrl, "offsetFromUrl");
    console.log(limitFromUrl, "limitFromUrl");
    console.log(currentPage, "currentPage");

    if (currentPage !== calculatedPage) setCurrentPage(calculatedPage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedSearchText) params.set("searchTerm", debouncedSearchText);
    if (selectedModel) params.set("selectedModel", selectedModel);
    if (minOdometer) params.set("minOdometer", minOdometer);
    if (maxOdometer) params.set("maxOdometer", maxOdometer);
    if (minLease) params.set("minLease", minLease);
    if (maxLease) params.set("maxLease", maxLease);
    if (category) params.set("category", category);
    if (engineType) params.set("engineType", engineType);
    if (sortOrder) params.set("sort", sortOrder);
    params.set("limit", limit); // Add limit

    for (const feature in selectedFeatures) {
      if (selectedFeatures[feature]) {
        params.set(`features.${feature}`, "true");
      }
    }

    if (selectedColor) {
      params.set("body.colour.primary", selectedColor);
    }

    params.set("offset", (currentPage - 1) * limit);

    if (params.toString() !== searchParams.toString()) {
      navigate(`?${params.toString()}`);
    }
  }, [
    debouncedSearchText,
    searchParams,
    navigate,
    selectedModel,
    selectedFeatures,
    currentPage,
    selectedColor,
    minOdometer,
    maxOdometer,
    minLease,
    maxLease,
    category,
    engineType,
    sortOrder,
    limit,
  ]);

  const location = useLocation();

  useEffect(() => {
    const searchParamsFromLocation = new URLSearchParams(location.search);
    const searchTerm = searchParamsFromLocation.get("searchTerm");
    if (searchTerm) {
      setSearchQuery(searchTerm);
      fetchSearchResults(searchTerm);
    }
  }, [location]);

  const fetchSearchResults = async (query) => {
    setIsLoading(true);
    setIsError(false);
    const offset = (currentPage - 1) * limit;
    // const currentLocale = localeMap[i18n.language] || "en_GB";
    let url = `${
      import.meta.env.VITE_API_KEY
    }searchresults?_fieldset=searchresults&keyword=${query}&_limit=${limit}&_offset=${offset}`;

    if (sortOrder) {
      url += `&_order=${sortOrder}`;
    }

    if (minOdometer && maxOdometer) {
      url += `&condition.odometer.value_in_km=${minOdometer}-${maxOdometer}`;
    }

    if (minLease && maxLease) {
      url += `&demo.lease_maandbedrag_60mnd=${minLease}-${maxLease}`;
    }

    if (category) {
      url += `&general.category=${category}`;
    }

    if (selectedModel) {
      url += `&general.year=${selectedModel}-${selectedModel}`;
    }

    if (selectedColor) {
      url += `&body.colour.primary=${selectedColor}`;
    }
    if (engineType) {
      url += `&powertrain.engine.energy.type.category=${engineType}`;
    }

    Object.keys(selectedFeatures).forEach((feature) => {
      if (selectedFeatures[feature]) {
        url += `&features.${feature}=true`;
      }
    });

    try {
      const response = await axios.get(url);
      setTrucksData(response.data.results);
      setTotalResults(response.data.num_results);
    } catch (err) {
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchText) {
      fetchSearchResults(debouncedSearchText);
    }
  }, [debouncedSearchText, selectedModel]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  };

  const handleFeatureChange = (e) => {
    setSelectedFeatures((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.checked,
    }));
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalResults / limit)) return; // Avoid invalid page numbers
    setCurrentPage(newPage);
  };

  const isAnyFilterApplied = () => {
    return (
      sortOrder ||
      selectedModel ||
      minOdometer ||
      maxOdometer ||
      minLease ||
      maxLease ||
      category ||
      engineType ||
      selectedColor ||
      Object.values(selectedFeatures).some((feature) => feature === true)
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedModel("");
    setMinOdometer("");
    setMaxOdometer("");
    setMinLease("");
    setMaxLease("");
    setCategory("");
    setEngineType("");
    setSelectedColor("");
    setSortOrder("");
    setSelectedFeatures({
      air_conditioning: false,
      gps: false,
      sunroof: false,
      leather_seats: false,
      backup_camera: false,
      climate_control: false,
      cruise_control: false,
      intarder: false,
      pto: false,
      retarder: false,
      tow_bar: false,
      warranty: false,
    });
    setSearchParams(new URLSearchParams());
  };

  return (
    <section className="results-page">
      <div className="container">
        <section className="home-banner mb-5 px-0">
          <div className="content d-flex justify-content-center align-items-center px-0">
            <div className="w-100 text-center">
              <div className="contact-us">
                <form
                  className="d-flex align-items-center"
                  onSubmit={handleSearch}
                >
                  <input
                    type="search"
                    className="form-control my-0"
                    placeholder={t("home.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="d-flex align-items-center btn-success px-4"
                  >
                    <i className="fa fa-search"></i>
                    <span className="ps-2">{t("home.searchButton")}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div className="d-flex justify-content-between align-items-center my-3">
            {isAnyFilterApplied() && (
              <button className="btn btn-danger" onClick={resetFilters}>
                {t("resultsPage.filter.clearAll")}
              </button>
            )}
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div className="filter-dropdown">
              <select
                className="form-control py-3"
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">{t("resultsPage.filter.sortDefault")}</option>
                <option value="last_changed">
                  {t("resultsPage.filter.sortNewest")}
                </option>
                <option value="mmt">
                  {t("resultsPage.filter.sortMakeModel")}
                </option>
                {/* <option value="demo.lease_maandbedrag_60mnd">
                  {t("resultsPage.filter.sortPriceAsc")}
                </option>
                <option value="demo.lease_maandbedrag_60mnd DESC">
                  {t("resultsPage.filter.sortPriceDesc")}
                </option> */}
                <option value="score">
                  {t("resultsPage.filter.sortDistance")}
                </option>
              </select>
            </div>

            <div className="filter-dropdown" style={{ minWidth: "120px" }}>
              <select
                className="form-control py-3"
                id="limit"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value={""}>
                  {t("resultsPage.filter.limitDefault")}
                </option>
                <option value={10}>{t("resultsPage.filter.limit10")}</option>
                <option value={25}>{t("resultsPage.filter.limit25")}</option>
                <option value={50}>{t("resultsPage.filter.limit50")}</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 sidebar-filter py-3 my-3 ">
            <h3>{t("resultsPage.filter.title")}</h3>
            <form action="" className="my-2">
              <div className="filter-dropdown px-3 py-3">
                <label htmlFor="features" className="form-label py-2">
                  <h5>{t("resultsPage.filter.variant")}</h5>
                </label>

                <select
                  className="form-control py-3 mb-4"
                  id="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  required
                >
                  <option value="">
                    {t("resultsPage.filter.selectModel")}
                  </option>
                  <option value="2020">
                    {t("resultsPage.filter.model2020")}
                  </option>
                  <option value="2021">
                    {t("resultsPage.filter.model2021")}
                  </option>
                  <option value="2022">
                    {t("resultsPage.filter.model2022")}
                  </option>
                  <option value="2023">
                    {t("resultsPage.filter.model2023")}
                  </option>
                </select>

                <label htmlFor="odometer" className="form-label py-2">
                  <h5>{t("resultsPage.filter.odometer")}</h5>
                </label>
                <div className="d-flex gap-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder={t("resultsPage.filter.minOdometer")}
                    value={minOdometer}
                    onChange={(e) => setMinOdometer(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder={t("resultsPage.filter.maxOdometer")}
                    value={maxOdometer}
                    onChange={(e) => setMaxOdometer(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-dropdown2 px-3 py-3">
                <label htmlFor="features" className="form-label py-2">
                  <h5>{t("resultsPage.filter.color")}</h5>
                </label>

                <select
                  className="form-control py-3"
                  id="color"
                  value={selectedColor}
                  onChange={handleColorChange}
                  required
                >
                  <option value="">
                    {t("resultsPage.filter.selectColor")}
                  </option>
                  <option value="blue">
                    {t("resultsPage.filter.colorBlue")}
                  </option>
                  <option value="black">
                    {t("resultsPage.filter.colorBlack")}
                  </option>
                  <option value="white">
                    {t("resultsPage.filter.colorWhite")}
                  </option>
                  <option value="red">
                    {t("resultsPage.filter.colorRed")}
                  </option>
                </select>
              </div>

              <div className="filter-dropdown px-3 py-3">
                <label htmlFor="engineType" className="form-label py-2">
                  <h5>{t("resultsPage.filter.engineType")}</h5>
                </label>

                <select
                  className="form-control py-3"
                  id="engineType"
                  value={engineType}
                  onChange={(e) => setEngineType(e.target.value)}
                >
                  <option value="">{t("resultsPage.filter.fuel")}</option>
                  <option value="gas">{t("resultsPage.filter.fuelGas")}</option>
                  <option value="petrol">
                    {t("resultsPage.filter.fuelPetrol")}
                  </option>
                  <option value="diesel">
                    {t("resultsPage.filter.fuelDiesel")}
                  </option>
                </select>
              </div>

              <div className="filter-dropdown px-3 py-3">
                <label htmlFor="lease" className="form-label py-2">
                  <h5>{t("resultsPage.filter.lease")}</h5>
                </label>
                <div className="d-flex gap-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder={t("resultsPage.filter.minLease")}
                    value={minLease}
                    onChange={(e) => setMinLease(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder={t("resultsPage.filter.maxLease")}
                    value={maxLease}
                    onChange={(e) => setMaxLease(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-dropdown px-3 py-3">
                <label htmlFor="category" className="form-label py-2">
                  <h5>{t("resultsPage.filter.category")}</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("resultsPage.filter.enterCategory")}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="filter-checkbox px-3 py-3">
                <label htmlFor="features" className="form-label py-2">
                  <h5>{t("resultsPage.filter.features.featuresTitle")}</h5>
                </label>

                {[
                  { id: "air_conditioning", label: "Air Conditioning" },
                  { id: "climate_control", label: "Climate Control" },
                  { id: "cruise_control", label: "Cruise Control" },
                  { id: "intarder", label: "Intarder" },
                  { id: "pto", label: "PTO" },
                  { id: "retarder", label: "Retarder" },
                  { id: "tow_bar", label: "Tow Bar" },
                  { id: "warranty", label: "Warranty" },
                ].map((feature) => (
                  <div className="form-check py-1" key={feature.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={feature.id}
                      checked={selectedFeatures[feature.id]}
                      onChange={handleFeatureChange}
                    />
                    <label className="form-check-label" htmlFor={feature.id}>
                      {t(`resultsPage.filter.features.${feature.id}`)}
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>

          {/* Trucks */}
          <div className="col-md-9">
            {isLoading ? (
              t("resultsPage.loading")
            ) : (
              <section className="truck-listing mb-5">
                <div className="truck-listing-row">
                  <div className="row">
                    {trucksData?.map((truck, index) => (
                      <div className="col-md-4 my-3" key={index}>
                        <TruckCard truck={truck} />
                      </div>
                    ))}

                    <div className="col-md-12 mt-4">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                            >
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>

                          {Array.from(
                            {
                              length: Math.min(
                                3,
                                Math.ceil(totalResults / limit)
                              ),
                            },
                            (_, index) => {
                              const maxPages = Math.ceil(totalResults / limit);
                              let pageNumber = currentPage + index;
                              pageNumber = Math.max(
                                1,
                                Math.min(pageNumber, maxPages)
                              );

                              return (
                                <li
                                  key={pageNumber}
                                  className={`page-item ${
                                    currentPage === pageNumber ? "active" : ""
                                  }`}
                                >
                                  <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePageChange(pageNumber)}
                                  >
                                    {pageNumber}
                                  </a>
                                </li>
                              );
                            }
                          )}

                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Next"
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={
                                currentPage === Math.ceil(totalResults / limit)
                              }
                            >
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsPage;
