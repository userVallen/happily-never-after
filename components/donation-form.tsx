import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProgressBar from "@/components/progress-bar";
import AmountSelector from "@/components/amount-selector";

export default function DonationForm() {
  return (
    <Card className="w-2xl max-w-full">
      <CardContent>
        <ProgressBar />

        <p className="text-xl font-semibold">Be in the credits!</p>

        <div className="flex flex-col gap-5 justify-between my-5 sm:flex-row sm:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>

            <AmountSelector />
          </div>

          <div className="flex flex-col w-full max-w-full min-h-full gap-8 sm:w-xs">
            <Card className="flex flex-col">
              <CardContent>
                <p>Toss Acc: XXXXXXXX</p>
                <p>Jenius Acc: XXXXXXXXX</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col align-center">
              <CardContent>
                <Label htmlFor="message">Leave a Message of Support</Label>
                <Textarea id="message" placeholder="Be kind!" />
              </CardContent>
            </Card>
          </div>
        </div>

        <Button className="flex justify-self-center w-md max-w-full">
          Submit Donation
        </Button>
      </CardContent>
    </Card>
  );
}
