import React from 'react'
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  ImageBackground, 
  ScrollView } from 'react-native'
// import Bg from '../../Icons'
import Person from '../../Images/person.svg'
import Search from '../../Icons/search.svg'
import Camera from '../../Icons/camera.svg'
import Leaf from '../../Icons/leaf.svg'
import Book from '../../Icons/open_book.svg'
import Plant from '../../Images/plant.svg'

const Home = ({navigation}) => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('../../Images/bg2.png')} style={{height:200, width:'100%', resizeMode: 'contain'}} >
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.hello}>Hello, Yassirli</Text>
            <Text style={styles.subtitle}>Let’s Learn More About Plants</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Profil")}>
            <Person/>
          </TouchableOpacity>
        </View>

      </ImageBackground>
      <View style={{
        elevation:1,
          backgroundColor:"#FFF",
          paddingHorizontal:20,
          paddingVertical: 5,
          marginHorizontal:20,
          borderRadius:50,
          marginTop:-26,
          flexDirection:"row",
          alignItems:"center",
          justifyContent: 'space-around'
      }}>
        <TextInput
            placeholder="Search For Plants"
            placeholderTextColor="#bebebe"
            style={{fontSize:14, color: '#2E382F', width:'100%',}} />
            <Search/>
      </View>
      <View style={styles.banner}>
        <TouchableOpacity style={styles.card}>
          <Camera/>
          <Text style={styles.subtitle}>IDENTiFY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
          <Leaf/>
          <Text style={styles.subtitleDark}>SPECIES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
          <Book/>
          <Text style={styles.subtitleDark}>ARTICLES</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft:14}}>
        <Text style={styles.label1}>Plant Types</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../../Images/plant.png')} style={styles.plantImage}>
            <Text style={styles.label2}>Home Plant</Text>
            <Text style={styles.label3}>68 Types of Plants</Text>
          </ImageBackground>
          <ImageBackground source={require('../../Images/plant.png')} style={styles.plantImage}>
            <Text style={styles.label2}>Home Plant</Text>
            <Text style={styles.label3}>68 Types of Plants</Text>
          </ImageBackground>
        </ScrollView>
      </View>
      <View style={{paddingLeft:14}}>
        <Text style={styles.label1}>Photography</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../../Images/image1.png')} style={styles.photographyImage}>
            <Text style={styles.label4}>#mini</Text>
          </ImageBackground>
          <ImageBackground source={require('../../Images/image2.png')} style={styles.photographyImage}>
            <Text style={styles.label4}>#homely</Text>
          </ImageBackground>
          <ImageBackground source={require('../../Images/image3.png')} style={styles.photographyImage}>
            <Text style={styles.label4}>#cute</Text>
          </ImageBackground>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 80
  },
  hello:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#FFFF'
  },
  subtitle:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    marginTop: 6,
    color: '#FFFF'
  },
  subtitleDark:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    marginTop: 6,
    color: '#6A6F7D'
  },
  content:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal:14
  },
  card:{
    width:'30%', 
    backgroundColor: '#2DDA93',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4
  },
  card2:{
    width:'30%', 
    backgroundColor: '#FFFF',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4
  },
  label1:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#2E382F',
    marginTop: 24,
    marginBottom: 16
  },
  label2:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    marginTop: 104,
    marginLeft: 13,
    color: '#FFF'
  },
  label3:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    marginLeft: 13,
    color: '#FFF'
  },
  label4:{
    position: 'absolute',
    paddingHorizontal:8,
    fontFamily: 'Montserrat-Light',
    fontSize: 12,
    marginTop: 120,
    marginLeft: 5,
    color: '#2E382F',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 20
  },
  plantImage:{
    resizeMode: 'cover',
    marginRight: 14,
    width: 299,
    height: 160
  },
  photographyImage:{
    resizeMode: 'cover',
    marginRight: 14,
    marginBottom: 14,
    width: 126,
    height: 144,
    borderRadius: 3
  }
})
