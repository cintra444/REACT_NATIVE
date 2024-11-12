import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232325',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 100,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    headerTopo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 50,
        padding: 10,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        padding: 10,
    },
    cardValor: {
        width: '100%',
        height: 180,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#2d2e30',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginBottom: 16,
    },
    cardSeta: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textValor: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8,
        backgroundColor: '#232325',
        borderRadius: 30,
        width: '28%',
        alignItems: 'center'
    },
    iconText: {
        fontSize: 12,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    opcoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    iconImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    iconImageCard: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    iconImageLogo: {
        resizeMode: 'contain',
    },
    menuContainer: {
        width: '100%',
        marginTop: 20,
    },
    cardItem: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#2d2e30',
        padding: 10,
        borderRadius: 8,
        height: 65,
    },
    iconTextMenu: {
        fontSize: 12,
        color: '#fff',
        alignItems: 'center',
        marginTop: 20,
    },
    cardAdvertising: {
        marginTop: 20,
        width: '100%',
        height: 200,
        borderRadius: 15,
        alignItems: 'center',
        overflow: 'hidden',
    },
    itemPropaganda: {
        width: '100%',
        height: 198,
        resizeMode: 'contain',
    },
    limiteCredito: {
        backgroundColor: '#2d2e30',
        width: '100%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    limiteTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    limiteValores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    barraSeparadora: {
        height: 10,
        width: '100%',
        backgroundColor: '#333338',
        marginHorizontal: 10,
        borderRadius: 5,
    },
    limiteTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    limiteStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    limiteUtilizado: {
        fontSize: 12,
        color: '#fff',
    },
    limiteDisponivel: {
        fontSize: 12,
        color: '#fff',
    },
    cardAdvertisingFim: {
        backgroundColor: '#2d2e30',
        width: '45%',
        height: 140,
        borderRadius: 12,
        paddingStart: 10,
    },
    cardAdvertisingFimD: {
        width: 50,
        height: 50,
        marginLeft: 85,
        marginBottom: 5,
        marginVertical: 10,
    },
    textAdvertisingTopo: {
        color: '#fff',
        fontSize: 12,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        margin: 5,
    },
    textAdvertisingBody: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    textAdvertisingFim: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    advertisingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        color: '#fff',
        gap: 20,
    },
    desconto: {
    backgroundColor: '#3c2014', 
    borderRadius: 10,           
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 5, 
    width: '90%'  
    },
    textDesconto: {
        fontSize: 12,
        color: '#ad571a',
    },
    ganhe: {
        color: '#ad571a',
        fontSize: 10,
        margin: 5,
    },
       menuRodape: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2d2e30',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#2d2e30',
        borderWidth: 1,
        height: 100,
        
    },
    textoBotao: {
        fontSize: 12,
        marginTop: 5,
        color: '#fff'
    }
});