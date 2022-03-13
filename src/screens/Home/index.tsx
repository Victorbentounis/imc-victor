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
        <Text style={styles.content}>
          Estar dentro do peso certo é importante porque estar acima ou abaixo
          desse peso pode influenciar bastante a saúde, aumentando o risco de
          doenças como desnutrição quando se está abaixo do peso, e AVC ou
          infarto, quando se está acima do peso.
        </Text>
        <Image
          style={styles.image}
          source={homeIllustration}
          resizeMode="contain"
        />
        <View style={styles.header}>
          <Text style={styles.line01}>Calcule o seu</Text>
          <Text style={styles.line02}>IMC</Text>
        </View>

        <Button
          type="secondary"
          title="Começar"
          onPress={() => handleSetCurrentPage("Data")}
        />
      </View>
    </View>
  );
}
