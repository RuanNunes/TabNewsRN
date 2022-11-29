import React, {useEffect,useState} from "react";
import { Text, StyleSheet, View } from "react-native";

import { COLORS } from "../../colors";
import { GetContent } from "../../services/getContent";

import TopMenu from "../../components/topMenu";
import BottomMenu from '../../components/BottomMenu'
import PostsFlatList from "../../components/postsFlatlist";



export default function RecentScreen() {
 const getContent = async () => {
    const resultado = await GetContent()
    console.log(resultado)
 }

 useState(() => {
  getContent()
 }, [])

  return <>
    
    <View style={styles.screen}>
    <TopMenu />
    <PostsFlatList />
 

    </View>
    <BottomMenu />
  </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.LightGray,
    },
})