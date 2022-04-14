import React, {useState, useEffect} from 'react';

function App() {
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    const [dollar, setDollar] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(
                response => response.json()
            )
            .then((json) => setCoins(json));
        setLoading(true);
    }, [])

    return (
        <div>
            <h1>The Coins! {coins.length}</h1>
            {
                loading
                    ? null
                    : <strong>Loading...</strong>
            }

            <select>

                {
                    coins.map(
                        (coin) =>< option > {
                            coin.name
                        }({coin.symbol} : $ {
                            coin.quotes.USD.price
                        })</option>
                    )
                }
            </select>
        </div>
    );
}

export default App;
