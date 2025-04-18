import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {
    const studentMarks = [
        { name: "Alice", math: 78, science: 85, english: 90 },
        { name: "Bob", math: 65, science: 70, english: 75 },
        { name: "Charlie", math: 88, science: 92, english: 85 },
        { name: "David", math: 72, science: 68, english: 80 },
        { name: "Eva", math: 91, science: 89, english: 94 },
        { name: "Frank", math: 60, science: 65, english: 70 },
        { name: "Grace", math: 85, science: 87, english: 88 },
        { name: "Hannah", math: 74, science: 78, english: 76 },
        { name: "Ian", math: 69, science: 73, english: 72 },
        { name: "Jade", math: 95, science: 94, english: 97 }
      ];      
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <LineChart width={1200} height={600} data={studentMarks}>
                <Line type='monotone' dataKey="math" stroke='red'></Line>
                <Line type='monotone' dataKey="science" stroke='blue'></Line>
                <Line type='monotone' dataKey="english" stroke='green'></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Chart;