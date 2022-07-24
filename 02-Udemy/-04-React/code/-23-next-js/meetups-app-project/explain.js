/*
we use the _app component ass a root element

navigate programmatically using the useRouter hook

to fetch data for pre rendering we use [static generation / server-side generation]

static generation => in build stage

in the page component that will wait for data you can export async function getStaticProps() {
  return {
    props: {
      
    },
    revalidate: 10,
  };
}

to rerender the page every request use the getServerSideProps()

in dynamic pages you need getStaticPaths function 



*/
