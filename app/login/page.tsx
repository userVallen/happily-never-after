'use client';

import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';

import { loginSchema, LoginSchema } from '@/lib/validation/login';

import { signInWithEmail } from '@/app/login/actions';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: standardSchemaResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async ({ email, password }: LoginSchema) => {
    const result = await signInWithEmail({ email, password });

    if (result.success) router.push('/admin');
    else router.push('/login');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[100vh]">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">Admin Login</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-5">
          <form
            id="login-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input {...field} id={field.name} autoComplete="off" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input {...field} id={field.name} type="password" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </form>

          <Button type="submit" form="login-form">
            Log in
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
