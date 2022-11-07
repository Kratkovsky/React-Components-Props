import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
Создать новый проект. В нем создать компонент Товар
Товару необходимо передавать:
- название
- описание
- цену
Отобразите верстку, которая покажет название, описание и цену товара
*/

/*
class Header extends React.Component {
  render() {
    return (
      <header>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      </header>
    );
  }
}
*/

const product = {
  name: 'Smartphone',
  description: 'Very smart phone',
  price: '1000$',
  available: true,
};

function Header(quantity) {
  return (
    <header>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </header>
  );
}

root.render(<Header />);

/*
Пусть Товар теперь принимает также проп количества товара. В зависимости от количества товара отображать либо:
что он в наличии 
либо что его нет в наличии
*/

const productQuantity = 10;

function IsAvailable(quantity) {
  if (productQuantity > 0) {
    return <p>Congratulations, {product.name} is available!</p>;
  } else {
    return <p>Sorry, {product.name} is not available.</p>;
  }
}

root.render(
  <div>
    <IsAvailable />
  </div>
)

// * Реализовать заглушки в компоненте для пропсов и отображать их, если некоторые данные не передали
