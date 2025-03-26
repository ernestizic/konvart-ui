import { NavLink } from "react-router-dom";
import caretDownIcon from "@/assets/chevron-down-dark.svg";
import notificationIcon from "@/assets/notification.svg";

const Navbar = () => {
	const links = [
		{
			key: "/dashboard",
			value: "Dashboard",
		},
		{
			key: "/keyword-research",
			value: "Keyword research",
		},
		{
			key: "/content",
			value: "Content",
		},
		{
			key: "/local-seo",
			value: "Local SEO",
		},
		{
			key: "/tracking",
			value: "Tracking",
		},
		{
			key: "/optimizer",
			value: "Optimizer",
		},
		{
			key: "/technical-seo",
			value: "Technical SEO",
		},
		{
			key: "/link-building",
			value: "Link Building",
		},
	];
	return (
		<div className="h-[72px] flex items-end justify-between gap-[40px] px-[40px] border-b border-b-[#E3E3E3]">
			<nav className="h-[56px] flex items-center gap-[38px]">
				{links?.map((item) => (
					<NavLink
						key={item.key}
						to={item.key}
						className="font-normal text-[#76767A] text-[15px] h-full flex items-center [&.active]:text-[#0929AD] border-b-[3px] border-b-[#fff] [&.active]:border-b-[#0929AD]"
					>
						{item.value}
					</NavLink>
				))}
			</nav>

			<div className="h-[56px] flex items-center gap-[24px]">
				<button>
					<img src={notificationIcon} alt="notification" width={36} />
				</button>
				<button className="flex items-center gap-[12px] h-[36px] text-[16px]">
					Konvart Account <img src={caretDownIcon} alt="chevron" />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
