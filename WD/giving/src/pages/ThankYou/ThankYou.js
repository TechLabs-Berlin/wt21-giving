import React from 'react';
import Header from '../../components/header/header'
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom';
import SocialFollow from '../../components/SocialFollow/SocialFollow'
import Textfield3 from '../../components/textfield3/Textfield3'
import { ImageBackground, Text, View } from "react-native";


const ThankYou = () => {
    return (
        <div className='thankyoupage'>
            <Link to={`/explorePage`}>
                <Header />
            </Link>
            <div className='thankyou-picture'>
             <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Thank you for your donation</Text>
             </ImageBackground>
             </View>
        </div>
        
        <div className='donate-summe'>
          <input text='summe' /> Your one-off donation of € 1,00 has been processed
        </div>
        
        <div className='backto'>
            {/* <Link to={`/Organisation`}>
                <Button text='Back to Organisation Page'/>
            </Link> */}
            </div>
            <div className='Share'>
            <SocialFollow />
            </div>
            <div className='Rally'>
                <p>Or rally this donation further by sending this link:</p>
                <Textfield3 text='https://givingapp.com/donations...' />
                <Button text='Rally now'/>
           </div>

        </div>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'normal',
      textAlign: 'left',
      backgroundColor: '#000000a0',
    },
  });

export default ThankYou;