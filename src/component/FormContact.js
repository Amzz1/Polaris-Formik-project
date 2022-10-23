import React, { useState, useEffect } from "react";
import { Button, Form, FormLayout, TextField } from "@shopify/polaris";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, Page} from '@shopify/polaris';
import FormContactSkeleton from "./FormContactSkeleton";
import axios from 'axios'
let SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required(),
  message: Yup.string().required()
});


export default function FormOnSubmitExample() {
  const [showSkeleton, setShowSkeleton] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShowSkeleton(!showSkeleton)
    },900)
  },[])
  const formik = useFormik({
    initialValues: {
      email: "",
      subject:"",
      message:""
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post('https://testapi.io/api/anhez/contact-us', {values})
      .then(function (response) {
        console.log(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  });
  const handleChange = (value, id) => {
    formik.setFieldValue(id, value);
  };
  const { values, errors, touched } = formik;
  console.log("touched.email", formik.values.subject,  formik.values.email);
 if(showSkeleton){
  return <FormContactSkeleton/>
 }else{
  return (
    <>
    <Page>
    <div className="contact-form-container">
    <h3>Contact </h3>
    <div className="contact-form_header">
      <Card>
     <p>
      Don't hesitate to contact us if you face any problem or have any question about the app.
      We are happy to help you.
     </p>
     <p>
      Please give us permission to access your Shopify admin. So we could support you quickly. We need to access App and Online Store and Themes.
      Our email address for creating staff account is: contact@globosoftware.net

     </p>
      </Card>
      </div>
   <div className="contact-form_content">
      <Card>
    
      <Form onSubmit={formik.handleSubmit}>
      <FormLayout>
        <TextField
          value={values.email}
          onChange={handleChange}
          label="Email"
          type="email"
          autoComplete="email"
          id="email"
          error={touched.email && errors.email}
        />
        <TextField
          value={values.subject}
          onChange={handleChange}
          label="Subject"
          type="text"
          autoComplete="subject"
          id="subject"
          error={touched.subject && errors.subject}
        />
        <TextField
          value={values.message}
          onChange={handleChange}
          label="Message"
          type="text"
          id="message"
          error={touched.message && errors.message}
        />
       
<Button submit primary>Save</Button>    
  </FormLayout>
    </Form>
    </Card>
    </div>
    
    </div>
    </Page>
    </>
  );
  }
}
