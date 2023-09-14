import DropDown from "./components/DropDown";
import BottomToolTip from "./Bottom";
import ActivityCard from "./Activity";

export default function MainBody(props: any) {
  return (
    <div className="border-b-gray-200 border-b-2 h-screen  scrollbar-hide mt-1 overflow-x-hidden">
      {/* Filters */}

      <div className="my-5">
        <h2 className="text-tertiary font-semibold text-lg">
          Upcoming Activity
        </h2>
      </div>
      <div className="my-3">
        <ActivityCard
          title="Task"
          tType="created"
          name="Esther Howard"
          showActions={true}
        />
      </div>

      <div className="my-3">
        <ActivityCard
          title="Task"
          tType="created"
          name="Esther Howard"
          showActions={false}
        />
      </div>
      <div className="my-5">
        <h2 className="text-tertiary font-semibold text-lg">
          Activity History
        </h2>
        <h4 className="mt-2 text-grayText text-sm font-semibold">
          12 December 2021
        </h4>
      </div>
      <BottomToolTip />
    </div>
  );
}
