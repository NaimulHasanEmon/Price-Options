import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": "1",
            "name": "Basic Plan",
            "price": 29.99,
            "currency": "USD",
            "features": [
                "Access to gym facilities during off-peak hours",
                "Use of basic cardio and weight equipment",
                "1 personal training session per month"
            ]
        },
        {
            "id": "2",
            "name": "Standard Plan",
            "price": 49.99,
            "currency": "USD",
            "features": [
                "Access to gym facilities during peak and off-peak hours",
                "Unlimited use of cardio and weight equipment",
                "2 personal training sessions per month",
                "Access to sauna and steam room",
                "10% discount on gym merchandise"
            ]
        },
        {
            "id": "3",
            "name": "Premium Plan",
            "price": 79.99,
            "currency": "USD",
            "features": [
                "24/7 access to gym facilities",
                "Unlimited use of cardio, weight equipment, and functional training areas",
                "4 personal training sessions per month",
                "Access to all group fitness classes",
                "Free guest pass each month",
                "10% discount on supplements and merchandise"
            ]
        },
        {
            "id": "4",
            "name": "Elite Plan",
            "price": 119.99,
            "currency": "USD",
            "features": [
                "24/7 access to gym facilities with VIP entry",
                "Unlimited use of all cardio, weight, and specialty equipment",
                "Unlimited personal training sessions",
                "Access to all group fitness classes",
                "Access to sauna, steam room, hot tubs, and VIP lounge",
                "20% discount on supplements and merchandise",
                "Unlimited guest passes"
            ]
        },
        {
            "id": "5",
            "name": "Ultimate Plan",
            "price": 159.99,
            "currency": "USD",
            "features": [
                "24/7 access to gym facilities with VIP entry and parking",
                "Unlimited use of all gym equipment, including exclusive zones",
                "Unlimited personal training sessions",
                "Access to VIP-only group fitness classes",
                "Private access to sauna, steam room, and VIP lounge",
                "25% discount on all supplements, merchandise, and services",
                "Free monthly massage therapy session"
            ]
        }
    ]
    

    return (
        <div>
            <p className="text-4xl text-purple-500 underline">Best Price in Town:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    priceOptions.map(option =>
                        <PriceOption
                            key={option.id}
                            option={option}
                        ></PriceOption>
                    )
                }
            </div>
        </div>
    );
};

export default PriceOptions;