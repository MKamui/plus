"use client";
import React, {useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import {useSignInWithEmailAndPassword, useAuthState} from "react-firebase-hooks/auth"
import {auth} from "@/app/firebase"
import { useRouter } from "next/navigation";

const Contacto = () => {
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
    const router = useRouter()
    const [user] = useAuthState(auth)

    useEffect(() => {
        if(user){
            router.push("/content")
        }
      }, [user]);

  return (
    <div className="w-[80%] h-fit flex flex-col items-center justify-center bg-white rounded-2xl text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl text-black py-[2%]">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email";
          } else if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const res = await signInWithEmailAndPassword(values.email, values.password)
            if (res == undefined){
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something go wrong, are you a rebel spy?',
                    showConfirmButton: false,
                    timer: 4000,
                    customClass: "w-[80%] md:w-[60%] text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl text-black",
                  })
            } else {
                Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'Welcome again Sith Lord',
                  showConfirmButton: false,
                  timer: 4000,
                  customClass: "w-[80%] md:w-[60%] text-xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl 4xl:text-9xl text-black",
                })
                resetForm()
                setSubmitting(false);
                router.push("/content")
            }
          } catch (error) {
            resetForm()
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-[80%] flex flex-col items-center gap-[25px] md:gap-[30px] xl:gap-[25px]">

            <div className="flex w-full flex-col relative">
              <label className="pb-[10px] xl:pb-[8px] font-bold tracking-wide">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="bg-black w-full shadow-xl text-gray-400 p-[1%] rounded-2xl text-sm md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 absolute right-0 bottom-[-28%] text-xs md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
              />
            </div>

            <div className="flex flex-col w-full relative pt-[2%]">
              <label className="pb-[10px] xl:pb-[8px] font-bold tracking-wide">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                className="bg-black w-full shadow-xl text-gray-400 p-[1%] rounded-2xl text-xs md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 absolute right-0 bottom-[-28%] text-sm md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl"
              />
            </div>
            <div className="pt-[5%] w-full flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center bg-gray-500 hover:scale-105 ease-in duration-300 justify-center rounded-2xl w-[50%] h-fit p-[1%] hover:bg-red-800 font-bold tracking-wide"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contacto;
