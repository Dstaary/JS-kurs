class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zawartosci portfela
        this.getWalletValue = () => _money;

        //sprawdzanie odpowiedniej ilosci srodków
        this.checkCanPlay = value => {
            if(_money >= value) return true; 
            return false; 
        }

        //zmienianie zawartosci portfela
        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error ("nieprawidlowy tryb działania")
                }
            } else {
                console.log(typeof value);
                throw new Error ("nieprawidlowa liczba")
            }
        }
    }

}
