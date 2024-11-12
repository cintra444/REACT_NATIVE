import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#1c1c1e',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 100,
        flex: 1,
    },
    headerTopo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        padding: 10,
    },
    textTopo: {
        fontSize: 20,
        color: '#fff',
    },
    imagemUsuario: {
        width: 120,
        height: 120,
    },
    imagemMenu: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    usuario: {
        alignItems: 'center',
        marginTop: 10,
    },
    textUsuario: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
    },
    botao: {
        height: 50,
        backgroundColor: '#ea7001',
        width: 130,
        marginTop: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        alignItems:'center',
    },
    textBody: {
        color: '#fff',
        fontSize: 16,
        flex: 1,
    },
    linha: {
        height: 1,
        backgroundColor: '#cccccc',
        width: '100%',
        marginVertical: 8,
    },
    cardMenu: {
   
        width: '100%',
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    rodape: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
    },
    
});