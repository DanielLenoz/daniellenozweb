import { PlaceholdersAndVanishInput } from 'app/components/aceternityUI/placeholders-and-vanish-input-works'
import { SearcherProps } from '.'

const options = [
  { value: 'Todos' },
  { value: 'Landing pages' },
  { value: 'Dynamic pages' },
]

export const Searcher: React.FC<SearcherProps> = ({
  setCategories,
  setSearchValue,
}) => {
  const placeholders = [
    'Que proyectos te gustaria ver?',
    'Que te gustaria conocer?',
    'Que lenguaje de programacion utilizas?',
    'Cada cuanto escribes codigo',
    'Tienes un buen PC',
  ]

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="mx-auto flex w-full place-content-between items-center overflow-hidden rounded-2xl border-2 border-segundary font-textPrimary text-base font-normal md:text-lg  ">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(event) =>
          setSearchValue(event.target.value.toLocaleLowerCase())
        }
        onSubmit={onSubmit}
      />
      <select
        className="mr-2 h-full w-28 border-l-2 border-segundary bg-transparent pl-2 text-segundaryDark focus-visible:border-none focus-visible:outline-none dark:text-segundary md:w-56"
        onChange={(event) =>
          setCategories(event.target.value.toLocaleLowerCase())
        }
      >
        {options.map(({ value }) => (
          <option
            key={value}
            value={value}
            style={{ backgroundColor: 'transparent' }}
          >
            {value}
          </option>
        ))}
      </select>
    </section>
  )
}
