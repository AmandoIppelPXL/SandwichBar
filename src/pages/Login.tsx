import { FunctionNavigationOptions, useNavigation } from '../hooks';
import { View, TextInput, Button, ToastAndroid, Text, ActivityIndicator } from 'react-native';
import { styles } from './Login.styles';
import { User, UserForLogin } from '../data';
import React from 'react';
import { Colors } from '../styles/_colors';
import { loginUser } from '../reducks/user';
import { connect } from 'react-redux';


type Props = {
    postArticle: any;
    isLoading: boolean;
}

const Login: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const login = () => {
        const user: UserForLogin = {
            username: username,
            password: password,

        };
    };


    return (
        <View style={{ padding: 8 }}>
            <TextInput
                key="Username"
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
                editable={!props.isLoading}
            />
            <TextInput
                key="password"
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                editable={!props.isLoading}
            />

            {props.isLoading ? (
                <ActivityIndicator size="large" color="#333" />
            ) : (
                    <Button title="Submit" color={Colors.primaryDark} onPress={() => login()}></Button>
                )}

        </View>
    );
};

Login.navigationOptions = () => ({
    title: 'Login',
    headerStyle: {
        backgroundColor: '#333',
    },
    headerTitleStyle: {
        color: '#FFF',
    },
    headerBackTitleStyle: {
        color: '#FFF',
    },
});
const mapStateToProps = (state) => ({ isLoading: state.user.isLoadingCreate });
const mapDispatchToProps = (dispatch) => ({ postUser: (user: UserForLogin) => dispatch(loginUser({ user: user })) });
const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginPage;