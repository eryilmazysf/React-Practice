import React from 'react';
import {SafeAreaView,View,Text,StyleSheet, FlatList} from 'react-native';

import data from './components/data.json';
import ProductCard from './components/ProductCard'

const App=()=>{

    const renderList=({item})=><ProductCard  product={item}/>


    return(
        <SafeAreaView >
            <View>
                <FlatList
                    keyExtractor={(item,index)=>index.toString()}
                    data={data}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles=StyleSheet.create({
   
})