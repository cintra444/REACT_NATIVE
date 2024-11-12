import React from 'react';
import { View, Image, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { styles } from './style1';
import logo from './src/assets/logo.png';
import olho from './src/assets/olho.png';
import lupa from './src/assets/lupa.png';
import usuario from './src/assets/usuario.png';
import pix from './src/assets/pix.png';
import pagar from './src/assets/pagar.png';
import cartao from './src/assets/cartao.png';
import bandeira from './src/assets/bandeira.png'
import mundo from './src/assets/mundo.png';
import loop from './src/assets/loop.png';
import oferta from './src/assets/oferta.png';
import invest from './src/assets/invest.png';
import pixcredit from './src/assets/pixcredit.png';
import recarga from './src/assets/recarga.png';
import gift from './src/assets/gift.png';
import poupanca from './src/assets/poupanca.png';
import pontinhos from './src/assets/pontinhos.png';
import propaganda from './src/assets/propaganda.png';
import propaganda2 from './src/assets/propaganda2.png';
import seta from './src/assets/seta.png';
import amigos from './src/assets/amigos.png';
import perfil from './src/assets/perfil.png';
import porquinho from './src/assets/porquinho.png';
import moedaLoop from './src/assets/moedaLoop.png'
import cupomDesconto from './src/assets/cupomDesconto.png';
import inter from './src/assets/inter.png';
import inicio from './src/assets/inicio.png';
import { useNavigation } from '@react-navigation/native';

export default function App() {


  const menuItems = [
    { id: '1', title: 'Shopping', image: oferta },
    { id: '2', title: 'Invest', image: invest },
    { id: '3', title: 'Pix no crédito', image: pixcredit },
    { id: '4', title: 'Recarga', image: recarga },
    { id: '5', title: 'Gift card', image: gift },
    { id: '6', title: 'Poupança', image: poupanca },
    { id: '7', title: 'Mostrar mais', image: pontinhos },
  ];

  return <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>

      <View style={styles.headerTopo}>
        <Image source={logo} style={styles.iconImageLogo} />
        <Image></Image>
        <Image source={olho} style={styles.iconImage} />
        <Image source={lupa} style={styles.iconImage} />
        <TouchableOpacity >
        <Image source={usuario} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      {/* seção financas */}
      <View style={styles.header}>
        <View style={styles.opcoes}>
          <Image source={bandeira} style={styles.iconImage} />
          <Text style={styles.iconText}>R$</Text>
        </View>
        <View style={styles.opcoes}>
          <Image source={mundo} style={styles.iconImage} />
          <Text style={styles.iconText}>US$</Text>
        </View>
        <View style={styles.opcoes}>
          <Image source={loop} style={styles.iconImage} />
          <Text style={styles.iconText}>Loop</Text>
        </View>
        <Image></Image>
      </View>
      <View style={styles.cardValor}>
        <View style={styles.cardSeta}>
          <Text style={styles.textValor}>R$ 0,65</Text>
          <Image source={seta} style={styles.textValor} />
        </View>
        <View style={styles.cardBody}>
          <View style={styles.iconRow}>
            <View style={styles.opcoes}>
              <Image source={pix} style={styles.iconImageCard} />
              <Text style={styles.iconText}>Pix</Text>
            </View>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.opcoes}>
              <Image source={pagar} style={styles.iconImageCard} />
              <Text style={styles.iconText}>Pagar</Text>
            </View>
          </View>
          <View style={styles.iconRow}>
            <View style={styles.opcoes}>
              <Image source={cartao} style={styles.iconImageCard} />
              <Text style={styles.iconText}>Cartões</Text>
            </View>
          </View>
        </View>
      </View>
      {/* card menu */}
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.cardItem}>
              <Image source={item.image} style={styles.iconImage} />
              <Text style={styles.iconTextMenu}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.cardAdvertising}>
        <Image source={propaganda} style={styles.itemPropaganda} />
      </View>
      <View style={styles.cardAdvertising}>
        <Image source={propaganda2} style={styles.itemPropaganda} />
      </View>
      {/* limite de credito */}
      <View style={styles.limiteCredito}>
        <Text style={styles.limiteTitulo}>Limite de Crédito</Text>
        <View style={styles.limiteValores}>
          <Text style={styles.limiteTexto}>R$ 0,00</Text>
          <Text style={styles.limiteTexto}>R$ 3.900,00</Text>
        </View>
        <View style={styles.barraSeparadora}></View>
        <View style={styles.limiteStatus}>
          <Text style={styles.limiteUtilizado}>Utilizado</Text>
          <Text style={styles.limiteDisponivel}>Disponível</Text>
        </View>
      </View>
      {/* area da Advertising */}
      <View style={styles.advertisingContainer}>
        <View style={styles.cardAdvertisingFim}>
          <Text style={styles.textAdvertisingTopo}>Meu Porquinho</Text>
          <Text style={styles.textAdvertisingBody}>Bora guardar</Text>
          <Text style={styles.textAdvertisingBody}>dinheiro?</Text>
          <Image source={porquinho} style={styles.cardAdvertisingFimD} />
        </View>
        <View style={styles.cardAdvertisingFim}>
          <Text style={styles.textAdvertisingTopo}>Shopping</Text>
          <Image source={cupomDesconto}></Image>
          <View style={styles.desconto}>
            <Text style={styles.textDesconto}>cupom de desconto</Text>
          </View>
        </View>
      </View>
      <View style={styles.advertisingContainer}>
        <View style={styles.cardAdvertisingFim}>
          <Text style={styles.textAdvertisingTopo}>Pontos Loop</Text>
          <Text style={styles.textAdvertisingBody}>0</Text>
          <Image source={moedaLoop} style={styles.cardAdvertisingFimD} />
        </View>
        <View style={styles.cardAdvertisingFim}>
          <Text style={styles.textAdvertisingTopo}>Evoluir Perfil</Text>
          <Image source={perfil} />
          <Text style={styles.textAdvertisingFim}>Seja Inter One</Text>
          <Text style={styles.textAdvertisingTopo}>Mais beneficios</Text>
        </View>
      </View>
      <View style={styles.advertisingContainer}      >
        <View style={styles.cardAdvertisingFim}>
          <Text style={styles.textAdvertisingTopo}>Indique amigos</Text>
          <Image source={amigos} />
          <View>
            <Text style={styles.ganhe}>Ganhe até:</Text>
          </View>
          <View>
            <Text style={styles.textAdvertisingBody}>40.000 pts</Text>
          </View>
        </View>
      </View>

    </ScrollView>
    {/* rodape fixo */}
    <View style={styles.menuRodape}>
      <TouchableOpacity >
        <Image source={inicio} style={styles.iconImage} />
        <Text style={styles.textoBotao}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={invest} style={styles.iconImage} />
        <Text style={styles.textoBotao}>Invest</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={inter} style={styles.iconImage} />
        <Text style={styles.textoBotao}>Inter</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={oferta} style={styles.iconImage} />
        <Text style={styles.textoBotao}>Oferta</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={pontinhos} style={styles.iconImage} />
        <Text style={styles.textoBotao}>Todos</Text>
      </TouchableOpacity>
    </View>
  </View>

};