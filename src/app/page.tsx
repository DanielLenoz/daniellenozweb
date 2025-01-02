import { About } from 'app/components/home/About'
//import { Experience } from 'app/components/shared/Experience'
import { Experience } from 'app/components/home/Experience'
import { HomePage } from 'app/components/home/HomePage'
import { Porfolio } from 'app/components/shared/Porfolio'

export default function Home() {
  return (
    <main>
      <HomePage />
      <section className="grid gap-3 px-2 md:px-32">
        <About />
        <Experience />
       
        <Porfolio />
      </section>
    </main>
  )
}
