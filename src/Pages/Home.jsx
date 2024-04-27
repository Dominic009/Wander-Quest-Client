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
                <p className="mt-5 mb-5">Southeast Asia is a tapestry of diverse landscapes and vibrant cultures, offering a wealth of destinations to explore. From the bustling streets of Bangkok to the tranquil beaches of Bali, the lush jungles of Borneo to the ancient temples of Angkor Wat, theres something enchanting for every traveler.</p>
                <CountrySec />
            </section>


            <section>
                <h1>Explore places</h1>
            </section>
        </div>
    );
};

export default Home;