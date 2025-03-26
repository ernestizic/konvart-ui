import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const RelatedKeywordsTable = () => {
	return (
		<Table className="border border-[#EDEDED]">
			<TableHeader className="h-[56px] bg-[#E6EAFF99]">
				<TableRow>
					<TableHead>Terms</TableHead>
					<TableHead className="w-[222px]">Search Volume</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className="py-2.5 px-3">
					<TableCell className="font-medium">Quality Phones</TableCell>
					<TableCell>234k</TableCell>
				</TableRow>
				<TableRow className="py-2.5 px-3">
					<TableCell className="font-medium">Quality Phones</TableCell>
					<TableCell>234k</TableCell>
				</TableRow>
				<TableRow className="py-2.5 px-3">
					<TableCell className="font-medium">Quality Phones</TableCell>
					<TableCell>234k</TableCell>
				</TableRow>
				<TableRow className="py-2.5 px-3">
					<TableCell className="font-medium">Quality Phones</TableCell>
					<TableCell>234k</TableCell>
				</TableRow>
				<TableRow className="py-2.5 px-3">
					<TableCell className="font-medium">Quality Phones</TableCell>
					<TableCell>234k</TableCell>
				</TableRow>
			</TableBody>
      <TableFooter>
        <TableRow className="h-[39px] bg-[#fff]">
          <TableCell colSpan={2} className="text-center">
            <Link to="#" className="text-[#0929AD] underline">See More Result </Link>
          </TableCell>
        </TableRow>
      </TableFooter>
		</Table>
	);
};

export default RelatedKeywordsTable;
