import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
	Area,
	AreaChart,
} from "recharts";

const data = [
	{ month: "Jan", value: 1000 },
	{ month: "Feb", value: 45500 },
	{ month: "Mar", value: 50000 },
	{ month: "Apr", value: 90000 },
	{ month: "May", value: 127000 },
	{ month: "Jun", value: 140000 },
	{ month: "Jul", value: 180000 },
	{ month: "Aug", value: 180000 },
	{ month: "Sep", value: 192000 },
	{ month: "Oct", value: 190000 },
	{ month: "Nov", value: 190000 },
	{ month: "Dec", value: 220000 },
];

const ranges = ["1W", "1M", "6M", "1Y"];

interface ITooltip {
	chartType?: undefined | string;
	color?: string;
	dataKey: string;
	fill: string;
	formatter?: undefined | string;
	hide: boolean;
	name: string;
	payload: { month: "Sep"; value: 192000 };
	stroke: string;
	type?: undefined | string;
	unit?: undefined | string;
	value: number;
}

const CustomTooltip = ({
	active,
	payload,
}: {
	active?: boolean;
	payload?: ITooltip[];
}) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-white p-2 shadow-md rounded">
				<p>{`${payload[0].payload.month}: ${payload[0].value}`}</p>
			</div>
		);
	}
	return null;
};

const SearchVolumeChart = () => {
	const [range, setRange] = useState("1Y");

	return (
		<div className="border border-[#D8D6D6] rounded-[3px] p-2.5">
			<div className="flex flex-col gap-[10px] h-[188px]">
				<header className="text-[18px] font-normal">Total Search Volume</header>
				<p className="text-[28px] font-normal">234k</p>
				<div className="flex items-center gap-[12px]">
					<Badge variant="outline" className="bg-[#07E8AC45] text-[#027A48]">
						+ 12%
					</Badge>
					<span className="text-[#817F7F] text-[14px]">since last year</span>
				</div>
				<div className="flex items-center gap-[6px]">
					<span className="size-[3px] rounded-full bg-[#EA1818] block" /> CPC:
					3.3
				</div>
			</div>

			<div className="border border-[#BEBEBE] flex items-center h-[33px] rounded-[4px] gap-[12px] py-[0] px-0.5 w-max ml-auto">
				{ranges?.map((item, idx) => (
					<button
						key={idx}
						onClick={() => setRange(item)}
						className={`p-[4px] rounded-[2px] text-[10px] size-[21px] ${
							range === item ? "bg-[#2799E0]" : ""
						}`}
					>
						{item}
					</button>
				))}
			</div>

			<div className="h-[209px] mt-[14px] text-[12px]">
				<ResponsiveContainer width="100%" height={220}>
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dataKey="month" />
						<YAxis tickFormatter={(value) => `${value / 1000}k`} />
						<Tooltip content={<CustomTooltip />} />
						<Area
							type="monotone"
							dataKey="value"
							stroke="#007bff"
							fill="rgba(0, 123, 255, 0.2)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SearchVolumeChart;
