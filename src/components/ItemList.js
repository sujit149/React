const ItemList = (items) => {
  console.log("items===", items);
  return (
    <div className="item-list">
      {items.items.map((item) => (
        <div className= "item-info" key={item.card?.info?.id}>
          <div className="item-header">
            <span className="item-name">{item.card?.info?.name}</span>
            <span className="item-price"> - Rs. {item.card?.info?.price / 100}</span>
          </div>
          <p className="item-description">{item.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
