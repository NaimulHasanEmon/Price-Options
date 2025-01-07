import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const data = [
        { id: 1, name: 'Alice', math: 75, physics: 80, chemistry: 85 },
        { id: 2, name: 'Bob', math: 82, physics: 78, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 89, physics: 93, chemistry: 97 },
        { id: 4, name: 'David', math: 78, physics: 70, chemistry: 85 },
        { id: 5, name: 'Eve', math: 88, physics: 84, chemistry: 90 },
        { id: 6, name: 'Frank', math: 92, physics: 96, chemistry: 87 },
        { id: 7, name: 'Grace', math: 72, physics: 75, chemistry: 70 },
        { id: 8, name: 'Hannah', math: 85, physics: 89, chemistry: 87 },
        { id: 9, name: 'Ivy', math: 78, physics: 80, chemistry: 85 },
        { id: 10, name: 'Jack', math: 80, physics: 82, chemistry: 79 }
    ];

    return (
        <div>
            <LChart width={500} height={400} data={data}>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;