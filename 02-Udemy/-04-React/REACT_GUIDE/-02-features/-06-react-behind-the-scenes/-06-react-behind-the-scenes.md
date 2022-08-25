### when the component re-render

if state OR props OR context changes in the component

**if the parent component rerender All the child will rerender**

to prevent unnecessary rerender for branch of components

go to the child component that you wan't to NOT rerender when ever the parent rerender BUT rerender only when the state or props of it change

export default React.memo(Cmp)

### prevent function recreation

const myFunction = useCallback(() => {})
