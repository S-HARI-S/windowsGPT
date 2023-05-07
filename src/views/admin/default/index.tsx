import MiniCalendar from "@/components/calendar/MiniCalendar";
import WeeklyRevenue from "@/views/admin/default/components/WeeklyRevenue";
import TotalSpent from "@/views/admin/default/components/TotalSpent";
import PieChartCard from "@/views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Setup from "@/components/Setup";

import Widget from "@/components/widget/Widget";
import CheckTable from "@/views/admin/default/components/CheckTable";
import ComplexTable from "@/views/admin/default/components/ComplexTable";
import DailyTraffic from "@/views/admin/default/components/DailyTraffic";
import TaskCard from "@/views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";

const Dashboard = () => {
  return (
    <div  >
      {/* Card widget */}

      <div className="mt-3 m-25 items-center grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
      
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"API Call Limit / Minute"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Subscription"}
          subtitle={"Basic"}
        />
        {/* <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        /> */}
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Credits left"}
          subtitle={"$1,000"}
        />
        {/* <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        /> */}
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Prompts"}
          subtitle={"2433"}
        />
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30"></div>
   <Setup/>
   

    </div>
  );
};

export default Dashboard;
