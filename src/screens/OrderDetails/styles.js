import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'column',
    },
    itemText: {
        marginLeft: 10,
    },
    done: {
        flex: 1,
        alignSelf: "flex-end",
        fontSize: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        marginTop: 20,
        flex: 1,
        paddingLeft: "10%",
        paddingRight: "10%"
    },
    header: {
        height: 50,
        backgroundColor: '#008037',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;
