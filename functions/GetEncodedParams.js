import { ethers } from 'ethers';

export const GetEncodedParams = async (req) => {
    const abiCoder = new ethers.utils.AbiCoder();

    const types = req.query.types.split(',');
    const values = req.query.values.split(',');

    console.log(types, values);

    let data = abiCoder.encode(types, values);
    data = data.slice(2,data.length);

    const result = {
        inputs: {types: types, values: values},
        output: {data: data},
        success: true
    }

    return result;
}