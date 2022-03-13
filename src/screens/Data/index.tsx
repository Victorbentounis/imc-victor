import React, { useContext } from "react";

import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";

import { useForm, Controller } from "react-hook-form";

import { MaskedTextInput } from "react-native-mask-text";

import dataIllustration from "../../assets/images/data-illustration.png";
import arrowIllustrationData from "../../assets/images/arrow-illustration-data.png";
import femaleIllustration from "../../assets/images/female-illustration.png";
import maleIllustration from "../../assets/images/male-illustration.png";

import Button from "../../components/Button";

import { Context } from "../../Context";
import Input from "../../components/Input";
import Gender from "../../components/Gender";

import { FormData } from "../../@types/context";

export default function Home() {
  const { handleSetFormData, handleSetCurrentPage, handleSetGenderSelection } =
    useContext(Context);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    try {
      handleSetFormData(data);
      handleSetCurrentPage("Result");
    } catch {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Text style={styles.line01}>
            Insira seus dados e deixe a calculadora fazer o resto
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.line02}>
            Para começar, precisamos saber o seu sexo
          </Text>
          <View style={styles.gender}>
            <Gender
              title="Feminino"
              onPress={() => handleSetGenderSelection("Feminino")}
            >
              <Image source={femaleIllustration} resizeMode="contain" />
            </Gender>
            <View style={styles.separator} />
            <Gender
              title="Masculino"
              onPress={() => handleSetGenderSelection("Masculino")}
            >
              <Image source={maleIllustration} resizeMode="contain" />
            </Gender>
          </View>
          <View>
            <Input title="Indique seu peso" unity="Kg">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskedTextInput
                    mask={value && value.length > 4 ? "999.99" : "99.99"}
                    style={styles.input}
                    onBlur={onBlur}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="weight"
              />
              {errors.weight && (
                <Text style={styles.error}>Campo obrigatório</Text>
              )}
            </Input>
            <Input title="E agora, indique sua altura" unity="Metros">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskedTextInput
                    mask={"9.99"}
                    style={styles.input}
                    onBlur={onBlur}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="height"
              />
              {errors.height && (
                <Text style={styles.error}>Campo obrigatório</Text>
              )}
            </Input>
            <Input title="E por fim, indique sua idade" unity="Anos">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskedTextInput
                    mask={"999"}
                    style={styles.input}
                    onBlur={onBlur}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="age"
              />
              {errors.age && (
                <Text style={styles.error}>Campo obrigatório</Text>
              )}
            </Input>
          </View>
        </View>
        <Button
          type="primary"
          title="Calcular"
          onPress={handleSubmit(onSubmit)}
        >
          <Image source={dataIllustration} resizeMode="contain" />
        </Button>
      </View>
      <View style={styles.bottom}>
        <Button
          type="tertiary"
          title="Voltar"
          onPress={() => handleSetCurrentPage("Home")}
        >
          <Image source={arrowIllustrationData} resizeMode="contain" />
        </Button>
      </View>
    </View>
  );
}
