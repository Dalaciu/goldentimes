import React from "react";

import Footer from "./Home/Footer";
import "./PriceList.scss";

const pricesFrizerie = [
  {
    name: "Pachet tuns aranjat și Barbă",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Tuns SkinFade si Aranjat",
    spacer: "......................",
    price: "90 RON",
  },
  {
    name: "Tuns Clasic și Aranjat",
    spacer: "......................",
    price: "80 RON",
  },
  {
    name: "Tuns Copil",
    spacer: "......................",
    price: "80 RON",
  },
  {
    name: "Tuns Zero",
    spacer: "......................",
    price: "40 RON",
  },
  {
    name: "Tuns Barbă",
    spacer: "......................",
    price: "30 RON",
  },
];
const pricesCoafor = [
  {
    name: "Pachet Tuns Schimbare Formă",
    spacer: "......................",
    price: "200 RON",
  },
  {
    name: "Pachet Tuns Intreținere Formă",
    spacer: "......................",
    price: "150 RON",
  },
  {
    name: "Tuns Copil",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Tuns Breton",
    spacer: "......................",
    price: "40 RON",
  },
  {
    name: "Spalat Capilar",
    spacer: "......................",
    price: "250 RON",
  },
  {
    name: "Coafat - Mireasă",
    spacer: "......................",
    price: "300 - 550 RON",
  },
  {
    name: "Coafat de Ocazie",
    spacer: "......................",
    price: "200 - 350 RON",
  },
  {
    name: "Coafat Bucle Păr Lung",
    spacer: "......................",
    price: "150 RON",
  },
  {
    name: "Coafat Bucle Păr Mediu",
    spacer: "......................",
    price: "120 RON",
  },
  {
    name: "Coafat Drept Păr Lung",
    spacer: "......................",
    price: "120 RON",
  },
  {
    name: "Coafat Drept Păr Mediu",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Coafat Păr Scurt",
    spacer: "......................",
    price: "100 RON",
  },
  {
    name: "Tratament Hidratare și Reparare",
    spacer: "......................",
    price: "250 RON",
  },
  {
    name: "Vopsit Balayage",
    spacer: "......................",
    price: "1000 - 1700 RON",
  },
  {
    name: "Decolorat și Revopsit Total",
    spacer: "......................",
    price: "700 - 1300 RON",
  },
  {
    name: "Decolorat și Revopsit Rădăcină",
    spacer: "......................",
    price: "700 - 1300 RON",
  },
  {
    name: "Vopsit Șuvițe",
    spacer: "......................",
    price: "400 - 700 RON",
  },
  {
    name: "Vopsit Clasic",
    spacer: "......................",
    price: "300 - 450 RON",
  },
  {
    name: "Nuanțat Culoare",
    spacer: "......................",
    price: "250 RON",
  },
];

const PriceList = () => {
  return (
    <div className="price-list">
      <div className="price-name">Frizerie</div>

      <table>
        <tbody>
          {pricesFrizerie.map((price) => (
            <tr key={price.name}>
              <td>{price.name}</td>
              <td>{price.spacer}</td>
              <td>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="price-name">Coafor</div>
      <table>
        <tbody>
          {pricesCoafor.map((price) => (
            <tr key={price.name}>
              <td>{price.name}</td>
              <td>{price.spacer}</td>
              <td>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};
export default PriceList;
