class requests {
    static async top() {
        try {
            return await fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=pln")
                .then((data) => {resolve(data.json())});
        } catch (error) {
            console.log(error);
        }
    }
}

export default requests;
