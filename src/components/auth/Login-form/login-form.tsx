import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Control } from 'react-hook-form'
import { z } from 'zod'

import { Button, ControlledCheckbox, InputField } from '@/components/ui'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control as Control<FormValues>} /> {/* Приведение типа */}
      <InputField {...register('email')} type={'email'} error={errors.email?.message} />
      <InputField {...register('password')} type={'password'} error={errors.password?.message} />
      <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
