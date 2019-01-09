import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {

    onClickItemList(value){
        this.props.onClickItem(value);
    }
    render() {
      const { data, onClickMore } = this.props;
  
      return (
        <div>
            {
                data.map( (item) =>(
                    <Item 
                        onClick={() => this.onClickItemList(item.title)}
                        onClickMore={onClickMore}
                        title={item.title} 
                        comment={item.comment}
                    />
                ) 
            )
            }
         </div>   
    ); 
    }
  }