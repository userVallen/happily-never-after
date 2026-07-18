import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  return (
    <div className="my-5">
      <p>AMOUNT COLLECTED/GOAL (IDR)</p>
      <Progress value={40}></Progress>
    </div>
  );
}
