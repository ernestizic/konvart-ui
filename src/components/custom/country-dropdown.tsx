import { useCallback, useState, forwardRef, useEffect } from "react";
import { countries } from "country-data-list";
import { CircleFlag } from "react-circle-flags";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	PopoverTrigger,
	Popover,
	PopoverContent,
} from "@/components/ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

type Country = {
	alpha2: string;
	alpha3: string;
	countryCallingCodes: string[];
	currencies: string[];
	emoji?: string;
	ioc: string;
	languages: string[];
	name: string;
	status: string;
};
interface ICountrySelectProps {
	className?: string;
	defaultValue?: string;
	onChange?: (country: Country) => void;
}

const CountrySelect = forwardRef<HTMLButtonElement, ICountrySelectProps>(
	({ className, defaultValue, onChange, ...props }, ref) => {
		const [open, setOpen] = useState(false);
		const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
			undefined
		);

		const countryOptions = countries.all.filter(
			(country: Country) =>
				country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
		);

		useEffect(() => {
			if (selectedCountry) {
				setSelectedCountry(selectedCountry);
			} else {
				const initialCountry = countryOptions.find(
					(country) => country.alpha3 === defaultValue
				);
				if (initialCountry) {
					setSelectedCountry(initialCountry);
				} else {
					setSelectedCountry(selectedCountry);
				}
			}
		}, [defaultValue, countryOptions, selectedCountry]);

		const handleSelect = useCallback(
			(country: Country) => {
				setSelectedCountry(country);
				onChange?.(country);
				setOpen(false);
			},
			[onChange]
		);

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="ghost"
						role="combobox"
						aria-expanded={open}
						className={cn(
							"border border-[#B3B3B3] rounded-[5px] w-full justify-between hover:bg-inherit",
							className
						)}
						{...props}
						ref={ref}
					>
						{selectedCountry ? (
							<div className="flex items-center gap-[12px]">
								<div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
									<CircleFlag
										countryCode={selectedCountry.alpha2.toLowerCase()}
										height={20}
									/>
								</div>
								<span className="overflow-hidden text-ellipsis whitespace-nowrap">
									{selectedCountry.name}
								</span>
							</div>
						) : (
							<div>Select country</div>
						)}
						<ChevronDown size={20} />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					collisionPadding={10}
					className="w-[var(--radix-popper-anchor-width)] min-w-[200px] p-0"
				>
					<Command className="w-full max-h-[200px] sm:max-h-[270px]">
						<CommandList>
							<div className="sticky top-0 z-10 bg-popover">
								<CommandInput placeholder="Search country..." />
							</div>
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{countryOptions
									.filter((x) => x.name)
									.map((option, key: number) => (
										<CommandItem
											className="flex items-center w-full gap-2"
											key={key}
											onSelect={() => handleSelect(option)}
										>
											<div className="flex flex-grow w-0 space-x-2 overflow-hidden">
												<div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
													<CircleFlag
														countryCode={option.alpha2.toLowerCase()}
														height={20}
													/>
												</div>
												<span className="overflow-hidden text-ellipsis whitespace-nowrap">
													{option.name}
												</span>
											</div>
											<CheckIcon
												className={cn(
													"ml-auto h-4 w-4 shrink-0",
													option.name === selectedCountry?.name
														? "opacity-100"
														: "opacity-0"
												)}
											/>
										</CommandItem>
									))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		);
	}
);
CountrySelect.displayName = "CountryDropdownComponent";
export default CountrySelect;
