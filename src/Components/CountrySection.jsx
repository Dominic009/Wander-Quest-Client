// components/CountrySection.jsx
import CountrySec from "./CountrySec";
import PropTypes from "prop-types";

const CountrySection = ({ spotData }) => (
    <section className="mb-16 text-center relative">
        <div className="w-[90%] mx-auto py-16 z-20 relative">
            <h1 className="text-4xl md:text-5xl font-bold">Places You Can Be</h1>
            <p className="mt-5 mb-5 text-gray-700">
                Southeast Asia offers vibrant cities, serene beaches, and historic wonders. Discover the magic.
            </p>
            <CountrySec spotData={spotData} />
        </div>
    </section>
);
CountrySection.propTypes = {
    spotData: PropTypes.any,
};


export default CountrySection;
