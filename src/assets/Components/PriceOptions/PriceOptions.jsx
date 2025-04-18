import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const gymPlans = [
        {
          id: 1,
          name: "Basic Membership",
          price: 30,
          features: ["24/7 Access", "Modern Equipment", "Mobile App Access"]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 60,
          features: ["24/7 Access", "Modern Equipment", "Group Classes", "Mobile App Access", "Locker Rental"]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 90,
          features: ["24/7 Access", "Modern Equipment", "Group Classes", "Personal Training", "Sauna & Steam Room", "Nutrition Plans", "Mobile App Access"]
        },
        {
          id: 4,
          name: "Family Plan",
          price: 120,
          features: ["24/7 Access", "Modern Equipment", "Group Classes", "Locker Rental", "Towel Service"]
        },
        {
          id: 5,
          name: "Student Plan",
          price: 40,
          features: ["24/7 Access", "Modern Equipment", "Group Classes", "Mobile App Access"]
        },
        {
          id: 6,
          name: "Elite Membership",
          price: 150,
          features: ["24/7 Access", "Modern Equipment", "Group Classes", "Personal Training", "Nutrition Plans", "Sauna & Steam Room", "Body Composition Analysis", "Towel Service", "Priority Support"]
        }
      ];
      
    return (
        <div>
            <h1 className="text-7xl text-center mt-5 mb-5">Best Prices in the Town</h1>
            <div className="grid md:grid-cols-3 gap-6">
            {
                gymPlans.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;