import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    name: string
    onRemove: () => void
}

export default function Participants({ name, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.participantName}>
                {name}
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={onRemove}
            >
                <Text style={styles.textBtn}> - </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    participantName: {
        color: 'white',
        fontSize: 16,
        marginLeft: 16,
        flex: 1
    },
    btn: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: 'white',
        fontSize: 24,
    },
});
