import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Checkbox } from '../../ui//checkbox'
import { Button } from '../../ui/button'
import { InputField } from '../../ui/inputField'

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

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField {...register('email')} type={'email'} error={errors.email?.message} />
      <InputField {...register('password')} type={'password'} error={errors.password?.message} />
      <Checkbox onChange={onChange} checked={value} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
