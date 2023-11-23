interface SectionProps {
  children: React.ReactNode;
}

 const Section = (
  props: SectionProps & React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <section className='px-4 md:px-4 lg:px-0 xl:px-32 2xl:px-40 mt-0 mb-12 md:mb-14 flex flex-col md:flex-col md:items-center'>
      {props.children}
    </section>
  );
};

export default Section;