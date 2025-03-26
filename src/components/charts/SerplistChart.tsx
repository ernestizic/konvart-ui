import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Check, ChevronDown, Minus } from "lucide-react";
import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { DatePickerWithRange } from "@/components/custom/custom-date-picker";

const data = [
	{ date: "2 May, 23", site1: 90, site2: 60, site3: 30, site4: 80, site5: 90 },
	{ date: "17 July, 23", site1: 65, site2: 45, site3: 0, site4: 20, site5: 20 },
	{ date: "02 Sep, 23", site1: 28, site2: 20, site3: 30, site4: 60, site5: 85 },
	{ date: "04 Nov, 23", site1: 86, site2: 18, site3: 28, site4: 25, site5: 7 },
	{
		date: "Today, Jan 6, 24",
		site1: 2,
		site2: 15,
		site3: 25,
		site4: 100,
		site5: 75,
	},
];

const colors = [
	{
		link: "www.latestiphonereviews.com/best-iphone-models-2024",
		color: "#FF0000",
	},
	{
		link: "www.iphoneguides.com/how-to-unlock-an-iphone",
		color: "#0000FF",
	},
	{
		link: "www.myiphonehacks.com/iphone-battery-tips",
		color: "#008000",
	},
	{
		link: "www.smartphoneworld.com/compare-iphone-vs-android",
		color: "#FFA500",
	},
	{
		link: "www.iphonetricks.com/ios17-hidden-features",
		color: "#00CED1",
	},
];

const SerplistChart = () => {
	const [selectedLinks, setSelectedLinks] = useState<string[]>([]);

	const handleSelectLinks = (link: string) => {
		if (selectedLinks.includes(link)) {
			setSelectedLinks(selectedLinks.filter((item) => item !== link));
		} else {
			setSelectedLinks([...selectedLinks, link]);
		}
	};

	return (
		<div>
			<header className="text-[18px] mb-4">Historical Serp position</header>

			<div className="border border-[#D3D3D3] p-[24px] rounded-[6px]">
				<div className="h-[65px] flex items-center justify-between border-b border-[#BBB6B6]">
					<header className="text-[20px]">Serp list</header>
					<div className="flex items-center gap-[23px]">
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="ghost"
									className="h-[44px] gap-2 text-[#787777]"
								>
									Search eng: Google <ChevronDown />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0"></PopoverContent>
						</Popover>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="ghost"
									className="h-[44px] gap-2 text-[#787777]"
								>
									Rank: 5 <ChevronDown />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0"></PopoverContent>
						</Popover>

						<Select>
							<SelectTrigger className="w-[133px] h-[44px] rounded-none rounded-l-[4px]">
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1 month">Last 1 Month</SelectItem>
								<SelectItem value="2 month">Last 2 Month</SelectItem>
								<SelectItem value="6 month">Last 6 Month</SelectItem>
								<SelectItem value="8 month">Last 8 Month</SelectItem>
								<SelectItem value="1 year">Last 1 year</SelectItem>
							</SelectContent>
						</Select>

            <DatePickerWithRange className="w-[170px] min-w-max flex gap-[14px] border-[#D6D6D6]" />
					</div>
				</div>
				<div className="h-[418px] text-[13px] mb-[40px]">
					<ResponsiveContainer width="100%" height={400}>
						<LineChart
							data={data}
							margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" vertical={false} />
							<XAxis dataKey="date" />
							<YAxis reversed domain={[1, 100]} axisLine={false} />
							<Tooltip />
							{Object.keys(data[0])
								.filter((key) => key !== "date")
								.map((key, index) => (
									<Line
										key={key}
										type="monotone"
										dataKey={key}
										stroke={colors.map((item) => item.color)[index]}
										strokeWidth={2}
										dot={false}
									/>
								))}
						</LineChart>
					</ResponsiveContainer>
				</div>

				<Table>
					<TableHeader>
						<TableRow className="border border-[#CCC9C9] overflow-hidden rounded-[5px]">
							<TableHead className="min-w-[100px]"></TableHead>
							<TableHead>Url</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{colors?.map((item, idx) => {
							const isSelected = selectedLinks.includes(item.link);
							return (
								<TableRow className="border-b-[#CCC9C9]" key={idx}>
									<TableCell>
										<span
											className={`block size-[15px]`}
											style={{ background: `${item.color}` }}
										/>
									</TableCell>
									<TableCell className="text-[18px]">{item.link}</TableCell>
									<TableCell>
										<Button
											variant={isSelected ? "default" : "secondary"}
											className="p-2 h-[34px] w-[94px]"
											onClick={() => handleSelectLinks(item.link)}
										>
											{isSelected ? "Unselect" : "Select"}
											{isSelected ? <Check size={18} /> : <Minus size={18} />}
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default SerplistChart;
