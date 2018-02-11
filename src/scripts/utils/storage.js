import React, { Component } from 'react';
import { AsyncStorage } from "react-native";

const storage = {
    async save(key, value) {
        try{
            await AsyncStorage.setItem(key, value);
            console.log(value);
        } catch(error) {
            console.log(error);
        }
    },

    async load(key) {
        const data = await AsyncStorage.getItem(key);
        return await data;
    },

    async remove(key) {
        await AsyncStorage.removeItem(key);
    }
}

export default storage;
