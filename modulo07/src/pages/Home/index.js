import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src={
            "https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-feminino/38/HZM-1747-038/HZM-1747-038_zoom1.jpg?ims=544x"
          }
          alt=""
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 299,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
