import Banner from "../../Components/Banner/Banner";
import BookCollection from "../../Components/BookCollection/BookCollection";
import Poster from "../../Components/Poster/Poster";


const Home = () => {
    return (
        <div>
            <Poster></Poster>
            <BookCollection></BookCollection>
            <Banner></Banner>
        </div>
    );
};

export default Home;