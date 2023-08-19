import { useController, useForm } from 'react-hook-form'

import { Checkbox } from '../../ui//checkbox'
import { Button } from '../../ui/button'
import { InputField } from '../../ui/inputField'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

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
      <InputField {...register('email')} type={'text'} />
      <InputField {...register('password')} type={'password'} />
      <Checkbox onChange={onChange} checked={value} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
