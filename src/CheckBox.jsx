import React from 'react'

const CheckBox = () => {

    const [liked , setLiked] = React.useState('');
    
    function onSelect(e) {
        setLiked(e.target.checked);
    }

  return (
    <div>
        <input 
        type="checkbox"
        onChange={onSelect}
        checked={liked}
        />
      <p>Using Ternary Condition :: You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  )
}
export default CheckBox;