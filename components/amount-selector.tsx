"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { formatAmount } from "@/lib/utils";
import { PRESET_AMOUNTS } from "@/lib/constants";

export default function AmountSelector() {
  const [currency, setCurrency] = useState<"KRW" | "IDR">("KRW");
  const [amount, setAmount] = useState<number | null>(null);
  const presetAmount = PRESET_AMOUNTS[currency];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    setAmount(raw === "" ? null : Number(raw));
  };

  return (
    <div className="flex flex-col my-1">
      <div className="flex flex-row my-5 gap-x-5">
        <Label htmlFor="amount">Donation Amount</Label>

        <div className="flex items-center space-x-2">
          <Label htmlFor="currency">KRW</Label>
          <Switch
            id="currency"
            checked={currency === "IDR"}
            onCheckedChange={(checked) => setCurrency(checked ? "IDR" : "KRW")}
          />
          <Label htmlFor="currency">IDR</Label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {presetAmount.map((option) => {
            return (
              <Button key={option} onClick={() => setAmount(option)}>
                {formatAmount(option)}
              </Button>
            );
          })}
        </div>

        <Input
          id="amount"
          placeholder="Enter a custom amount"
          value={amount === null ? "" : formatAmount(amount)}
          onChange={handleAmountChange}
        />
      </div>
    </div>
  );
}
