import { Modules } from './Modules'

export const Porfolio = () => {
  return (
    <section className="grid gap-2 pb-3">
      <h1 className=" text-center font-titleSubtitle text-3xl font-semibold md:text-4xl">
        My Porfolio
      </h1>
      <p className="text-center font-textPrimary text-base font-normal md:text-lg">
        cada proyecto tiene su huella digital por el cliente haciendo que cada
        trabajo tenga su historia y identidad de quien es y de que quieres ser
      </p>
      <Modules />
    </section>
  )
}
