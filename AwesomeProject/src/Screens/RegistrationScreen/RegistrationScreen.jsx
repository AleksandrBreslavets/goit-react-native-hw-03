import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {Text, View } from "react-native";

export const RegistartionScreen = () => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [isSecureEnter, setIsSecureEnter] = useState(true);

    const togleSecureEnter = () => {
        setIsSecureEnter(!isSecureEnter);  
    };
    
    const handleFormSubmit = () => {
        console.log("Login: ", login);
        console.log("Email: ", email);
        console.log("Password: ", password);
        setLogin("");
        setEmail("");
        setPassword("");
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={[
                    styles.formContainer,
                    {
                        paddingBottom: isKeyboardOpen ? 32 : 78,
                        height:isKeyboardOpen ? 374 : "auto",
                    }]
                }>
                    <View style={styles.photoContainer}>
                        <TouchableOpacity style={styles.addPhotoButton}>
                            <Text style={styles.addPhotoButtonValue}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.formTitle}>Реєстрація</Text>
                    <TextInput
                        style={[styles.commonTextStyles, styles.input]}
                        value={login}
                        onChangeText={setLogin}
                        onFocus={() => setIsKeyboardOpen(true)}
                        onBlur={() => setIsKeyboardOpen(false)}
                        placeholder="Логін"
                        placeholderTextColor={'#bdbdbd'} />
                    <TextInput
                        style={[styles.commonTextStyles, styles.input]}
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setIsKeyboardOpen(true)}
                        onBlur={() => setIsKeyboardOpen(false)}
                        placeholder="Адреса електронної пошти"
                        placeholderTextColor={'#bdbdbd'} />
                    <View>
                        <TextInput
                            style={[styles.commonTextStyles, styles.input]}
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setIsKeyboardOpen(true)}
                            onBlur={() => setIsKeyboardOpen(false)}
                            placeholder="Пароль"
                            placeholderTextColor={'#bdbdbd'}
                            secureTextEntry={isSecureEnter} />
                        <TouchableOpacity onPress={togleSecureEnter} style={styles.securePasswordButton}>
                            <Text style={[styles.commonTextStyles, {color:'#1b4371'}]}>{isSecureEnter?"Показати":"Сховати"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
                        <Text style={[styles.commonTextStyles, styles.buttonValue]}>Зареєстуватися</Text>
                    </TouchableOpacity>
                    <View style={styles.loginInBox}>
                        <Text style={[styles.commonTextStyles, styles.loginInText]}>Вже є акаунт?{" "}</Text>
                        <TouchableOpacity>
                            <Text style={[styles.commonTextStyles, styles.loginInText, styles.loginInLink]}>Увійти</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        paddingTop: 92,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius:0,
    },
    photoContainer: {
        position: 'absolute',
        top: -60,
        left: '50%',
        transform:[{translateX:-50}],
        width: 132,
        height: 120,
        backgroundColor: '#f6f6f6',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f6f6f6',
        borderRadius: 16,
    },
    addPhotoButton: {
        position: 'absolute',
        top: 81,
        right:-12.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12.5,
        borderColor:'#ff6c00'
    },
    addPhotoButtonValue: {
        color:'#ff6c00'
    },
    formTitle: {
        marginBottom:32,
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 35.16,
        letterSpacing: 0.3,
        color: '#212121',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height:50,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius:10,
        borderColor: '#e8e8e8',
        backgroundColor: '#f6f6f6',
        marginBottom: 16,
        paddingLeft: 16,
        paddingRight:16,
    },
    commonTextStyles: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight:18.75,
    },
    button: {
        marginTop: 27,
        marginBottom:16,
        paddingTop: 16,
        paddingRight: 32,
        paddingBottom: 16,
        paddingLeft: 32,
        backgroundColor: '#ff6c00',
        borderRadius:100,
    },
    buttonValue: {
        color: '#fff',
        textAlign:'center',
    },
    loginInBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    },
    loginInText: {
        color: '#1b4371',
        textAlign:'center',
    },
    loginInLink: {
        textDecorationLine:'underline',
    },
    securePasswordButton: {
        position: "absolute",
        top: 16,
        right:16,
    }
});