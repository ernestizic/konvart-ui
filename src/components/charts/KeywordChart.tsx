import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import guageIcon from "@/assets/guageIcon.svg";

const KeywordDifficultyChart = ({ value = 60 }) => {
	const colors = ["#E0E7FF", "#A5B4FC", "#818CF8", "#6366F1", "#1E40AF"];
	const data = Array(5).fill({ value: 20 });
	const angle = (value / 100) * 180; // Convert value to angle

	return (
		<div className="border border-[#D8D6D6] rounded-[3px] p-2.5">
			<header className="text-[16px] font-normal">Keyword Difficulty</header>

			<div className="flex flex-col items-center mt-[24px]">
				<ResponsiveContainer width="100%" height={200}>
					<PieChart>
						<Pie
							data={data}
							startAngle={180}
							endAngle={0}
							innerRadius={50}
							outerRadius={100}
							dataKey="value"
							paddingAngle={2}
						>
							{data.map((_, index) => (
								<Cell key={index} fill={colors[index]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>

				<img
					src={guageIcon}
					alt="guage"
					className="text-center mt-[-120px]"
					style={{
						transform: `rotate(${angle - 90}deg) translateY(-20px)`,
						transformOrigin: "bottom center",
					}}
				/>
				<div className="text-center">
					<p className="text-lg font-semibold">{value}%</p>
					<p className="text-[#6A6868] text-[13px]">Medium Difficult</p>
				</div>
			</div>

			<div className="text-[15px]">
				<header className="my-[11px]">Difficulty Rank</header>

				<ul className="flex flex-col gap-[11px]">
					<li className="flex items-center gap-[5px] h-[19px]">
						<span className="block size-[8px] rounded-full bg-[#E8EEFF]" />
						0–20: Easy to rank (low competition)
					</li>
					<li className="flex items-center gap-[5px] h-[19px]">
						<span className="block size-[8px] rounded-full bg-[#B6C7FF]" />
						21–40: Somewhat easy
					</li>
					<li className="flex items-center gap-[5px] h-[19px]">
						<span className="block size-[8px] rounded-full bg-[#99AFF9]" />
						41–60: Medium difficulty
					</li>
					<li className="flex items-center gap-[5px] h-[19px]">
						<span className="block size-[8px] rounded-full bg-[#5470E4]" />
						61–80: Difficult
					</li>
					<li className="flex items-center gap-[5px] h-[19px]">
						<span className="block size-[8px] rounded-full bg-[#0929AD]" />
						81–100: Very difficult
					</li>
				</ul>
			</div>
		</div>
	);
};

export default KeywordDifficultyChart;
