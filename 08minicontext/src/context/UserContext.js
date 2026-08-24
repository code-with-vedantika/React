import React from 'react'

// Lets you create a Context that components can provide or read.

// @param defaultValue
// The value you want the context 
// to have when there is no matching
// 
//  Provider in the tree above the component
// reading the context. This is meant as a 
// "last resort" fallbac
const UserContext=React.createContext()

export default UserContext