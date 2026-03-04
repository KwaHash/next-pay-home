import { type Control, Controller } from 'react-hook-form'

import { Input } from '@/components/ui/input'

interface MInputFieldProps {
  id: string
  value?: string
  placeholder?: string
  control?: Control<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  icon?: React.ReactNode
}

const MInput: React.FC<MInputFieldProps> = ({
  id,
  value = '',
  placeholder,
  control,
  icon,
}) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <div className='relative'>
          {icon && <span>{icon}</span>}
          <Input
            {...field}
            id={id}
            placeholder={placeholder}
            className='pl-10 rounded-none'
          />
        </div>
      )}
    />
  )
}

export default MInput
