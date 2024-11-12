import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import setinhas from './src/assets/setinhas.png'
import sinos from "./src/assets/sinos.png";
import usuario_lapis from "./src/assets/usuario_lapis.png";
import dadosBancarios from "./src/assets/dadosBancarios.png";
import personalize from './src/assets/personalize.png'
import cadastro from './src/assets/cadastro.png'
import seguranca from './src/assets/seguranca.png'
import rendimentos from './src/assets/rendimentos.png'
import isafe from './src/assets/isafe.png'
import centralAjuda from './src/assets/centralAjuda.png'
import sair from './src/assets/sair.png'
import setal from './src/assets/setal.png'

export default function App() {

  return <View style={styles.container}>
    <View style={styles.headerTopo}>
      <Image source={setinhas} style={styles.imagemMenu} />
      <Text style={styles.textTopo}>Perfil</Text>
      <Image source={sinos} style={styles.imagemMenu}/>
    </View>
    <View style={styles.usuario}>
      <Image source={usuario_lapis} style={styles.imagemUsuario}/>
      <Text style={styles.textUsuario}>EBER JUNIOR CINTRA</Text>
    </View>
    <View style={styles.botao}>
      <Text style={styles.textButton}>Inter Digital</Text>
    </View>
    
    <View style={styles.cardMenu}>
      <Image source={dadosBancarios} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Dados Bancários</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={personalize} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Personalizar Super App</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={cadastro} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Menu Cadastro e limites</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={seguranca} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Privacidade e Segurança</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={rendimentos} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Informe de Rendimentos</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={isafe} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Isafe e Internet Banking</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={centralAjuda} style={styles.imagemMenu} />
      <Text style={styles.textBody}>Central de Ajuda</Text>
      <Image source={setal}/>
    </View>
    <View style={styles.linha}/>
    <View style={styles.cardMenu}>
      <Image source={sair} style={styles.imagemMenu} />
      <Text style={styles.textBody}> Sair do Super App</Text>
      <Image source={setal}/>
    </View>
    

    <Text style={styles.rodape}>Versão do Supper App: 13.4.7</Text>
  </View>;
}
