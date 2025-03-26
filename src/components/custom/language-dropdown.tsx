import { useCallback, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDown, Globe } from "lucide-react";
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

interface ICountrySelectProps {
	className?: string;
	defaultValue?: string;
	onChange?: (language: string) => void;
}

const languages = ["English", "Spanish"];

const LanguageSelect = forwardRef<HTMLButtonElement, ICountrySelectProps>(
	({ className, onChange, ...props }, ref) => {
		const [open, setOpen] = useState(false);
		const [selectedLanguage, setSelectedLanguage] = useState<
			string | undefined
		>("English");

		const handleSelect = useCallback(
			(language: string) => {
				setSelectedLanguage(language);
				onChange?.(language);
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
						{selectedLanguage ? (
							<div className="flex items-center gap-[12px]">
								<Globe size="20" color="#142647" />
								{selectedLanguage}
							</div>
						) : (
							<div>Select language</div>
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
							<CommandEmpty>No language found.</CommandEmpty>
							<CommandGroup>
								{languages
									.filter((x) => x)
									.map((option, key: number) => (
										<CommandItem
											className="flex items-center w-full gap-2"
											key={key}
											onSelect={() => handleSelect(option)}
										>
											<div className="flex flex-grow w-0 space-x-2 overflow-hidden">
												{option}
											</div>
											<CheckIcon
												className={cn(
													"ml-auto h-4 w-4 shrink-0",
													option === selectedLanguage
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
LanguageSelect.displayName = "LanguageSelectComponent";
export default LanguageSelect;
