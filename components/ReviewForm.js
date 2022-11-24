import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../styles/global"
import { Formik } from "formik";
import { homeStyles } from "../styles/home";
import { formSchema } from "../utils/validationSchema";


export const ReviewForm = ({ addReview }) => {
    
    return (
        <View style={styles.formBox}>
            <Text style={styles.titleText}>Leave a review!</Text>
            <Formik
                initialValues={{
                    title: "",
                    text: "",
                    rating: "",
                }}
                onSubmit={(values, {resetForm}) => {
                    addReview(values);
                    resetForm();
                }}
                validationSchema={formSchema}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                    <View>
                        <Text style={globalStyles.titleText}>Game name:</Text>
                        <TextInput 
                            style={errors.title && touched.title ? globalStyles.inputError : globalStyles.input} 
                            placeholder="Type in game title"
                            onChangeText={handleChange("title")} 
                            onBlur={handleBlur("title")}
                            value={values.title}
                        />
                        <Text style={globalStyles.titleText}>Review info:</Text>
                        <TextInput 
                            style={errors.text && touched.text ? {...globalStyles.inputError, height: 120} : {...globalStyles.input, height: 120}} 
                            placeholder="What do you think about it?"
                            onChangeText={handleChange("text")} 
                            onBlur={handleBlur("text")}
                            value={values.text}
                            multiline
                            numberOfLines={3}
                        />
                        <Text style={globalStyles.titleText}>Rating:</Text>
                        <TextInput 
                            style={errors.rating && touched.rating ? globalStyles.inputError : globalStyles.input} 
                            placeholder="Rating (1-5)"
                            onChangeText={handleChange("rating")} 
                            onBlur={handleBlur("rating")}
                            value={values.rating}
                            keyboardType="numeric"
                        />

                        { Object.keys(errors).length > 0 && Object.keys(touched).length === 0 && <Text style={globalStyles.errorText}>You must fill all the inputs first!</Text>}

                        <TouchableOpacity style={{...homeStyles.addButton, marginTop: 10}} onPress={handleSubmit}>
                            <Text style={homeStyles.buttonText}>Send</Text>
                        </TouchableOpacity>

                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    formBox: {
        justifyContent: "center",
        padding: 20,
    },
    titleText: {
        textAlign: "center",
        marginBottom: 12,
        color: "#5B627E",
        fontWeight: "bold",
        fontSize: 20
    }
})