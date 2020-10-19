import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MyBanner from './components/MyBanner';
import MyButton from './components/MyButton';
const food_data = [
  {
    id: 0,
    title: 'soup',
    desc: 'delicious',
    isActive: true,
    color: '#ffa000',
  },
  {
    id: 1,
    title: 'salads',
    desc: 'awesome',
    isActive: false,
    color: '#8bc34a',
  },
  {
    id: 2,
    title: 'drink',
    desc: 'cold',
    isActive: true,
    color: '#ffeb3b',
  },
];
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {food_data.map((food) => { 
          return (
            <MyBanner
              key={food.title}
              title={food.title}
              desc={food.desc}
              color={food.color}
              isActive={food.isActive}
            />
          );
        })}
        <TouchableOpacity
          style={styles.container}
          onPress={() => alert('Hello')}
          onLongPress={() => alert('Long Press')}>
          <Text style={styles.text}>Click Me!!</Text>
        </TouchableOpacity>
        <MyButton buttonTitle='Menu List'/>
        
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0277bd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
