import React, { Component, useState, useEffect } from "react"
import { StyleSheet, View, Text, ImageBackground, Dimensions, LayoutAnimation, UIManager, KeyboardAvoidingView } from "react-native"
import { Input, Button, Icon } from "react-native-elements"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { initializeType } from "../../store/auth"
import { LinearGradient } from "expo-linear-gradient"
//import { Entypo } from "@expo/vector-icons"
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const BG_IMAGE = require("../../assets/vb.png")

const AccessComponent = ({ type, form, navigation, onChangePassword, onChangeEmail, onSubmit }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    onChangeEmail(email)
  }, [email])
  useEffect(() => {
    onChangePassword(password)
  }, [password])
  const login = () => {
    onSubmit()
    navigation.navigate('')
  }
  const [isLoading, setIsLoading] = useState(false)
  // <Input value={email} placeholder="EMAIL" onChangeText={setEmail} />
  //     <Input value={password} placeholder="password" onChangeText={setPassword} />

  //     <Button title={"login gogo"} onPress={login} />
  //     <Button title={"Create Account"} onPress={() => navigation.navigate(`CreateAccount`)} />
  //     <Button title={"Forgot Password"} onPress={() => navigation.navigate(`ForgotPassword`)} />
  return (
    <View style={styles.container}>
      <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
        <View>
          <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior="position">
            <View style={styles.titleContainer}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.titleText}>ICE</Text>
              </View>
              <View style={{ marginTop: -10, marginLeft: 10 }}>
                <Text style={styles.titleText}>PICK</Text>
              </View>
            </View>

            <View style={styles.formContainer}>
              <Input
                leftIcon={<Icon name="envelope-o" type="font-awesome" color="rgba(0, 0, 0, 0.38)" size={25} style={{ backgroundColor: "transparent" }} />}
                value={email}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                inputStyle={{ marginLeft: 10 }}
                placeholder={"Email"}
                containerStyle={{
                  borderBottomColor: "rgba(0, 0, 0, 0.38)",
                }}
                //ref={(input) => (this.emailInput = input)}
                //onSubmitEditing={() => this.passwordInput.focus()}
                onChangeText={(email) => setEmail(email)}
                //errorMessage={isEmailValid ? null : "Please enter a valid email address"}
              />
              <Input
                leftIcon={<Icon name="lock" type="simple-line-icon" color="rgba(0, 0, 0, 0.38)" size={25} style={{ backgroundColor: "transparent" }} />}
                value={password}
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                returnKeyType={"done"}
                blurOnSubmit={true}
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: "rgba(0, 0, 0, 0.38)",
                }}
                inputStyle={{ marginLeft: 10 }}
                placeholder={"Password"}
                //ref={(input) => (this.passwordInput = input)}
                //onSubmitEditing={() => (isSignUpPage ? this.confirmationInput.focus() : this.login())}
                onChangeText={(password) => setPassword(password)}
                //errorMessage={isPasswordValid ? null : "Please enter at least 8 characters"}
              />

              <Button buttonStyle={styles.loginButton} containerStyle={{ marginTop: 32, flex: 0 }} activeOpacity={0.8} title={"LOGIN"} onPress={login} titleStyle={styles.loginTextButton} loading={isLoading} disabled={isLoading} linearGradientProps={{
                colors: ["#636FF6", "#AC7AF8"],
                start: [1, 0],
                end: [0.2, 0],
              }}
              ViewComponent={LinearGradient} />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.helpContainer}>
            <Button title={"Create Account"} titleStyle={{ color: "white" }} buttonStyle={{ backgroundColor: "transparent" }} underlayColor="transparent" onPress={() => navigation.navigate("CreateAccount")} />
            <Button title={"Find ID & Password"} titleStyle={{ color: "white" }} buttonStyle={{ backgroundColor: "transparent" }} underlayColor="transparent" onPress={() => navigation.navigate("FindInfo")} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default AccessComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSelector: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  selectorContainer: {
    flex: 1,
    alignItems: "center",
  },
  selected: {
    position: "absolute",
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: "white",
    backgroundColor: "white",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginTextButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "rgba(232, 147, 142, 1)",
    borderRadius: 10,
    height: 50,
    width: 200,
  },
  titleContainer: {
    height: 150,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "white",
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    //fontFamily: 'light',
    backgroundColor: "transparent",
    opacity: 0.54,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: "white",
    fontSize: 30,
    //fontFamily: 'regular',
  },
  helpContainer: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
})
