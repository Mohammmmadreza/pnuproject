import Home from './Home'
import Store from './components/Store/Store'
import Teachers from './components/GroupTeachers/Teachers'
import Known from './components/Known/Known'
import Maindatateacher from './components/Maindatateacher/Maindatateacher'

let routes=[
    { path:'/', element:<Home></Home>},
     { path:'/Store/Store' ,element:<Store></Store>},
     { path:'/GroupTeachers/Teachers' ,element:<Teachers></Teachers>},
     {path:'/Known/Known', element:<Known></Known>},
     {path:'/teachdata/:teachdataID', element:<Maindatateacher></Maindatateacher>},
   ]

   export default routes