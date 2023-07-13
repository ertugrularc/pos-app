import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import StatisticCard from "../components/statistic/StatisticCard";

const StatisticPage = () => {
  const [products, setProducts] = useState([]);
  const user =JSON.parse( localStorage.getItem("posUser"))

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await  fetch(process.env.REACT_APP_SERVER_URL  + "/api/bills/get-all")
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-5">İstatistiklerim</h1>
        <div className="statistic">
          <h2 className="text-lg">
            Welcome
            <span className="text-green-700 font-bold text-xl"> bro</span>
          </h2>
          <div className="statistic-cards grid flex-col my-10 gap-10">
            <StatisticCard
              title={"Toplam Müşteri"}
              amount={"10"}
              img={"images/user.png"}
            />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={"$97.354.64"}
              img={"images/money.png"}
            />
            <StatisticCard
              title={"Toplam Satış"}
              amount={"79"}
              img={"images/sale.png"}
            />
            <StatisticCard
              title={"Toplam Ürün"}
              amount={"158"}
              img={"images/product.png"}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
