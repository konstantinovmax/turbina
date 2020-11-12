import React from 'react'

const PlayListItem = ({ item, onClick, isCloseSongRelease}) => {
    const { title, author} = item
    return <div>
        <h3 className={`header__songs-release ${isCloseSongRelease && 'header__songs-release_closed'}`} 
        onClick={_ => onClick(item)}>{title} - {author}</h3>

    </div>

}

export default PlayListItem;