function isShowPrice (price) {
    if (price > 500000) {
        return (
            <p>
                <s>{price}</s>
                    <span className="text-[#0ACF83] font-bold text-lg ml-1">{price - 100000}</span>
            </p>
        )
    } else if (price > 100000) {
        return (
        <span className="text-[#0ACF83] font-bold text-lg ml-7">{price}</span>
        )
    } else {
        return <span>Sold Out!</span>
    }
}

function ProductCard () {

    const diskonHarga = 80000;

    return (
        <section className="w-[352px] shadow-md">
            <div className="bg-[#152A46] flex flex-row rounded-t-[20px]">
                <img src={"/public/img/person.png"} alt="a person" className="w-75px] h-[150px] ml-[28px] mt-[16px]"/>
                <div className="ml-[17px] mt-[27px] mr-[5px]">
                    <p className="text-[#FFCD29] font-bold text-base">Intensive Bootcamp</p>
                    <p className="text-white font-bold text-xl">Programming Laravel</p>
                    <p className="text-white font-bold text-xs">(Getting started with laravel 9)</p>
                </div>
            </div>
            <div className="bg-white rounded-b-[20px] p-[24px]">
                <p className="text-black font-bold text-xl">Programming Laravel</p>
                <p className="text-black font-bold text-lg">Getting started with laravel 9</p>
                {isShowPrice(600000)}
            </div>
        </section>
    )
}

export default ProductCard