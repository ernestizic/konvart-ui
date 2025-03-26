import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "18 - 23", value: 23, color: "#A5B4FC" },
	{ name: "25 - 34", value: 16, color: "#E8EEFF" },
	{ name: "35 - 44", value: 23, color: "#6366F1" },
	{ name: "45 - 54", value: 27, color: "#1E40AF" },
	{ name: "55 - 64", value: 11, color: "#E0E7FF" },
];

const DemographicsChart = () => {
	return (
		<div className="border border-[#CECECE] rounded-[8px] py-[16px] px-[12px]">
			<header className="text-[16px] font-medium">Demographics</header>
			<p className="text-[12px]">Age Distribution of Searchers</p>

			<div className="mt-[31px] grid grid-cols-2 max-2xl:flex max-2xl:flex-col max-2xl:items-center">
				<div className="relative w-full">
					<span className="block absolute text-[12px] w-[72px] top-[40%] left-[34%] text-center">
						Total Age Distribution
					</span>
					<ResponsiveContainer width={200} height={200}>
						<PieChart>
							<Pie
								data={data}
								cx="60%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								dataKey="value"
								paddingAngle={0}
							>
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
				<div className="flex items-center">
					<div className="ml-4">
						{data.map((entry, index) => (
							<div key={index} className="flex items-center mb-1">
								<span
									className="w-[10px] h-[10px] mr-2"
									style={{ backgroundColor: entry.color }}
								></span>
								<span className="text-sm">
									{entry.name}{" "}
									<span className="text-[#797878]">({entry.value}%)</span>
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DemographicsChart;
