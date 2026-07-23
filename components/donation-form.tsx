'use client';

import { Controller, useForm } from 'react-hook-form';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Alert } from '@/components/ui/alert';

import { createDonation } from '@/app/actions/donation';

import {
  CreateDonationInput,
  createDonationSchema,
} from '@/lib/validation/donation';
import { Campaign } from '@/lib/supabase/types';
import { formatAmount } from '@/lib/utils';
import { PRESET_AMOUNTS } from '@/lib/constants';

type DonationFormProps = {
  campaign: Campaign;
  currency: 'KRW' | 'IDR';
  onCurrencyChange: (currency: 'KRW' | 'IDR') => void;
};

export default function DonationForm({
  campaign,
  currency,
  onCurrencyChange,
}: DonationFormProps) {
  const form = useForm<CreateDonationInput>({
    resolver: standardSchemaResolver(createDonationSchema),
    defaultValues: {
      campaignId: campaign.id,
      name: '',
      message: '',
      amount: 0,
      currency: 'KRW',
    },
  });

  const onSubmit = async (values: CreateDonationInput) => {
    form.clearErrors('root.serverError');

    const result = await createDonation({
      ...values,
      currency,
      campaignId: campaign.id,
    });

    if (!result.success) {
      if (result.formErrors) {
        form.setError('root.serverError', {
          type: 'server',
          message: result.formErrors[0],
        });

        toast.error(result.formErrors[0]);
      }

      if (result.fieldErrors) {
        for (const [field, errors] of Object.entries(result.fieldErrors)) {
          if (!errors?.length) continue;
          form.setError(field as keyof CreateDonationInput, {
            type: 'server',
            message: errors[0],
          });
        }
      }

      return;
    }

    form.reset();
    toast.success('Thank you for your contribution!');
  };

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-5">
        <form
          className="w-full"
          id="donation-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 md:gap-18 sm:flex-row sm:gap-10">
            <div className="flex flex-col flex-1">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input {...field} id={field.name} placeholder="Your name" />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className="flex flex-col relative min-w-3xs my-1">
                <Controller
                  name="amount"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="">
                      <div className="flex my-5 gap-x-5">
                        <Field data-invalid={fieldState.invalid}>
                          <div className="flex gap-5 justify-between">
                            <FieldLabel
                              className="text-nowrap"
                              htmlFor={field.name}
                            >
                              Donation Amount
                            </FieldLabel>
                          </div>

                          <Input
                            {...field}
                            id={field.name}
                            placeholder="Enter a custom amount"
                            value={
                              field.value === 0 ? '' : formatAmount(field.value)
                            }
                            onChange={(e) => {
                              const raw = e.target.value.replace(/[^\d]/g, '');

                              field.onChange(raw === '' ? 0 : Number(raw));
                            }}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          {PRESET_AMOUNTS[currency].map((option) => {
                            return (
                              <Button
                                type="button"
                                key={option}
                                onClick={() => field.onChange(option)}
                              >
                                {formatAmount(option)}
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                />

                <div className="flex items-center absolute mt-5 pr-1 right-0 space-x-2">
                  <div className="flex flex-row items-center text-nowrap"></div>

                  <FieldLabel htmlFor="currency">KRW</FieldLabel>

                  <Switch
                    id="currency"
                    name="currency"
                    onCheckedChange={() => {
                      onCurrencyChange(currency === 'IDR' ? 'KRW' : 'IDR');
                    }}
                  />

                  <FieldLabel htmlFor="currency">IDR</FieldLabel>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-8">
              <Card>
                <CardContent>
                  <p>Toss Acc: XXXXXXXX</p>
                  <p>Jenius Acc: XXXXXXXXX</p>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent>
                  <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Leave a Message of Support
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id="message"
                          placeholder="Be kind!"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </form>

        <Button className="w-3/4" type="submit" form="donation-form">
          Submit Donation
        </Button>

        {form.formState.errors.root?.serverError && (
          <Alert variant="destructive">
            {form.formState.errors.root.serverError.message}
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
