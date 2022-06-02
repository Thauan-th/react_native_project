import React from 'react';

//deps
import { ScrollView, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

//components
import { fakeData } from './src/components/fakeData';
import  CityButton  from './src/components/CityButton';

export default function App() {
  const [state, setState] = React.useState({
    region: {
      latitude: -20.4695225,
      longitude: -54.6016767,
      latitudeDelta:0.0015,
      longitudeDelta:0.0121
    },
    destLocation: null
})
const {region} = state;



return (
  <View style={styles.container}>
    <MapView
      ref={(map)=>{map = map}}
      style={styles.mapa}
      region={region}
      loadingEnabled
      showsUserLocation
    >
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
            return <CityButton key={city.id} city={city} setState={setState}/>
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
});
