import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Input, Loading } from '../../components'
import { colors, fonts, useForm } from '../../utils'
import { Fire } from '../../config'

const Register = ({ navigation }) => {
    // const[fullName, setFullName] = useState('')
    // const[Profession, setProfession] = useState('')
    // const[Email, setEmail] = useState('')
    // const[Password, setPassword] = useState('')


    const [form, setForm] = useForm({
        fullName: '',
        Profession: '',
        Email: '',
        Password: '',
    })

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form)
        setLoading(true)
        Fire.auth()
            .createUserWithEmailAndPassword(form.Email, form.Password)
            .then((success) => {
                // Signed in
                setLoading(false)
                setForm('reset')
                console.log('register success', success)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false)
                console.log('error register', errorMessage)
            });

        // navigation.navigate('UploadPhoto')

    }
    return (
        <>
            <View style={styles.MainContainer}>
                <Text style={styles.text}>Register Yourself</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input label='Full Name' value={form.fullName} onChangeText={value => setForm('fullName', value)} />
                    <Input label='Profession' value={form.Profession} onChangeText={value => setForm('Profession', value)} />
                    <Input label='Email' value={form.Email} onChangeText={value => setForm('Email', value)} />
                    <Input label='Password' value={form.Password} onChangeText={value => setForm('Password', value)} secureTextEntry />
                    <Gap height={40} />
                    <View style={{ marginLeft: 7 }}>
                        <Button title='Sign Up' onPress={onContinue} />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text2}>Dont have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.text2}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    )
}

export default Register

const styles = StyleSheet.create({
    MainContainer: {
        padding: 40,
        backgroundColor: colors.backgroundColor,
        flex: 1

    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,

    },
    text: {
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 22,
        marginBottom: 40
    },
    text2: {
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 14,
        color: colors.text.secondary
    }
})
