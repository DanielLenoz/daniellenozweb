'use client'
import { useEffect, useState } from 'react'
import { supabase } from 'app/supabase/client'
import { DataType } from 'app/supabase/database.types'
import { Cards } from './Cards'
import { Searcher } from './Searcher'

export interface SearcherProps {
  setCategories: (value: string) => void
  setSearchValue: (value: string) => void
}

export const Modules = () => {
  const [categories, setCategories] = useState<string>('todos')
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredBlogs, setFilteredBlogs] = useState<DataType[]>([])

  useEffect(() => {
    const filterBlogs = async () => {
      // Obtén los datos de la API
      let { data: Blogs, error } = await supabase.from('Blogs').select('*')

      if (Blogs) {
        // Filtra los datos según categories y searchValue
        const filtered = Blogs.filter((blog) => {
          const titleLower = blog.title?.toLowerCase() || ''
          const hastag = blog.hastag?.toLowerCase() || ''
          const description = blog.description?.toLowerCase() || ''
          const content = blog.content?.toLowerCase() || ''

          if (categories === 'todos') {
            return (
              content.includes(searchValue) ||
              description.includes(searchValue) ||
              titleLower.includes(searchValue) ||
              hastag.includes(categories)
            )
          } else {
            return (
              (content.includes(searchValue) ||
                description.includes(searchValue) ||
                titleLower.includes(searchValue)) &&
              hastag.includes(categories)
            )
          }
        })
        setFilteredBlogs(filtered)
      } else if (error) {
        console.error(error)
      }
    }

    filterBlogs()
  }, [categories, searchValue])

  return (
    <>
      <Searcher setCategories={setCategories} setSearchValue={setSearchValue} />
      <Cards Blogs={filteredBlogs} />
    </>
  )
}
