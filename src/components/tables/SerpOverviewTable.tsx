import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

const SerpOverviewTable = ({ data }) => {
	const hasFullData = data.some(
		(row) =>
			row.da ||
			row.pa ||
			row.backlinks ||
			row.referringDomains ||
			row.referringIp
	);

	return (
		<div>
			<div className="border overflow-hidden mt-[31px]">
				<Table>
					<TableHeader className="h-[44px] bg-[#E3E3E3]">
						<TableRow className="text-[14px]">
							<TableHead>
								<div className="flex items-center gap-[20px] pl-[10px]">
									<Checkbox className="border border-[#838282]" />
									No
								</div>
							</TableHead>
							<TableHead>Search result</TableHead>
							<TableHead>DA</TableHead>
							<TableHead>PA</TableHead>
							<TableHead>Backlinks</TableHead>
							<TableHead>Referring domains</TableHead>
							<TableHead>Referring IP</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{data.map((row, index) => (
							<TableRow className="text-[#434343]" key={index}>
								<TableCell className="p-[20px] min-w-[50px]">
									<div className="flex items-center gap-[19px]">
										<Checkbox className="border border-[#838282]" /> {index + 1}
									</div>
								</TableCell>
								<TableCell className="p-[20px] max-w-[339px] w-[339px] min-w-[339px] border break-words whitespace-normal">
									<details>
										<summary className="cursor-pointer underline marker:text-[#7B7979]">
											{row.searchResult}
										</summary>
										<div className="mt-[8px]">
											Epcot is a theme park at Walt Disney World Resort
											featuring exciting attractions, international pavilions,
											award-winning fireworks and seasonal special events.
										</div>
									</details>
								</TableCell>

								{!hasFullData && index === 0 && (
									<>
										<TableCell
											colSpan={7}
											rowSpan={data.length}
											className="py-[50px] px-[38px] border bg-[#F8FFFE]"
										>
											<div className="w-[100%] max-w-[545px] flex flex-col gap-[17px] break-words whitespace-normal">
												<h3 className="text-lg font-semibold">
													Get More With a Subscription
												</h3>
												<p className="text-gray-500 text-sm">
													Without a subscription, you can only view SERP
													positions up to
													[date-of-historical-serps-last-update]. Subscribe to a
													plan to more SERP data including SERP features,
													backlink data of ranking URLs and domains, and more.
												</p>
												<Button className="w-[210px]">
													Go to subscription page
												</Button>
											</div>
										</TableCell>
									</>
								)}

								{hasFullData ? (
									<>
										<TableCell className="p-[20px]">{row.da || "-"}</TableCell>
										<TableCell className="p-[20px]">{row.pa || "-"}</TableCell>
										<TableCell className="p-[20px]">
											{row.backlinks || "-"}
										</TableCell>
										<TableCell className="p-[20px]">
											{row.referringDomains || "-"}
										</TableCell>
										<TableCell className="p-[20px]">
											{row.referringIp || "-"}
										</TableCell>
									</>
								) : null}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<Button
				className="w-[110px] border-[#BABABA] mt-[23px]"
				variant="outline"
			>
				See All
			</Button>
		</div>
	);
};

export default SerpOverviewTable;
