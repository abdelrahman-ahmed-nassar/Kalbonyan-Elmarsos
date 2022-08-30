## Getting started

run this commands

`npx create-next-app`
`npm install`

### open the development server

`npm run dev`

### folders structure

pages folder => container the pages that will be server side rendered

### Root page

call it index.js

### sub routes

in the pages folder make file with the route name

### Nested paths

create Subfolder with the route name
make the index.js file in it
make the nestedRoute that will have the route you want

### create dynamic pages (with params)

follow this convention in naming the file
[name].js

### extract the params values

use this hook `useRouter` from `next/router`

`const router = useRouter()`

`const paramsValue = router.query.[fileName]`

### Linking between pages

`import Link from "next/link";`

`<Link href="subFolder/SubFile"> GO TO </Link>`
