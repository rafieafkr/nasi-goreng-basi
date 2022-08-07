import React, { useState } from "react";
import Image from "next/image";

const Menu = (props) => {
  const [href, setHref] = useState("");

  const getMenu = (namaMenu) => {
    const url = "https://wa.me/628994566170?text=";
    const teksAwal = `Halo, ${namaMenu}nya masih ada ga?`;
    const pesan = teksAwal.replaceAll(" ", "%20");

    const teksAkhir = url + pesan;
    setHref(teksAkhir);
    document.getElementById("beli").click();
  };

  return (
    <div className="flex flex-nowrap justify-between overflow-x-auto snap-x pb-11 pl-8 pr-10">
      {props.menus.map((menu) => (
        <div
          key={menu.id}
          className="shadow-xl shadow-slate-400 rounded-lg border p-6 mx-7 snap-center"
        >
          <Image
            src={menu.src}
            alt={menu.alt}
            width={180}
            height={180}
            className="rounded-md"
          />
          <p className="text-sky-900 font-bold text-lg">{menu.nama}</p>
          <p className="text-gray-400 text-xs font-thin mb-4">
            {menu.deskripsi}
          </p>
          <div className="flex flex-nowrap justify-between">
            {/* atur ukuran card menu dengan mengatur margin harga */}
            <p className="text-sky-900 font-bold text-lg mt-1 mr-10">
              {menu.harga}
            </p>

            <a href={href} id="beli">
              <button
                className="bg-amber-400 px-5 py-2 rounded-md text-white font-semibold hover:bg-amber-500 active:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300 transition-all"
                onClick={() => getMenu(menu.nama)}
              >
                Beli
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
