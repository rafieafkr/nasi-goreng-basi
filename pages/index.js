import Head from "next/head";
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

console.log(
  "%cLooking for a recruitment? We don't do that here. Also there's nothing here, go away!",
  "color:red; font-size:17pt;"
);

const menus = [
  {
    id: 1,
    src: "/img/Nasi Goreng 1.png",
    alt: "nasi-goreng-bekicot",
    nama: "Nasi Goreng Bekicot",
    deskripsi: "Nasi goreng + daging bekicot",
    harga: "RP10.000",
  },
  {
    id: 2,
    src: "/img/Nasi Goreng 2.png",
    alt: "nasi-goreng-kuda",
    nama: "Nasi Goreng kuda",
    deskripsi: "Nasi goreng + daging kuda",
    harga: "RP10.000",
  },
  {
    id: 3,
    src: "/img/Nasi Goreng 3.png",
    alt: "nasi-goreng-timun",
    nama: "Nasi Goreng Timun",
    deskripsi: "Nasi goreng + timun mas",
    harga: "RP10.000",
  },
  {
    id: 4,
    src: "/img/Nasi Goreng 3.png",
    alt: "nasi-goreng-timun",
    nama: "Nasi Goreng Timun",
    deskripsi: "Nasi goreng + timun mas",
    harga: "RP10.000",
  },
  {
    id: 5,
    src: "/img/Nasi Goreng 3.png",
    alt: "nasi-goreng-timun",
    nama: "Nasi Goreng Timun",
    deskripsi: "Nasi goreng + timun mas",
    harga: "RP10.000",
  },
  {
    id: 6,
    src: "/img/Nasi Goreng 3.png",
    alt: "nasi-goreng-timun",
    nama: "Nasi Goreng Timun",
    deskripsi: "Nasi goreng + timun mas",
    harga: "RP10.000",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Nasi Goreng Basi</title>
      </Head>
      <Navbar />
      <Hero />
      <Menu menus={menus} />
      <Footer />
    </>
  );
}
