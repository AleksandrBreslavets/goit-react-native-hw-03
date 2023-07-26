import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {Text, View } from "react-native";

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [isSecureEnter, setIsSecureEnter] = useState(true);

    const togleSecureEnter = () => {
        setIsSecureEnter(!isSecureEnter);  
    };

    const handleFormSubmit = () => {
        console.log("Email: ", email);
        console.log("Password: ", password);
        setEmail("");
        setPassword("");
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={[
                    styles.formContainer,
                    {
                        paddingBottom: isKeyboardOpen ? 32 : 111,
                        height:isKeyboardOpen ? 248 : "auto",
                    }]
                }>
                    <Text style={styles.formTitle}>Увійти</Text>
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
                            <Text style={[styles.commonTextStyles, { color: '#1b4371' }]}>{isSecureEnter ? "Показати" : "Сховати"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
                        <Text style={[styles.commonTextStyles, styles.buttonValue]}>Увійти</Text>
                    </TouchableOpacity>
                    <View style={styles.signInBox}>
                        <Text style={[styles.commonTextStyles, styles.signInText]}>Немає акаунту?{" "}</Text>
                        <TouchableOpacity>
                            <Text style={[styles.commonTextStyles, styles.signInText, styles.signInLink]}>Зареєструватися</Text>
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
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius:0,
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
    signInBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    },
    signInText: {
        color: '#1b4371',
        textAlign:'center',
    },
    signInLink: {
        textDecorationLine:'underline',
    },
    securePasswordButton: {
        position: "absolute",
        top: 16,
        right:16,
    }
});