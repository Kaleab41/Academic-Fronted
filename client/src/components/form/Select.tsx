import { Label } from "flowbite-react"

type SelectProp = {
  name: string
  options: Array<string>
  setValue: (value: string) => void
}

export default function Select({ name, options, setValue }: SelectProp) {
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor={name} value={name} />
      </div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
        id={name}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        required
      >
        <option selected value="">
          Select {name}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
