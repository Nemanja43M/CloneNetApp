import { Item } from "./Upcoming";
import heroSlide1 from "../../assets/images/hero-slide-1.jpeg";

type UcardProps = {
    item: Item;
};

const Ucard: React.FC<UcardProps> = ({ item: { id, cover, name, time } }) => {
    return (
        <div className="MovieBox">
            <div className="img">
                <img src={heroSlide1} alt="" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <span>{time}</span> <br />
                {/* <Link to={`/singlepage/${id}`}> */}
                <button className="primary-btn">
                    <i className="fa fa-play"></i> PLAY NOW
                </button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Ucard;
