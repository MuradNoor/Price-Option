import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className="bg-purple-700 p-5 m-2 rounded-xl flex flex-col">
            <h2 className="text-center">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-2xl">/month</span>
            </h2>
            <h1 className="text-5xl font-extrabold text-center">{name}</h1>
            <div className="pl-12 mt-5 flex-grow">
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className="w-full mt-5 mb-4 bg-blue-500 p-4 rounded-xl font-bold text-2xl">Buy Now</button>
        </div>
    );
};

export default PriceOption;