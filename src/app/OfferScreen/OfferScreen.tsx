import { useState, useEffect, useContext } from "react";
import { OffersData } from "../config/restuarantsdata";
import Image from "next/image";
import { OrderItem } from "../config/restuarantsdata";
import { BurgerMenu, FriesMenu, ColdDrinks } from "../config/restuarantsdata";
import { CartOrderContext } from "../context/cartContext";

export type CartItem = OrderItem & {
    quantity : number
};


export const Offers = () => {
    const [isPopupOpen, setisPopupOpen] = useState(false);
    const [cart, setCart] = useState <CartItem[]> ([]);
    const [selectedItem, setSelectedItem] = useState <OrderItem | null> (null);

    const context = useContext(CartOrderContext);
    if(!context) {
        return null
    }
    const { setAddedItem } = context;

    useEffect(() => {
        if (isPopupOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
      }, [isPopupOpen]);

    const handleOpen = (item: OrderItem) => {
        setisPopupOpen(true)
        setSelectedItem(item)
    };
    const handleClose = () => {
        setisPopupOpen(false)
    };

    // add
    const handleAddToCart = () => {
        if (selectedItem) {
            setAddedItem(prevItems => {
                const existingItem = prevItems.find(item => item.id === selectedItem.id);
                if (existingItem) {
                    // Update quantity
                    return prevItems.map(item =>
                        item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                } else {
                    // Add new item to cart with quantity 1
                    return [...prevItems, { ...selectedItem, quantity: 1 }];
                }
            });
        }
        handleClose(); // Close the popup after adding to cart
    };


    return (
        <>
            <div className="flex my-10 max-sm:block max-sm:mr-2">
                {OffersData.map((items, index) => (
                    <div key={index} 
                        style={{
                        backgroundImage:`url(${items.image})`,
                        backgroundPosition : 'center',
                        backgroundSize : 'cover'
                        }}
                        className="h-[225px] sm:w-[400px] sm:mx-4 rounded-md max-sm:my-3 max-sm:w-[350px]"
                        >
                            <div className="py-2 px-2 text-white font-bold text-center w-[50px] bg-blue1 justify-self-end rounded-bl-md">
                                {items.percent}
                            </div>

                            <div className="mt-20 py-10 flex justify-between">
                                <div className="pl-4">
                                    <p className="text-orange1 font-medium">{items.text}</p>
                                    <h2 className="text-white text-xl font-bold">{items.tag}</h2>
                                </div>
                            </div>
                    </div>
                ))};
            </div>
            
            {/* burger section */}
            <div className="mt-4">
                <h1 className="font-bold text-3xl ml-2">Burgers</h1>

                <div className="grid grid-cols-3 gap-4 my-3">
                    {BurgerMenu.map((items) => (
                        <div key={items.id} className="flex justify-between w-[396px] h-[195px] shadow-lg shadow-black px-4 py-4 my-2 rounded-lg">
                            <div>
                                <h2 className="font-semibold text-lg">{items.offer}</h2>
                                <p className="text-sm w-[200px] my-4">{items.details}</p>
                                <p className="font-bold">GBP : {items.price}</p>
                            </div>

                            <div className="relative">
                                <Image 
                                src={items.image}
                                alt="image"
                                width={150}
                                height={80}
                                />
                                <button className="absolute left-24 bottom-4 bg-white py-2 px-2 rounded-tl-[20px]" onClick={() => handleOpen(items)}>
                                    <Image 
                                    src={'/Plus.svg'}
                                    alt="add"
                                    width={49}
                                    height={30}
                                    /> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Fries Section */}
            <div className="mt-4">
                <h1 className="font-bold text-3xl ml-2 text-orange1">Fries</h1>

                <div className="grid grid-cols-3 gap-4 my-3">
                    {FriesMenu.map((items) => (
                        <div key={items.id} className="flex justify-between w-[396px] h-[195px] shadow-lg shadow-black px-4 py-4 my-2 rounded-lg">
                            <div>
                                <h2 className="font-semibold text-lg">{items.offer}</h2>
                                <p className="text-sm w-[200px] my-4">{items.details}</p>
                                <p className="font-bold">GBP : {items.price}</p>
                            </div>

                            <div className="relative">
                                <Image 
                                src={items.image}
                                alt="image"
                                width={150}
                                height={80}
                                />
                                <button className="absolute left-24 bottom-4 bg-white py-2 px-2 rounded-tl-[20px]" onClick={() => handleOpen(items)}>
                                    <Image 
                                    src={'/Plus.svg'}
                                    alt="add"
                                    width={49}
                                    height={30}
                                    /> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Cold Drinks Section */}
            <div className="mt-4">
                <h1 className="font-bold text-3xl ml-2 text-orange1">Cold Drinks</h1>

                <div className="grid grid-cols-3 gap-4 my-3">
                    {ColdDrinks.map((items) => (
                        <div key={items.id} className="flex justify-between w-[396px] h-[195px] shadow-lg shadow-black px-4 py-4 my-2 rounded-lg">
                            <div>
                                <h2 className="font-semibold text-lg">{items.offer}</h2>
                                <p className="text-sm w-[200px] my-4">{items.details}</p>
                                <p className="font-bold">GBP : {items.price}</p>
                            </div>

                            <div className="relative">
                                <Image 
                                src={items.image}
                                alt="image"
                                width={150}
                                height={80}
                                />
                                <button className="absolute left-24 bottom-4 bg-white py-2 px-2 rounded-tl-[20px]" onClick={() => handleOpen(items)}>
                                    <Image 
                                    src={'/Plus.svg'}
                                    alt="add"
                                    width={49}
                                    height={30}
                                    /> 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Popup Menu */}
            {isPopupOpen ? 
                <div id="popup-menu"
                    role="dialog"
                    aria-modal="true"
                    style={{
                    transform: 'translate(-50%, -50%)',
                    zIndex : 999
                    }} 
                    className="fixed top-[50%] left-[50%] bg-white max-w-[400px] rounded-md shadow-black shadow-md w-[90%] p-[30px]">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-2xl mb-2">Are you sure you want to Order?</h1>
                            <div className="justify-self-center">
                                <img src={selectedItem?.image} alt="image" width={200} />
                                <h3 className="font-semibold text-xl">{selectedItem?.offer}</h3>
                                <p className="font-semibold">${selectedItem?.price}</p>
                            </div>
                            <div className="text-white flex justify-center my-4 gap-10 items-center">
                                <button onClick={handleAddToCart} className="bg-green-500 py-1 font-bold hover:scale-90 px-6 text-center rounded-md">Yes</button>
                                <button onClick={handleClose} className="bg-red-600 hover:scale-90 font-bold px-6 py-1 rounded-md">No</button>
                            </div>
                        </div>
                </div> : null}

            {/* Popup Overlay */}
            {isPopupOpen && (
                <div onClick={handleClose}
                className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                }}
                aria-hidden="true"></div>
            )}
        </>
    )
};
