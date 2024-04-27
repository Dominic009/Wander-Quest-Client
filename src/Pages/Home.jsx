import Banner from "../Components/Banner";
import CountrySec from "../Components/CountrySec";

const Home = () => {
    return (
        <div className="mt-16">
            <section className="mb-64">
              <Banner /> 
            </section>

            <section className="mb-16 text-center">
                <h1 className="text-5xl font-bold font-lobster">Places You Can Be</h1>
                <CountrySec />
            </section>
        </div>
    );
};

export default Home;