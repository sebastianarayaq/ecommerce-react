import Cardproduct from "../CardProduct/CardProduct";

const ItemListContainer = () => {
    return (
        <div className="flex flex-wrap justify-around items-center gap-4 my-4">
            <Cardproduct />
            <Cardproduct />
            <Cardproduct />
        </div>
    );
};

export default ItemListContainer;