import SerpOverviewTable from "@/components/tables/SerpOverviewTable";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Download, Image } from "lucide-react";

export interface ISerpTableData {
	searchResult: string;
	da?: number;
	pa?: number;
	backlinks?: number;
	referringDomains?: number;
	referringIp?: number;
}

const SerpOverview = () => {
	const tableData: ISerpTableData[] = [
		{
			searchResult: "Featured Snippet",
			// da: 80,
			// pa: 45,
			// backlinks: 5000,
			// referringDomains: 100,
			// referringIp: 200,
		},
		{ searchResult: "People also ask" },
		{
			searchResult: "What is SEO?",
			// da: 80,
			// pa: 45,
			// backlinks: 5000,
			// referringDomains: 100,
			// referringIp: 200,
		},
		{
			searchResult: "Featured Snippet",
			// da: 80,
			// pa: 45,
			// backlinks: 5000,
			// referringDomains: 100,
			// referringIp: 200,
		},
		{
			searchResult: "What is SEO?",
			// da: 80,
			// pa: 45,
			// backlinks: 5000,
			// referringDomains: 100,
			// referringIp: 200,
		},
	];

	return (
		<div className="flex flex-col gap-[23px]">
			<header className="text-[18px]">SERP Overview</header>

			<div className="border border-[#AEABAB] rounded-[10px] py-[21px] px-[30px]">
				<div className="flex justify-between">
					<div className="h-[91px] flex flex-col justify-between">
						<header className="text-[24px] font-semibold">SERP Overview</header>
						<div className="flex items-center gap-[16px]">
							<Popover>
								<PopoverTrigger asChild>
									<button className="size-max gap-3 text-[#787777] text-[16px] p-0 flex items-center">
										Rank: <span className="text-black">1-5</span>{" "}
										<ChevronDown size={20} />
									</button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0"></PopoverContent>
							</Popover>

							<p className="text-[#888787]">
								Search engine: <span className="text-black">Google</span>
							</p>
						</div>
					</div>

					<div className="flex gap-3">
						<Button variant="ghost" className="h-[36px] text-[14px] gap-[11px]">
							Export as CSV <Download size={24} color="#41416E" />
						</Button>
						<Button variant="ghost" className="h-[36px] text-[14px] gap-[11px]">
							Save as Image <Image size={24} color="#41416E" />
						</Button>
					</div>
				</div>

				<SerpOverviewTable data={tableData} />
			</div>
		</div>
	);
};

export default SerpOverview;
