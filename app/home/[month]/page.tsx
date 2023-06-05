import Logs from "@/components/interactives/logs";

const MonthPage = ({
  params,
  searchParams,
}: {
  params: { month: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Logs month={params.month} days={Number(searchParams.days)} />
    </div>
  );
};

export default MonthPage;
