import { DashboardNav } from "@/components/dashboard-nav";
import { navItems, settingItems } from "../constants/data";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
              Main Menu
            </h2>
            <DashboardNav items={navItems} className="mb-2" />
          </div>
          <div className="my-5">
            <h2 className="mb-2 mt-2 px-4 text-xs font-semibold tracking-tight">
              Setting
            </h2>
            <DashboardNav items={settingItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
