import Expenditure from "./Expenditure";
import Income from "./Income";
export default function Features() {
  return (
    <>
      <section className="p-4 m-h-80 ml-8">
        <div className="flex gap-10">
          <div className="border-2  rounded-sm">
            <Expenditure />
          </div>
          <div className="border-2  rounded-sm">
            <Income />
          </div>
        </div>
      </section>
    </>
  );
}
