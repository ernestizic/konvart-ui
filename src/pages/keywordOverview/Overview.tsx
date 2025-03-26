import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import alertIcon from "@/assets/alert-circle.svg";
import CountrySelect from "@/components/custom/country-dropdown";
import LanguageSelect from "@/components/custom/language-dropdown";
import KeywordCard from "@/assets/images/card.png";
import LocationCard from "@/assets/images/card2.png";
import LanguageCard from "@/assets/images/card3.png";
import SearchChart from "@/assets/images/search-chart.png";
import KeywordChart from "@/assets/images/keyword-chart.png";
import DemographicChart from "@/assets/images/demographic-chart.png";
import SerpAnalysis from "@/assets/images/serp-analysis.png";
import chart from "@/assets/images/chart.png";
import keywordcard from "@/assets/images/keywordcard.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/constants";

const FormSchema = z.object({
	keyword: z.string(),
	location: z.string(),
	language: z.string(),
});

const Overview = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			keyword: "",
			location: "",
			language: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<div>
			<div className="flex flex-col mb-[32px]">
				<header className="text-[32px] leading-[38px]">Keyword Overview</header>
				<p className="text-[18px]">
					Get in-depth data on SEO keywords you rank for
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="flex gap-[24px] flex-wrap">
						<FormField
							control={form.control}
							name="keyword"
							render={({ field }) => (
								<FormItem className="w-[393px]">
									<div className="flex items-center gap-[12px]">
										<FormLabel>Enter Keyword</FormLabel>
										<img src={alertIcon} alt="info" />
									</div>
									<FormControl>
										<Input
											placeholder="IPHONE"
											{...field}
											className="border border-[#B3B3B3] rounded-[5px]"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem className="w-[393px]">
									<FormLabel>Location</FormLabel>
									<FormControl>
										<CountrySelect
											defaultValue="USA"
											{...field}
											onChange={(e) => console.log(e)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="language"
							render={({ field }) => (
								<FormItem className="w-[393px]">
									<FormLabel>Language</FormLabel>
									<FormControl>
										<LanguageSelect
											{...field}
											onChange={(e) => console.log(e)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex gap-[34px] mt-[24px] mb-[30px]">
						<span>Keyword: 2/100</span>
						<div className="flex gap-[8px]">
							Previous Search:
							<div className="flex gap-[8px]">
								<div className="flex items-center gap-[8px] text-[#668EFF]">
									Samsung
									<span className="block w-[7px] h-[7px] bg-[#868688] rounded-full" />
								</div>
								<div className="flex items-center gap-[8px] text-[#668EFF]">
									Samsung
									<span className="block w-[7px] h-[7px] bg-[#868688] rounded-full" />
								</div>
								<div className="flex items-center gap-[8px] text-[#668EFF]">
									Samsung
								</div>
							</div>
						</div>
					</div>
					<Button type="submit" className="p-[10px] w-[178px]">
						Search Keyword
					</Button>
				</form>
			</Form>

			<div className="max-w-[1114px] m-auto">
				<div className="mt-[110px] mb-[144px] flex flex-col gap-[64px]">
					<div className="text-center">
						<header className="text-[24px] font-bold">How It Works</header>
						<p>
							This feature helps You find keywords that your competitors rank
							for but you don't
						</p>
					</div>

					<div className="grid grid-cols-3 gap-[32px]">
						<div>
							<img src={KeywordCard} alt="How it works" />
						</div>
						<div>
							<img src={LocationCard} alt="How it works" />
						</div>
						<div>
							<img src={LanguageCard} alt="How it works" />
						</div>
					</div>
				</div>

				<section>
					<div className="text-center mb-[64px]">
						<header className="text-[24px] font-bold">What You Get</header>
						<p>
							Discover niche keyword opportunities and common user questions to
							enhance your content strategy, drive targeted traffic, and
							optimize for higher conversions with minimal competition
						</p>
					</div>

					<div className="flex flex-col gap-[120px]">
						<div className="grid grid-cols-3 gap-[46px] text-[#082B27]">
							<div className="flex flex-col gap-[19px]">
								<img src={SearchChart} alt="chart" />
								<span>Monthly search volume estimates</span>
							</div>
							<div className="flex flex-col gap-[19px]">
								<img src={KeywordChart} alt="chart" />
								<span>
									A measure of how challenging it is to rank for a given keyword
								</span>
							</div>
							<div className="flex flex-col gap-[19px]">
								<img src={DemographicChart} alt="chart" />
								<span>
									Understand the motivations behind user queries and gain
									insights into the age, gender, and location of users searching
									for specific keywords
								</span>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-[58px] text-[#000933]">
							<div>
								<header className="text-[32px] font-bold mb-[24px]">
									Gain Deep Insights with SERP Analysis
								</header>
								<p className="text-[18px] leading-[24px]">
									Explore detailed SERP data to understand competitor
									strategies, identify content opportunities, and optimize your
									approach for higher rankings. Unlock essential metrics on
									featured snippets, top-ranking pages, and keyword competition
									to stay ahead in search results
								</p>
							</div>
							<img src={SerpAnalysis} alt="chart" width="100%" />
						</div>

						<div className="p-[32px] flex justify-between bg-[#EEF0FE]">
							<div className="w-[518px]">
								<img src={chart} alt="chart" width="100%" />

								<header className="text-[18px] font-bold mb-[12px] mt-[16px]">
									Gain Deep Insights with SERP Analysis
								</header>
								<p className="text-[14px]">
									Track the evolution of search rankings over time to identify
									patterns, understand competitor movements, and refine your SEO
									strategy for sustained success
								</p>
							</div>

							<div className="w-[360px]">
								<div>
									<img src={keywordcard} alt="chart" />
								</div>
								<header className="text-[18px] font-bold mb-[12px] mt-[16px]">
									Expand Your Reach with Related Keywords
								</header>
								<p className="text-[14px]">
									Unlock additional keyword opportunities to enhance your
									content strategy, reach a wider audience, and improve your
									search rankings with targeted, relevant terms.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-[146px] flex gap-[56px]">
						<div>
							<p className="mb-[18px] text-[24px] font-bold">Need Help?</p>
							<Button variant="outline">Contact support</Button>
						</div>

						<div className="w-full max-w-[822px]">
							<header className="text-center text-[18px] font-bold mb-[22px]">
								Frequently Asked Question
							</header>

							<Accordion type="single" collapsible className="flex flex-col gap-[13px]">
								{faq.map((item, idx: number) => (
									<AccordionItem key={idx} value={item.question} className="border border-[#B3B3B3] rounded-[6px] px-[12px] last:border-b">
										<AccordionTrigger className="text-[#188174] text-[18px]">{item.question}</AccordionTrigger>
										<AccordionContent className="text-[#4D4D4D]">{item.answer}</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Overview;
