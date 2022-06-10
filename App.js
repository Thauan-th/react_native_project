import React from 'react';

//deps
import { ScrollView, StyleSheet, View , Text} from 'react-native';
import MapView, { Marker , Callout} from 'react-native-maps';

//components
import { fakeData } from './src/components/fakeData';
import  CityButton  from './src/components/CityButton';
const pinImages ={
  0: require('./src/assets/carro.png'),
  1: require('./src/assets/carro_down.png'),
  2: require('./src/assets/carro_left.png'),
  3: require('./src/assets/carro_right.png'),
}
export default function App() {

  
  const [state, setState] = React.useState({
    region: {},
    destLocation: null
})
  const [marks,setMarks] = React.useState([])
  const {region} = state;

  React.useEffect(()=>{
    getLocation();
  })
  async function getLocation(){
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== 'granted'){
      alert('Permissão negada');
    }
    const location = await Location.getCurrentPositionAsync({});
    const {latitude,longitude} = location.coords;
    setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    })  
  }


  function addMarker(e){
    let aux = []
    aux.push({
      key:marks.length,
      coords:{
        latitude:e.nativeEvent.coordinate.latitude,
        longitude:e.nativeEvent.coordinate.longitude,
      }
    })
   setMarks(aux.concat(marks))
  }

return (
  <View style={styles.container}>
    <MapView
      ref={(map)=>{map = map}}
      style={styles.mapa}
      region={region}
      loadingEnabled={true}
      onPress={e=>addMarker(e)}
    > 
      {marks.length>0 && marks.map((marker)=>{
        return(
          <Marker 
            image={pinImages[marker.key] || pinImages[0]}
            key={marker.key}
            coordinate={marker.coords}
            title="Marker"
            description='Marcador usado para mapas'
        >
          <Callout>
            <View style={styles.callout}>
              <Text>{marker.key}</Text>
            </View>
          </Callout>
        </Marker>
        )
      })
      
      }
      {state.destLocation && (
        <MapViewDirections 
          origin={state.region}
          destination={state.destLocation}
          apikey="AIzaSyBoJq8KXM6rA23iqX1kSKJaHFwVok5ZSLQ"
          strokeWidth={5}
          strokeColor="#000"
        />
      )}
    </MapView>


    <ScrollView style={styles.box} horizontal={true} showsHorizontalScrollIndicatior={false}>
      <View style={styles.localView }>
        {
          fakeData.map(city =>{
            return <CityButton key={city.id} city={city} setState={setState} setMarkes={setMarks}/>
          })
        }
      </View>
    </ScrollView>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  mapa:{
   flex: 1,
  },
  box: {
    position: 'absolute',
    top: 50,
    margin: 10,
    height: 70

  },
  localView: {
    height: 40,
    padding: 5,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  callout:{
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
