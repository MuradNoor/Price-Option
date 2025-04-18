import { BarChart, Bar, XAxis, Tooltip } from 'recharts';

const BarData = () => {
    const mobilePhones = [
        { id: 1, name: "iPhone 14 Pro", price: 999 },
        { id: 2, name: "Samsung Galaxy S23", price: 849 },
        { id: 3, name: "OnePlus 11", price: 699 },
        { id: 4, name: "Google Pixel 7 Pro", price: 899 },
        { id: 5, name: "Xiaomi 13 Pro", price: 749 },
        { id: 6, name: "Realme GT Neo 5", price: 550 },
        { id: 7, name: "Motorola Edge 40", price: 599 },
        { id: 8, name: "Asus ROG Phone 7", price: 999 },
        { id: 9, name: "Nothing Phone (2)", price: 579 },
        { id: 10, name: "Vivo X90 Pro", price: 899 }
      ];
      
    return (
        <div className='flex justify-center'>
        <BarChart width={950} height={700} data={mobilePhones}>
        <Bar dataKey="price" fill="purple" />
        <XAxis dataKey="name"></XAxis>
        <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default BarData;