
import React, {Component} from 'react'
import {View, Picker, Text, StyleSheet, Image, Button, FlatList} from 'react-native'

class PruebaGabo extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      medioTransporte:[],
      url: 'https://40.117.41.11:8243/gabomovility'
    }
  }

  

componentDidMount(){
  this.getMedioTransporte();
}

  getMedioTransporte = () => {

    this.setState({loading:true})

    fetch(this.state.url)
    .then(res => res.json())
    .then( res=>{
      this.setState({
        medioTransporte: res.data,
        loading: false
      })
    });
  };


  render(){
    
    return(
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.textColor2}>Reportar Movilidad</Text>
        </View>
        <View style={styles.body}>
        <Text style={styles.textColor}>Localidad de residencia:</Text>          
        <Picker>
            <Picker.Item label="Usaquén" value="usaquen" />
            <Picker.Item label="Chapinero" value="chapinero" />
            <Picker.Item label="Suba" value="suba" />
         </Picker>
         </View>
         <View style={styles.body}>
        <Text style={styles.textColor}>Hora e salida desde el hogar</Text>
        <Picker>
            <Picker.Item label="01:00 am" value="01:00 am" />
            <Picker.Item label="03:00 am" value="03:00 am" />
            <Picker.Item label="07:00 am" value="07:00 am" />
         </Picker>
         </View>
         <View style={styles.body}>
        <Text style={styles.textColor}>Localidad de destino: </Text>
        
          <Picker>
            <Picker.Item label="Usaquén" value="usaquen" />
            <Picker.Item label="Chapinero" value="chapinero" />
            <Picker.Item label="Suba" value="suba" />
          </Picker>
         </View>
         <View style={styles.body}>
        <Text style={styles.textColor}>Hora de salida hacia el hogar:</Text>
        
          <Picker>
          <Picker.Item label="01:00 am" value="01:00 am" />
            <Picker.Item label="03:00 am" value="03:00 am" />
            <Picker.Item label="07:00 am" value="07:00 am" />
          </Picker>
         </View>
         <View style={styles.body}>
        <Text style={styles.textColor}>Medio de transporte</Text>
        
          <Picker data={this.state.medioTransporte}
          renderItem={
          ({item}) => <Text>{item.name}</Text>
          }
          keyExtractor={(item, index)=> index.toString()}
          />
            
            
         
         </View>
        <View style={styles.footer}>
        <View style={styles.footerLeft}>
        
        <Button color="green"  title="Guardar Informacion" onPress={this.guardar}></Button>
        </View>
        <View style={styles.footerRight}>
        <Image source={require('./assets/bici.jpg')} 
              style={styles.logo}></Image>
        </View>
        </View>
        


      </View>
    )

  }

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : 'white'
  },
  header : {
    flexDirection : 'row',
    marginTop : 30,
    backgroundColor : 'black',
    justifyContent : 'center',
    alignItems : 'center',
    height : 60
  },
  body : {
    flex : 1,
    justifyContent : 'center',
    marginRight : 10,
    marginHorizontal : 10,
    marginTop : 10,
    marginBottom : 10,
    padding : 5,
    borderColor : 'black',
    borderWidth :1
  },
  logo : {
    width : 100,
    height : 60,
    resizeMode : 'contain'
  },
  footer : {
    flexDirection : 'row',
    marginHorizontal : 10,
    marginBottom : 10,
    height : 60
  },
  
  footerLeft : {
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'green',
    flex: 5
  },
  
  footerRight : {
    alignItems : 'center',
    justifyContent : 'center',
    flex: 1
    
  },
  textColor : {
    color : 'black',
    marginTop : 10
  },
  textColor2 : {
    color : 'white'
  }
})

export default PruebaGabo