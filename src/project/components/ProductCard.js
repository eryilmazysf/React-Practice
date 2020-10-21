import React,{useState} from 'react';
import {View,Text,StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native';

// "id": 0,
// "userName": "tesla_nikola",
// "img": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/18-nikola-tesla-edward-watts.jpg",
// "description": "Cillum ad sit eiusmod magna sunt enim et velit duis elit eiusmod in. Sunt fugiat occaecat sunt nulla commodo nulla in non laboris reprehenderit ex. Consequat velit in veniam occaecat. Magna dolor amet cupidatat enim duis amet anim consectetur irure Lorem ea consectetur. Sint sunt in anim laboris incididunt aliqua enim. Sunt exercitation proident exercitation voluptate reprehenderit irure eu ipsum officia non officia cupidatat consequat incididunt. Duis sunt dolor elit enim sint minim.",
// "isLiked": false

const ProductCard=({product})=>{

    const [liked,setLiked]=useState(product.isLiked)

    const tap=()=>liked ? setLiked(false) :setLiked(true)

    return(
        <View>

            <View>
                <Image
                    source={{uri:product.img}}
                    style={styles.image}
                    />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={styles.title}>{product.userName}</Text>
                <TouchableOpacity
                onPress={tap}
                >
                
                    <Image source={require('../img/heart.png')}  style={liked ? styles.heartTrue : styles.heartFalse} />

                </TouchableOpacity>
            
            </View>
            <View>
                <Text style={styles.description}>{product.description}</Text>

            </View>
            
        </View>
       
    )
}

export default ProductCard;

const styles=StyleSheet.create({
   image:{
        height:Dimensions.get('window').height/4,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#bdbdbd'  
   },
   title:{
       textAlign:'center',
       fontSize:30,
       fontWeight:'bold',
       margin:5,
       padding:5,
       color:'red'
   },
   description:{
       fontWeight:'700',
       textAlign:'justify',
       padding:10,
       margin:10,
   },
   heartFalse: {
    height: Dimensions.get("window").height / 40,
    width: 25,
    resizeMode: "cover",
    margin: 15,
    padding: 5,
    opacity: 0.2,
  },
  heartTrue: {
    height: Dimensions.get("window").height / 40,
    width: 25,
    resizeMode: "cover",
    margin: 15,
    padding: 5,
    opacity: 1,
    tintColor: "red",
  },
})