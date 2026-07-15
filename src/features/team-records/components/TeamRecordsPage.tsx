import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { TeamRecords } from "./TeamRecords";

export const TeamRecordsPage = () => {
  return (
    <div>
      <TeamRecords />
      <Button className="mt-2">
        <Link to={"/sandbox"}>To sandbox</Link>
      </Button>
    </div>
  );
};
