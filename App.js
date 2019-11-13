/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNMonnify from 'mnfyrnsdk';

class App extends React.Component {
  componentDidMount() {

    console.log("RNMonnify", { RNMonnify })

    // RNMonnify.init({
    //   apiKey: 'MK_TEST_VR7J3UAACH',
    //   contractCode: '4876165459',
    //   applicationMode: 'TEST',
    // });
    // alert('hello')
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            {/* <Button onPress={() => {

              console.log("RNMonnifyModule.initializePayment was called")

              RNMonnify.initializePayment({
                amount: 1200.50,
                customerName: 'Tobi Adeyemi',
                customerEmail: 'tobiadeyemi@gmail.com',
                paymentReference: this.makeid(10),
                paymentDescription: 'Foodies',
                currencyCode: 'NGN',
                incomeSplitConfig: []
              }).then(res => {
                alert(res)
              })
            }

            } title="Run SDK" /> */}

          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
