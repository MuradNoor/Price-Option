import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";



const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><IoCheckmarkDoneCircleSharp className="text-blue-500 mr-2" />{feature}</p>
        </div>
    );
};

export default Feature;