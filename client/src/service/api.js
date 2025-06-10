import axios from 'axios';
import { use } from 'react';

const url = 'http://localhost:8000';

export const authenticatelogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}


export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user,{
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateSendOtp = async (user) => {
    try {
        return await axios.post(`${url}/sendotp`, user)
    } catch (error) {
        console.log('Error while calling SendOtp API: ', error);
    }
}

export const authenticateVerifyOtp = async (user) => {
    try {
        return await axios.post(
            `${url}/verifyotp`, 
            user, 
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.log('Error while calling VerifyOtp API:', error.response?.data || error.message);
    }
};


export const authenticateResendOtp = async (user) => {
    try {
        return await axios.post(`${url}/resendotp`, user)
    } catch (error) {
        console.log('Error while calling ResendOtp API: ', error);
    }
}

export const authenticateSetPassword = async (user) => {
    try {
        return await axios.post(`${url}/setpassword`, user, {
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.log('Error while calling setpassword API: ', error);
    }
}
export const addProduct = async (product) => {
    const formData = new FormData();
formData.append("name", product.name);
formData.append("brand", product.brand);
formData.append("category", product.category);
formData.append("description", product.description);
formData.append("price[MRP]", product.price.MRP);
formData.append("price[cost]", product.price.cost);
formData.append("price[discountPercent]", product.price.discountPercent);
formData.append("stock", product.stock);
formData.append("warranty", product.warranty);
formData.append("ratings[average]", product.ratings.average);
formData.append("ratings[totalReviews]", product.ratings.totalReviews);
formData.append("highlights[]", product.highlights);
product.specifications.forEach((specifications, index) => {
formData.append(`specifications[${index}][heading]`,specifications.heading);
formData.append(`specifications[${index}][value]`,specifications.value);
});
product.variants.forEach((variant, index) => {
  formData.append(`variants[${index}][screenSize]`, variant.screenSize);
  formData.append(`variants[${index}][color]`, variant.color);
  formData.append(`variants[${index}][RAM]`, variant.RAM);
  formData.append(`variants[${index}][ROM]`, variant.ROM);

  variant.images.forEach((image, imgIndex) => {
    formData.append(`images_${index}`, image);
  });
});

    try { 
        // Send the product data as JSON in the POST request
        const response = await axios.post(`${url}/products/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure content type is set to JSON
            }
        });
        return response;
    } catch (error) {
        console.log('Error while inserting product response', error);
        // Optionally, you can throw the error or return a custom message
        throw error;
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}