"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  SignUpFields,
  SignUpSchema,
} from "@/utils/zod-schemas";

const ReactHookFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          phoneNo: data.phoneNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();

      if (responseData?.errors) {
        Object.entries(responseData.errors).forEach(([field, message]) => {
          setError(field as SignUpFields, {
            type: "server",
            message: message as string,
          });
        });
      }

      if (responseData?.created) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md border bg-white p-5 shadow"
      >
        <h2 className="text-2xl font-bold mb-5">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.name &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            }`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors?.name?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.email &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.password &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            }`}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.confirmPassword &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            }`}
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone No
          </label>
          <input
            {...register("phoneNo")}
            type="text"
            name="phoneNo"
            id="phoneNo"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              errors?.phoneNo &&
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            }`}
          />
          {errors.phoneNo && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors?.phoneNo?.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookFormWithZod;
