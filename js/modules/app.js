const url = "https://6687d9620bc7155dc01958fe.mockapi.io/api/v1/data";


export const getAllProducts = async(text) => {
    const options = {
        method: 'GET'
    };

    let data = await fetch(url, options);
    let res = data.json();
    return res;
}