### defining routes

**Route**
**switch**
**exact**
in App.js

use the Route component with the path prop
wrap it around the components you want to be in the path

wrap the switch around all routes to make only one route appear

use the exact prop to not match all the routes

### tell react about the route

**BrowserRouter**

in index.js

use the BrowserRouter

root.render(<BrowserRouter><App /></BrowserRouter>)

### links

**Link**

with the to prop that have the actual address

**NavLink**
with activeClassName="class"

### params

**make tha param**
<Route path="/product/:id">

### access the param

**useParams** from "react-router-dom";

const params = useParams();
const id = params.id;

### redirect

**Redirect** with to prop

### Not Found Page

Route with \* path at the bottom of the routes

### Programmatic navigation

**useHistory**

const history = useHistory();

history.replace()

### prevent unwanted route transition

### lazy loading
