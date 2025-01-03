import 'animate.css/animate.compat.css'
import { DataType } from 'app/supabase/database.types'
import { FocusCards } from 'app/components/aceternityUI/focus-cards-blogs'

export const Cards = ({ Blogs }: { Blogs: DataType[] }) => {
  return (
    <section className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      <FocusCards cards={Blogs} />
    </section>
  )
}
