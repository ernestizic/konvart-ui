import CountrySelect from "@/components/custom/country-dropdown";
import LanguageSelect from "@/components/custom/language-dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import alertIcon from "@/assets/alert-circle.svg";
import SearchVolumeChart from "@/components/charts/SearchVolumeChart";
import KeywordDifficultyChart from "@/components/charts/KeywordChart";
import DemographicsChart from "@/components/charts/DemographicsChart";
import RelatedKeywordsTable from "@/components/tables/RelatedKeywordsTable";
import SerplistChart from "@/components/charts/SerplistChart";
import SerpOverview from "./SerpOverview";

const ContentPage = () => {
	return (
		<div>
			<div className="flex gap-[32px]">
				<div className="flex w-[387px] h-[40px] relative">
					<Search
						className="absolute top-[10px] left-[12px]"
						size={16}
						color="#141B34"
					/>
					<Input
						type="search"
						placeholder="Search keyword"
						className="border border-[#B3B3B3] w-[300px] rounded-none rounded-l-[5px] pl-[34px] placeholder:text-[#999999]"
					/>
					<Button
						type="submit"
						className="rounded-none rounded-r-[5px] w-[87px]"
					>
						Subscribe
					</Button>
				</div>

				<LanguageSelect
					onChange={(e) => console.log(e)}
					className="w-[168px]"
				/>
				<CountrySelect
					defaultValue="USA"
					onChange={(e) => console.log(e)}
					className="w-[222px]"
				/>
			</div>

			<div className=" my-[32px] flex flex-col gap-[12px]">
				<div className="flex items-center h-[28px] gap-[12px]">
					<p className="text-[24px] font-medium">Overview: Iphone</p>
					<span className="bg-[#868688] size-[9px] rounded-full" />
					<span className="text-[#626262] flex gap-[12px] text-[24px]">
						Search Engine: Google <img src={alertIcon} alt="info" />
					</span>
				</div>

				<div className="flex items-center gap-[50px] font-medium">
					<p className="text-[#767676]">Searched: September 15, 2024</p>
					<span className="text-[#454545]">Country: USA</span>
					<span className="text-[#767676]">Language: EN</span>
				</div>
			</div>

			<section className="flex flex-col gap-[104px]">
				<div>
					<header className="text-[18px] mb-[15px]">Search Detail</header>
					<div className="grid grid-cols-3 gap-[20px] border border-[#CBC8C8] p-[27px] rounded-[7px]">
						<SearchVolumeChart />
						<KeywordDifficultyChart />

						<div className="flex flex-col gap-[15px]">
							<div className="border border-[#D4D4D4] rounded-[6px] py-[13px] px-[10px] flex flex-col gap-[15px] h-[100px]">
								<p className="text-[13px]">Search Intent</p>
								<p className="text-[#021166] text-[20px] font-medium">
									Commercial
								</p>
							</div>
							<DemographicsChart />
						</div>
					</div>
				</div>

				<div>
					<header className="text-[#333333] text-[20px] mb-5">
						Keyword ideas
					</header>

					<div className="grid grid-cols-2 gap-[67px]">
						<div>
							<div className="flex items-center gap-4 text-[20px] font-medium mb-3">
								<header>Related Keywords</header>
								<span className="size-1.5 rounded-full bg-[#666666]" />
								<span className="text-[#4D4D4D]">
									Total result: 12,456
								</span>
							</div>
							<RelatedKeywordsTable />
						</div>
						<div>
							<div className="flex items-center gap-4 text-[20px] font-medium mb-3">
								<header>Additional Keywords ideas</header>
								<span className="size-1.5 rounded-full bg-[#666666]" />
								<span className="text-[#4D4D4D]">
									Total result: 12,456
								</span>
							</div>
							<RelatedKeywordsTable />
						</div>
					</div>
				</div>

				<SerplistChart />
				<SerpOverview />
			</section>
		</div>
	);
};

export default ContentPage;
