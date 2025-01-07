import axios from 'axios';
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { DNA } from 'react-loader-spinner';

const Phones = () => {
    const[phones, setPhones] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
        console.log(phoneWithFakeData)
        setPhones(phoneWithFakeData)
        setLoading(false)
        })
    },[])

    return (
        <div>
            {loading && 
                <div className='flex justify-center'>
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            }
            <p className="text-3xl">Phone Data: {phones.length}</p>
            <BarChart width={1200} height={350} data={phones} barSize={60}>
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;