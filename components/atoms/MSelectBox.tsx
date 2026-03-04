'use client'

import { type Control, Controller } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface MSelectBoxProps {
  id: string
  options: string[]
  value?: string
  control: Control<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  icon?: React.ReactNode
}

const MSelectBox: React.FC<MSelectBoxProps> = ({
  id,
  options,
  value = options[0],
  control,
  icon,
}) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <Select
          value={field.value ?? ''}
          onValueChange={field.onChange}
          onOpenChange={(open) => !open && field.onBlur()}
        >
          <SelectTrigger id={id} className='flex items-center rounded-none'>
            {icon && <span>{icon}</span>}
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  )
}

export default MSelectBox
