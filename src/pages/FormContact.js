import React, { useState, useEffect ,useRef} from "react";
import { Button, Form, FormLayout, TextField } from "@shopify/polaris";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  Page } from "@shopify/polaris";
import axios from "axios";
import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
} from "@shopify/polaris";

import useShowSkeleton from '../useShowSkeleton'
let SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

export default function FormOnSubmitExample() {
  const [showSkeleton] = useShowSkeleton()
  const [successStatus, setSuccessStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: SignupSchema,
 
    onSubmit: async (values) => {
      
      axios
        .post("https://testapi.io/api/anhez/contact-us", values, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          
          console.log(response.data.msg);
                setSuccessMessage(response.data.msg);
                setSuccessStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
      
    },
  


  });
  const handleChange = (value, id) => {
    formik.setFieldValue(id, value);
  };
  const { values, errors, touched } = formik;
  console.log("touched.email", formik.values.subject, formik.values.email);

  if (showSkeleton) {
    return (
      <div className="contact-form-skeleton skeleton-container">
      <SkeletonPage primaryAction>
        <Layout>
          <Layout.Section>
            <div className="contact-form-skeleton__header skeleton-container__header ">
              <SkeletonDisplayText size="medium" />
            </div>
            <div className="contact-form-skeleton__inner skeleton-container__inner">
              <div className="contact-form-skeleton__inner-guideline skeleton-container__inner-guideline">
                <Card sectioned>
                  <TextContainer>
                    <SkeletonBodyText lines={4} />
                  </TextContainer>
                </Card>
              </div>
              <Card sectioned>
                <TextContainer>
                  <SkeletonBodyText lines={1} />
                  <SkeletonDisplayText size="small" />
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonBodyText lines={1} />
                  <SkeletonDisplayText size="small" />
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonBodyText lines={1} />
                  <SkeletonDisplayText size="small" />
                </TextContainer>
                <div className="save-btn-skeleton">
                  <SkeletonDisplayText size="medium" />
                </div>
              </Card>
            </div>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    </div>
    )
  } else {
    return (
      <div className="contact-form-wrap">
        <Page>
          <div className="contact-form-container">
            <h3>Contact </h3>
            <div className="contact-form_header">
              <Card>
                {successStatus ? (
                  <p className="success-message">{successMessage}</p>
                ) : (
                  <div>
                    <p>
                      Don't hesitate to contact us if you face any problem or
                      have any question about the app. We are happy to help you.
                    </p>
                    <p>
                      Please give us permission to access your Shopify admin. So
                      we could support you quickly. We need to access App and
                      Online Store and Themes. Our email address for creating
                      staff account is: contact@globosoftware.net
                    </p>
                  </div>
                )}
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

                    <Button submit primary>
                      Save
                    </Button>
                  </FormLayout>
                </Form>
              </Card>
            </div>
          </div>
        </Page>
      </div>
    );
  }
}
