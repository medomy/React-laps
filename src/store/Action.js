
export const Count = (counter)=>{
    return {
        type : "Count_Favourites",
        payload : counter
    }
}

export const AddToFavourites = (Add)=>{
    return{
        type : "Add_TO_Favourite",
        payload : Add
    }
}

  
