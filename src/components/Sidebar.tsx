import Logo from "@/assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import teamviewer from "@/assets/teamviewer.svg";
import ideaIcon from "@/assets/idea.svg";
import analyticsIcon from "@/assets/analytics-up.svg";
import searchIcon from "@/assets/search-focus.svg";
import searchListIcon from "@/assets/search-list-01.svg";
import caretDownIcon from "@/assets/angle-down.svg";
import logoutIcon from "@/assets/log-in.svg";
import helpIcon from "@/assets/help-circle.svg";

const Sidebar = () => {
	const links = [
		{
			route: "/keyword-research/keyword-overview",
			name: "Keyword overview",
			icon: teamviewer,
		},
		{
			route: "/keyword-research/keyword-ideas",
			name: "Keyword ideas",
			icon: ideaIcon,
		},
		{
			route: "/keyword-research/common-searches",
			name: "Common Searches",
			icon: searchListIcon,
		},
		{
			route: "/keyword-research/keyword-opportunities",
			name: "Keyword Opportunities",
			icon: searchIcon,
		},
		{
			route: "/keyword-research/competitor analysis",
			name: "Competitor Analysis",
			icon: analyticsIcon,
		},
	];
	return (
		<div className="fixed w-[246px] h-screen bg-[#010832] px-[17px] py-[32px] text-[#fff]">
			<div className="mb-[60px]">
				<Link to="/">
					<img src={Logo} alt="Konvart logo" width="157px" />
				</Link>
			</div>

			<section className="flex flex-col gap-6 h-[calc(100%-172px)] overflow-auto">
				<div className="h-[26px] text-[20px] font-normal flex items-center justify-between">
					Keyword Research <img src={caretDownIcon} alt="chevron" />
				</div>

				<nav className="flex flex-col gap-6">
					{links?.map((item) => (
						<NavLink
							key={item.route}
							to={item.route}
							className="h-[40px] rounded-[3px] text-[16px] font-normal p-2 flex items-center gap-2 [&.active]:bg-[#6CE3D5] [&.active]:text-[#021166]"
						>
							<img src={item.icon} width="20px" /> {item.name}
						</NavLink>
					))}
				</nav>
			</section>

			<nav className="h-[112px] absolute bottom-0 w-full left-0 px-[17px]">
				<button className="h-[44px] flex items-center gap-2.5 w-full p-[10px] rounded-[3px]">
					<img src={helpIcon} width="20px" alt="help" /> Help
				</button>
				<button className="h-[44px] flex items-center gap-2.5 w-full p-[10px] rounded-[3px]">
					<img src={logoutIcon} width="20px" alt="help" />
					Log out
				</button>
			</nav>
		</div>
	);
};

export default Sidebar;
