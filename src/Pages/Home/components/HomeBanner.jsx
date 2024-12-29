import { useTranslation } from "react-i18next";

const HomeBanner = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleKeyPress,
}) => {
  const { t } = useTranslation();

  return (
    <section className="home-banner mb-5">
      <div className="content d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <div className="contact-us">
            <form className="d-flex align-items-center" onSubmit={handleSearch}>
              <input
                type="search"
                className="form-control my-0"
                placeholder={t("home.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="d-flex align-items-center btn-success px-4"
                type="submit"
              >
                <i className="fa fa-search"></i>
                <span className="ps-2">{t("home.searchButton")}</span>{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
