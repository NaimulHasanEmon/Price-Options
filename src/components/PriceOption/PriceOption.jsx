import PropTypes from "prop-types";
import Features from "../Features/Features";
import { MdHotelClass } from "react-icons/md";

const PriceOption = ({option}) => {
    const { name, price, currency, features } = option;

    return (
        <div className="p-3 bg-slate-600 rounded-2xl shadow-xl text-white flex flex-col h-full">
            <p className="text-5xl price-font text-center my-5 transition-transform duration-300 ease-in-out transform hover:scale-110">{price} <br />
                <span className="text-xl">{currency}
                </span>
                <span className="text-xl">/mon
                </span>
            </p>
            <div className="flex justify-center text-yellow-400">
                <MdHotelClass className="text-4xl"/>
            </div>
            <div className="flex gap-3 justify-center mb-5">
                <p className="text-3xl">{name}</p>
            </div>
            <div className="flex-grow">
                <ul>
                    {
                        features.map((features, idx) => <Features
                            key={idx}
                            features={features}
                        ></Features>)
                    }
                </ul>
            </div>
            <div className="flex justify-center mt-6 mb-2">
                <button className="btn btn-accent hover:bg-green-500">Purchase</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;