import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PasswordOutput from "@/components/PasswordOutput";
import PasswordGenerator from "@/components/PasswordGenerator";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const handlePasswordGenerated = (password: string) => {
    setGeneratedPassword(password);
  };
  return (
    <>
      <div>
        <h1>Password Generator</h1>
        <PasswordOutput GeneratedPassword={generatedPassword}></PasswordOutput>
        <PasswordGenerator onPasswordGenerated={setGeneratedPassword} />
      </div>
    </>
  );
}
