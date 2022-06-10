import { createDrawerNavigator } from "@react-navigation/drawer";

import Sobre from "../pages/Sobre";
import Home from '../pages/Home'

const Drawer = createDrawerNavigator()
export default ()=>{

  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />

    </Drawer.Navigator>
  )
}