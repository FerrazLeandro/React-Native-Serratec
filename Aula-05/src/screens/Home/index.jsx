import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    StatusBar, Button
} from 'react-native';
import Card from '../../components/Card';
import AuthContext from '../../contexts/AuthContexts';
import { getTasks } from '../../services/tasksClient';


export const Home = ({ navigation  }) => {
    const [tasks, setTasks] = useState([])
    const { logoutContext } =  useContext(AuthContext)

    const fetchData = async () => {
        const taskList = await getTasks();
        setTasks(taskList)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList  data={tasks} keyExtractor={item => item.id}  renderItem={({item}) => <Card item={item}/> }/>
            <Button title='Detalhes'  onPress={() => navigation.navigate('Detalhes')}/>
            <Button title='LOGOUT'  onPress={logoutContext}/>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131313"
    },
    texto: {
        color: "#fff"
    }
});
