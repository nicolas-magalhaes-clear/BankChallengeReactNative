import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';




export default function App() {


  const [name, setName] = useState('')
  const [selectedOption, setSelectedOption] = useState()
  const [mValue, setMValue] = useState(0)
  const [switchV, setSwitchV] = useState(false)


  function loadAlert(){
    alert(`Conta criada com sucesso! \nNome: ${name} \nSexo: ${selectedOption} \nSeu limite é: ${mValue} \nAluno: ${switchV ? 'SIM' : 'NÃO'}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Banco React</Text>
      <TextInput style={styles.input} placeholder='Digite seu nome' value={name} onChangeText={(nv) => setName(nv)} />
      <Picker style={styles.picker} selectedValue={selectedOption} onValueChange={(ItemValue, ItemIndex) => setSelectedOption(ItemValue)}>
        <Picker.Item label='Masculino' value="masculino" />
        <Picker.Item label='Feminino' value="feminino" />
      </Picker>
      <Text style={{color: 'white'}}>Limite bancário R$ {mValue}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={1000}
        onValueChange={(newValue) => setMValue(newValue.toFixed(2))}
        minimumTrackTintColor='white'
        maximumTrackTintColor='white'
        thumbTintColor='white'
        
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: '100%'}}>
        <Text style={{color: 'white'}}>Você é aluno</Text>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Text style={{color: 'white'}}>{switchV ? "SIM" : "NÃO"}</Text>
          <Switch
            value={switchV}
            onValueChange={(newValue)=> setSwitchV(newValue)}
            />
        </View>
      </View>

      <TouchableOpacity onPress={()=> loadAlert()}>
        <View style={{padding: 10, backgroundColor: 'white', borderRadius: 10}}>
          <Text style={{color: 'blue'}}>Criar conta</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'blue'
  },
  logo: {
    color: 'white',
    fontWeight: '700',
    fontSize: 40
  },
  input: {
    backgroundColor: 'transparent',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%'
  },
  picker: {
    width: '100%',
    color: 'white'
  }
});
