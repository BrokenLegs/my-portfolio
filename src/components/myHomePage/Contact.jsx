import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/myHomePage/api";

const initValues = { name: "", email: "", message: "" };
const initState = {
  isLoading: false,
  error: "",
  isValidEmail: null,
  values: initValues,
};

export default function Contact({ inputStyle, hrLineColor }) {
  const toast = useToast();
  const { t } = useTranslation();

  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;
  const [touched, setTouched] = useState({});

  const onBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (target.name === "email") {
      const isValidEmail = emailRegex.test(target.value);
      setState((prev) => {
        return {
          ...prev,
          values: {
            ...prev.values,
            email: target.value,
          },
          isValidEmail: isValidEmail,
        };
      });
    }
  };

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      {/* <form className="flex flex-col gap-10 "> */}

      <div className="flex flex-col gap-6">
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("namePlaceholder")}
            className={inputStyle}
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <hr className={hrLineColor} />
        <FormControl
          isRequired
          isInvalid={touched.email && (!values.email || !state.isValidEmail)}
        >
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={t("emailPlaceholder")}
            className={inputStyle}
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>
            {values.email === ""
              ? "Required"
              : !state.isValidEmail
              ? "Invalid email address"
              : ""}
          </FormErrorMessage>
        </FormControl>
        <hr className={hrLineColor} />

        <FormControl isRequired isInvalid={touched.message && !values.message}>
          <Textarea
            name="message"
            id="message"
            placeholder={t("messagePlaceholder")}
            className={inputStyle}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            rows={4}
          />
          <FormErrorMessage>Required</FormErrorMessage>
          <div className="flex mx-auto mt-4">
            <Button
              isDisabled={!values.name || !values.email || !values.message}
              isLoading={isLoading}
              onClick={onSubmit}
              className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
            >
              {t("sendButton")}
            </Button>
          </div>
          {/* </form> */}
        </FormControl>
      </div>
    </>
  );
}
