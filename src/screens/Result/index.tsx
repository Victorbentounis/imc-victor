import React, { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";

import resultIllustration from "../../assets/images/result-illustration.png";
import arrowIllustrationHome from "../../assets/images/arrow-illustration-data.png";

import Button from "../../components/Button";

import { Context } from "../../Context";
import { styles } from "./styles";
import { getImc, getImcLabel } from "../../utils/imc";

export default function Result() {
  const { formData, handleSetCurrentPage } = useContext(Context);
  const [resultValue, setResultValue] = useState(0);
  const [resultLabel, setResultLabel] = useState("");

  useEffect(() => {
    if (formData) {
      const imc = getImc(Number(formData.weight), Number(formData.height));
      const label = getImcLabel(imc);

      label && setResultLabel(label);
      setResultValue(imc);
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={resultIllustration}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.line01}>O seu IMC é</Text>
          <Text style={styles.line02}>{resultValue.toFixed(2)} Kg/m²</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.line01}>Este valor é considerado como</Text>
          <Text style={styles.line02}>{resultLabel}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          type="tertiary"
          title="Voltar"
          onPress={() => handleSetCurrentPage("Home")}
        >
          <Image source={arrowIllustrationHome} resizeMode="contain" />
        </Button>
      </View>
    </View>
  );
}
