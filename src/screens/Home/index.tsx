import React, { useContext } from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import homeIllustration from "../../assets/images/home-illustration.png";
import arrowIllustrationHome from "../../assets/images/arrow-illustration-home.png";
import Button from "../../components/Button";

import { Context } from "../../Context";

export default function Home() {
  const { handleSetCurrentPage } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Text style={styles.line01}>Calcule o seu</Text>
          <Text style={styles.line02}>IMC</Text>
        </View>
        <Image
          style={styles.image}
          source={homeIllustration}
          resizeMode="contain"
        />
        <Text style={styles.content}>
          Estar dentro do peso certo é importante porque estar acima ou abaixo
          desse peso pode influenciar bastante a saúde, aumentando o risco de
          doenças como desnutrição quando se está abaixo do peso, e AVC ou
          infarto, quando se está acima do peso.
        </Text>
      </View>
      <View style={styles.bottom}>
        <Button
          type="secondary"
          title="Começar"
          onPress={() => handleSetCurrentPage("Data")}
        >
          <Image source={arrowIllustrationHome} resizeMode="contain" />
        </Button>
      </View>
    </View>
  );
}
