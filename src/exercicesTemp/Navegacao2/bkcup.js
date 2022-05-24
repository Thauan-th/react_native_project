<Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#ff0000',
        tabBarStyle:{
          backgroundColor:'#fff',
          borderTopWidth:0
        }
      }}>
        <Tab.Screen name='Home' component={HomeStack} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='home'  size={size} color={color} />
          }
        }}/>
        <Tab.Screen name='Sobre' component={Sobre} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='info'  size={size} color={color} />
          }
        }}/>
        <Tab.Screen name='Contato' component={Contato} options={{
          tabBarIcon:({color,size})=>{
            return <Feather name='user'  size={size} color={color} />
          }
        }}/>
      </Tab.Navigator>