import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Participants from '../../components/Participants';
import React, { useState } from 'react';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    const handleParticipantAdd = () => {
        if (participantName === '') {
            return Alert.alert('Atenção', 'Preencha o campo antes de prosseguir.')
        }
        if (participants.includes(participantName)) {
            return Alert.alert('Participante já existente.', 'Participante já adicionado')
        } else {
            setParticipants(prevState => [...prevState, participantName])
            setParticipantName('')

        }

    }

    const handleParticipantRemove = (name: string) => {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    const handleState = (value: string) => {
        setParticipantName(value)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Events</Text>
            <Text style={styles.subtext}>Segunda-Feira, 11 de março de 2024</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder='Nome do participante:'
                    placeholderTextColor='#6B6B6B'
                    style={styles.textInput}
                    value={participantName}
                    onChangeText={handleState}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.textBtn}> + </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participants
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    text: {
        color: 'white',
        marginTop: 48,
        fontWeight: '800',
        fontSize: 24
    },
    subtext: {
        color: '#6b6b6b',
        fontSize: 16
    },
    textInput: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 8
    },
    btn: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF6C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white',
        fontSize: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42

    }
});
