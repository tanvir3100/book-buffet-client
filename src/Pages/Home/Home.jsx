import Banner from "../../Components/Banner/Banner";
import BestSell from "../../Components/BestSell/BestSell";
import BookCollection from "../../Components/BookCollection/BookCollection";
import Poster from "../../Components/Poster/Poster";


const Home = () => {
    return (
        <div>
            <div>
                <Poster></Poster>
            </div>
            <BookCollection></BookCollection>
            <Banner></Banner>
            <BestSell />
        </div>
    );
};

export default Home;